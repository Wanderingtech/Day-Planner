//Adding the elements to html. Decided directly changing html worked better for now
// $(".container").append("<div class='row'></div>");
// $(".row").append("<input class='time-block col-md-8'></input>");
// $(".time-block").append("<input class='description' type='text'></input>")
// $(".row").append("<button class='btn saveBtn col-md-1'><i class='fas fa-save'></i></button>");

//current day at top
$("#currentDay").text(moment().format("dddd MMM Do YYYY"))

//Timeblocks for each hour of a day. Work day 8-5


//User enters event by clicking a timeblock


//Prevent default to keep events after page refresh


//Color coded blocks for past/present/future
