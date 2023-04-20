// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//global variables




$(document).ready(function () {

  var $currentDayEl = $('#currentDay');


  var $currentDay = (moment().format('dddd, MMMM Do'));
  $currentDayEl.text($currentDay);

  $(".saveBtn").on("click", function () {
    console.log(this);

    var text = $(this).siblings(".description")[0].value;
    console.log(text);

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log(time, text);
  })


  $("#hour-12 .description").val(localStorage.getItem("hour12"));


  var currentHour = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    var blockHour = (parseInt($(this).attr("id").split("hour-")[1]));
    console.log(blockHour, currentHour)

    //check if we've moved past this time, checks css/html given classes of past, present, or future
    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
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






    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.



//add display current day of week with date ---DONE


//create time blocks for standard business hours 9am to 5pm, color code
// to show past (gray), present (red) and future (green).

// function to audit and update hour slot colors to reflect current time

//click event - on hour slot allows user to enter an event. 

//click event - click on save box of hour slot to save entry to live storage

//refresh page - event persists in timeblock