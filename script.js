$(document).ready(function () {

  function displayTime() {
    var timeDisplayEl = $('#currentDay');
    var timeDisplay = (dayjs().format('MMM DD, YYYY [at] HH:mm:ss a'));
    timeDisplayEl.text(timeDisplay);

  };

  var currentHour = dayjs().hour();
  console.log(currentHour);


  $('.time-block').each(function () {
    var scheduleHour = (parseInt($(this).attr("id").split("hour-")[1]));
    console.log(scheduleHour);

    if (scheduleHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if
      (scheduleHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  })

  $(".saveBtn").on('click', function () {
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
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

  displayTime();
  setInterval(displayTime, 1000);

});





