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
                // console.log("timeblock", timeBlocks)
            timeBlocks.each(function(index, element) {
                //console.log('INDEX', index)
                //console.log('ELEMENT', element)
                console.log(element.id)
                if (localStorage.getItem(element.id)) {
                    var descriptionText = localStorage.getItem(element.id)
                        // update dom with the returned data
                        // $(element.id)
                    console.log('SOMNE DATA', JSON.parse(descriptionText))
                    console.log('THE HOUR BLOCK', $(element))
                    console.log('TEXTAREA', $(element).children('textarea'))
                    $(element).children("textarea").val(JSON.parse(descriptionText))
                } 
            })
                //if current hour
                if (currentHour === timeBlockHr)
                {
                    $(this).addClass("present")
                }
                    //time block is green if its future
                    else if (currentHour > timeBlockHr){
                        $(this).addClass("future")
                    }
                    //time block is grey if its past
                    else if (currentHour < timeBlockHr){
                        $(this).addClass("past")
                    }

}); 
