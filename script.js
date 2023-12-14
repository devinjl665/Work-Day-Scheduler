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


function buttonClickEvent(){

  var hour = $(this).attr('id').match(/\d+/g);


  var task = $(this).parent().children('textarea').val();


localStorage.setItem('workSchedule' + hour, task);
}