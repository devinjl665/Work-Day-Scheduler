# Work-Day-Scheduler


## Description

A simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). Hours that have passed will display a gray input field, the current hour will have a red input field, and future hours will have a green input field. The data entered in the input field will be able to be saved to local storage by clicking the save button

## Demo



## Site Link

https://devinjl665.github.io/Work-Day-Scheduler/

## Usage

Enter your tasks into the input field by the corresponding hour you need to complete them. To save the tasks: click on the blue, floppy disk icon button. This will allow the data entered into the input field to be saved to the local storage and will keep your data in the input fields even after refreshing. 

## Credits

The starter code was provided by Wash U Coding Bootcamp. jQuery and Day.js were the third-party APIs used to dynamically update the html and css, working with date and time.

## User Story

As an employee with a busy schedule I want to add important events to a daily planner so that I can manage my time effectively.

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am - 5pm

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
