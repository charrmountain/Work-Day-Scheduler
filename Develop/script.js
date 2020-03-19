//display time and date at the top of page
var currentDay = document.getElementById("currentDay");

//current time and date on page
currentDay.textContent = moment().format('dddd, MMMM Do YYYY')

//hours location
var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour13 = document.getElementById("hour-13");
var hour14 = document.getElementById("hour-14");
var hour15 = document.getElementById("hour-15");
var hour16 = document.getElementById("hour-16");
var hour17 = document.getElementById("hour-17");

//Save Buttons
var saveBtn9 = document.getElementById("hour-9btn");
var saveBtn10 = document.getElementById("hour-10btn");
var saveBtn11 = document.getElementById("hour-11btn");
var saveBtn12 = document.getElementById("hour-12btn");
var saveBtn13 = document.getElementById("hour-13btn");
var saveBtn14 = document.getElementById("hour-14btn");
var saveBtn15 = document.getElementById("hour-15btn");
var saveBtn16 = document.getElementById("hour-16btn");
var saveBtn17 = document.getElementById("hour-17btn");

//text notes by hour
var hour9note = document.getElementById(id="hour9note");
var hour10note = document.getElementById(id="hour10note");
var hour11note = document.getElementById(id="hour11note");
var hour12note = document.getElementById(id="hour12note");
var hour13note = document.getElementById(id="hour13note");
var hour14note = document.getElementById(id="hour14note");
var hour15note = document.getElementById(id="hour15note");
var hour16note = document.getElementById(id="hour16note");
var hour17note = document.getElementById(id="hour17note");

//push notes into array
notesArray=[];
notesArray.push(hour9note);
notesArray.push(hour10note);
notesArray.push(hour11note);
notesArray.push(hour12note);
notesArray.push(hour13note);
notesArray.push(hour14note);
notesArray.push(hour15note);
notesArray.push(hour16note);
notesArray.push(hour17note);

//push buttons into array
saveBtnArray=[];
saveBtnArray.push(saveBtn9);
saveBtnArray.push(saveBtn10);
saveBtnArray.push(saveBtn11);
saveBtnArray.push(saveBtn12);
saveBtnArray.push(saveBtn13);
saveBtnArray.push(saveBtn14);
saveBtnArray.push(saveBtn15);
saveBtnArray.push(saveBtn16);
saveBtnArray.push(saveBtn17);

//put hours into array
hoursArray=[];
hoursArray.push(hour9);
hoursArray.push(hour10);
hoursArray.push(hour11);
hoursArray.push(hour12);
hoursArray.push(hour13);
hoursArray.push(hour14);
hoursArray.push(hour15);
hoursArray.push(hour16);
hoursArray.push(hour17);

//compare to the variable moment.js 
var hours =[
    {
        startHr :  "9:00:00 am",
        endHr :  "9:59:59 am",
    }, {
        startHr :  "10:00:00 am",
        endHr :  "10:59:59 am",
    }, {
        startHr :  "11:00:00 am",
        endHr :  "11:59:59 am",
    },{
        startHr :  "12:00:00 pm",
        endHr :  "12:59:59 pm",
    },{
        startHr :  "01:00:00 pm",
        endHr :  "01:59:59 pm",
    },{
        startHr :  "02:00:00 pm",
        endHr :  "02:59:59 pm",
    },{
        startHr :  "03:00:00 pm",
        endHr : "03:59:59 pm",
    },{
        startHr : "04:00:00 pm",
        endHr : "04:59:59 pm",
    }, {
        startHr :  "05:00:00 pm",
        endHr : "05:59:59 pm",
    }
]

//convert current moment.js to hr block 
var currentTime= moment().format("h:mm:ss a");

console.log(currentTime)

//loop around array of time
for(var i= 0; i < hours.length;i++){
    //time black is red if its current
    if (currentTime === hours[i]){

        $(hoursArray).addClass("present")
    }
     //time block is green if its future
    else if (currentTime > hours[i]){
        $(hoursArray).addClass("future")
    }
    //time block is grey if its past
    else if (currentTime < hours[i]){
        $(hoursArray).addClass("past")
    }
    //resets at the end of business day
    else (currentTime === "6:00:00 pm")
        $(hoursArray).addClass("future")
}
  
var todoList = [];

// when user clicks on save button then saves to local storage
$(saveBtnArray).on("click", function(){
    event.preventDefault();
    
    // get input
    var newItem = $.trim($(notesArray).val());

    // add input to list
    todoList.push(newItem)
  
    // add to local storage
    localStorage.setItem("todoList", JSON.stringify(todoList))
    //get back from local storage

    // JSON.parse(localStorage.getItem("todoList")).append("body")

});

// when they refresh page then todo list is still saved

//     (get from local storage)