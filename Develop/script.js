var today = dayjs();

$('#currentDay').text(today.format('dddd, MMMM DD')); 

// Add Event Listener to the button
$(".saveBtn").on("click", function() {
var input = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

// saving event to local storage
localStorage.setItem(time, input);

});

function displayTime() { 

  var rightNow = dayjs().hour();

      $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < rightNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === rightNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
    
            }
        });
  }

     // Get user's input that was saved in localStorage
     $("#hour9 .description").val(localStorage.getItem("hour9"));
     $("#hour10 .description").val(localStorage.getItem("hour10"));
     $("#hour11 .description").val(localStorage.getItem("hour11"));
     $("#hour12 .description").val(localStorage.getItem("hour12"));
     $("#hour13 .description").val(localStorage.getItem("hour13"));
     $("#hour14 .description").val(localStorage.getItem("hour14"));
     $("#hour15 .description").val(localStorage.getItem("hour15"));
     $("#hour16 .description").val(localStorage.getItem("hour16"));
     $("#hour17 .description").val(localStorage.getItem("hour17"));   

  displayTime();

