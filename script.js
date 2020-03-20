//display time and date at the top of page
var currentDay = document.getElementById("currentDay");

//current time and date on page
currentDay.textContent = moment().format('dddd, MMMM Do YYYY')


var hour10note= document.getElementById("hour10note")

// let currentHour be the hour of the current time of day
var currentHour = parseInt(moment().format("H"));

//check localstorage for hours data
//update hoursDay if localStroage for hours data isnt empty

// get reference to all the hours
var timeBlockElements = $(".time-block")

timeBlockElements.each(function () {
    // get the hour of the block
    var timeBlockHr = parseInt(this.id.split("-")[1]);
    var saveBtn = $(this).find("button")
    
    //create user object from submission
        $('.saveBtn').on('click', function(event) {
            //prevent defaults
            var descriptionText = $(this).siblings(".description").val();
            
            var timeBlockEl = $(this).parent(".time-block").attr("id")

            event.preventDefault();
            //store that data by settin it to local storage
            localStorage.setItem(timeBlockEl, JSON.stringify(descriptionText));
        });

            var timeBlocks = $(".time-block")
            //make timeblocks for a second time
            timeBlocks.each(function(index, element) {

                if (localStorage.getItem(element.id)) {
                    var descriptionText = localStorage.getItem(element.id)
                        // update dom with the returned data
                    $(element).children("textarea").val(JSON.parse(descriptionText))
                } 
            })
                //if current hour
                if (currentHour === timeBlockHr)
                {
                    $(this).addClass("present")
                }
                    //time block is green if its future
                    else if (currentHour < timeBlockHr){
                        $(this).addClass("future")
                    }
                    //time block is grey if its past
                    else if (currentHour > timeBlockHr){
                        $(this).addClass("past")
                    }

}); 
