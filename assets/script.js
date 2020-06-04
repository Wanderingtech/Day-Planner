//current day at top
$("#currentDay").text(moment().format("dddd MMM Do YYYY"))
//Adding the elements to html
$(".container").append("<input class='description' type='text'></input>")
$(".container").append("<input class='hour' type='text'></input>");
$(".container").append("<input class='row' type=text></div>");
$(".container").append("<input class='time-block' type=text></input>");
$(".container").append("<button class='saveBtn'>SAVE</button>");

//User enters event by clicking a timeblock


//Prevent default to keep events after page refresh


//Timeblocks for each hour of a day. Work day 8-5


//Color coded blocks for past/present/future
