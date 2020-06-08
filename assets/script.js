//current day at top
$("#currentDay").text(moment().format("dddd MMM Do YYYY"))
//Current hours
var currentHour = moment().hours();



//User hits save after entering a task
$(".saveBtn").on("click", function(){

    event.preventDefault();
    
    //Gets values and saves to local storage
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    console.log(time, value);
    console.log(localStorage);

})

//Color coded blocks for past/present/future
//Loops through timeblocks
function hourColor() {

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        //Check hours if they're in the past, present, or future
        if(blockHour < currentHour) {
            //Changes color of time-block if in the past
            // $(this).addClass("past");
            $(this).children("textarea").addClass("past");
        }
        else if (blockHour === currentHour) {
            //Changes color if the time-block is in the present
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            //Changes color if the time-block is in the future
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
})}

hourColor();

// Load updates from local storage at page load
$("#hour-8.description").val(localStorage.getItem("hour-8"));
$("#hour-9.description").val(localStorage.getItem("hour-9"));
$("#hour-10.description").val(localStorage.getItem("hour-10"));
$("#hour-11.description").val(localStorage.getItem("hour-11"));
$("#hour-12.description").val(localStorage.getItem("hour-12"));
$("#hour-13.description").val(localStorage.getItem("hour-13"));
$("#hour-14.description").val(localStorage.getItem("hour-14"));
$("#hour-15.description").val(localStorage.getItem("hour-15"));
$("#hour-16.description").val(localStorage.getItem("hour-16"));
$("#hour-17.description").val(localStorage.getItem("hour-17"));


// Load the localStorage values
// for(let i = 8; i < 18; i++){
//     $(`#hour-${i}.description`).val(localStorage.getItem(`hour-${i}`));
// }
