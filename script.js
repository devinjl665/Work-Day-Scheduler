// Declaring variables
var today = dayjs();
var calendarContainer = $('#calendar-container');

// Displays the current date
displayDate();

// Displays the input elements for each hour
displayInput();

// Displays tasks saved in local storage
displayTask();

// Attaches click event handlers to the save buttons
for (var i = 9; i < 18; i++) {
  var button = $('#button-hour-' + i);
  button.on('click', buttonClickEvent);
}

// Function to display the current date
function displayDate() {
  var weekDay = dayjs(today, 'M-D-YYYY').format('dddd');
  $('#currentDay').text(weekDay + ', ' + today.format('MMMM DD, YYYY'));
}

// Function to display input elements for each hour
function displayInput() {
  var hour = 9;

  while (hour < 18) {
    // Create a container for each hour block
    var hourBlock = $('<div>');
    hourBlock.addClass('row time-block past');
    hourBlock.attr('id', 'hour-' + hour);

    // Create a div for displaying the hour
    var hourDisplay = $('<div>');
    hourDisplay.addClass('col-2 col md-1 hour text-center py-3');

    // Set the text content of the hour display
    if (hour < 12) {
      hourDisplay.text(hour + ' AM');
    } else if (hour == 12) {
      hourDisplay.text(hour + ' PM');
    } else {
      hourDisplay.text(hour - 12 + ' PM');
    }

    // Append the hour display to the hour block
    hourBlock.append(hourDisplay);

    // Create a textarea for user input
    var input = $('<textarea>');
    input.addClass('col-8 col-md-10 description');
    input.attr('rows', '3');
    input.attr('id', 'input-hour-' + hour);

    // Determine and set the class for past, present, or future based on current time
    var currentHour = dayjs().format('H');
    if (hour < currentHour) {
      input.addClass('past');
    } else if (hour == currentHour) {
      input.addClass('present');
    } else {
      input.addClass('future');
    }

    // Append the input to the hour block
    hourBlock.append(input);

    // Create a button for saving
    var button = $('<button>');
    button.addClass('btn saveBtn col-2 col-md-1');
    button.attr('aria-label', 'save');
    button.attr('id', 'button-hour-' + hour);

    // Create an icon for the button
    var i = $('<i>');
    i.addClass('fas fa-save');
    i.attr('aria-hidden', 'true');

    // Append the icon to the button
    button.append(i);

    // Append the button to the hour block
    hourBlock.append(button);

    // Append the hour block to the calendar container
    calendarContainer.append(hourBlock);

    // Increment the hour for the next iteration
    hour++;
  }
}

// Function to display tasks from local storage
function displayTask() {
  var hour = 9;

  while (hour < 18) {
    // Retrieve task from local storage based on the hour
    var task = localStorage.getItem('workSchedule' + hour);

    // Set the value of the corresponding textarea
    var input = $('#input-hour-' + hour);
    input.val(task);

    // Increment the hour for the next iteration
    hour++;
  }
}

// Function to handle button click events
function buttonClickEvent() {
  // Extract the hour from the button's ID using regex
  var hour = $(this).attr('id').match(/\d+/g);

  // Retrieve the task from the corresponding textarea
  var task = $(this).parent().children('textarea').val();

  // Store the task in local storage with a key that includes the hour
  localStorage.setItem('workSchedule' + hour, task);
}
