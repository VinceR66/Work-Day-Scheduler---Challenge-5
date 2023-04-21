
$(document).ready(function () {

  var $currentDayEl = $('#currentDay');
  var $currentDay = (moment().format('dddd, MMMM Do'));
  $currentDayEl.text($currentDay);

  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description")[0].value;

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  var currentHour = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    var schedHour = (parseInt($(this).attr("id").split("hour-")[1]));

    //check time - adjust color coding to reflect past, present or future
    if (schedHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (schedHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
});





