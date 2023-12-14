// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  });

//Declaring variables

var today = dayjs();

var calendarContainer = $('#calendar-container');

displayDate();
displayInput();
displayTask();

for(var i = 9; i < 18; i++){
  var button = $('#button-hour-' + i);
  button.on('click', buttonClickEvent);
}

function displayDate(){
  var weekDay = dayjs(today, 'M-D-YYYY').format('dddd');
  $('#currentDay').text(weekDay + ', ' + today.format('MMMM DD, YYYY'));
}


function displayInput(){
  var hour = 9;

  while(hour < 18){

    var hourBlock = $('<div>');
    hourBlock.addClass('row time-block past');
    hourBlock.attr('id', 'hour-' + hour);


    var hourDisplay = $('<div>');
    hourDisplay.addClass('col-2 col md-1 hour text-center py-3');

    if(hour < 12){
      hourDisplay.text(hour + ' AM');
    } else if(hour == 12) {
      hourDisplay.text(hour + ' PM');
    } else {
      hourDisplay.text(hour - 12 + ' PM')
    }

    
    hourBlock.append(hourDisplay);

    var input = $('<textarea>');
    input.addClass('col-8 col-md-10 description');
    input.attr('rows', '3');
    input.attr('id', 'input-hour-' + hour);

    var currentHour = dayjs().format('H');
    if(hour < currentHour){
      input.addClass('past');
    } else if (hour == currentHour){
      input.addClass('present');
    } else {
      input.addClass('future');
    }


    hourBlock.append(input);


    var button = $('<button>');
    button.addClass('btn saveBtn col-2 col-md-1');
    button.attr('aria-label', 'save');
    button.attr('id', 'button-hour-' + hour);
    
    var i = $('<i>');
    i.addClass('fas fa-save');
    i.attr('aria-hidden', 'true');
    button.append(i);
    hourBlock.append(button);

    calendarContainer.append(hourBlock); 

    hour ++;
  }
}

function displayTask(){
  var hour = 9;

  while (hour < 18){
    var task = localStorage.getItem('workSchedule' + hour);

    var input = $('#input-hour-' + hour);
    input.val(task);

    hour++
  }
}