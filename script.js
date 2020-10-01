$(document).ready(function() {
    var currentDay = $("#currentDay");
    var date = new Date();
    currentDay.append(date);


    //var container = document.getElementsByClassName("container");
    //put elijah notes here?
    //for (var i = 0; i < hours.length; i++) {
    //var newHourDiv = $("<div class='row'>" + hours[i] + "</div>");
    //var textbox = $("<input type='text' id='myInput'></input>");
   
    var date = new Date();
    var hourNow = date.getHours(); 
    console.log(hourNow);
    

    if (hourNow < 9) {
        $("#nineAM").addClass("future");
        $("#tenAM").addClass("future");
        $("#elevenAM").addClass("future");
        $("#twelvePM").addClass("future");
        $("#onePM").addClass("future");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 9) {
        $("#nineAM").addClass("present");
        $("#tenAM").addClass("future");
        $("#elevenAM").addClass("future");
        $("#twelvePM").addClass("future");
        $("#onePM").addClass("future");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 10) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("present");
        $("#elevenAM").addClass("future");
        $("#twelvePM").addClass("future");
        $("#onePM").addClass("future");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 11) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("present");
        $("#twelvePM").addClass("future");
        $("#onePM").addClass("future");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 12) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("present");
        $("#onePM").addClass("future");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 13) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("present");
        $("#twoPM").addClass("future");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 14) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("past");
        $("#twoPM").addClass("present");
        $("#threePM").addClass("future");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 15) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("past");
        $("#twoPM").addClass("past");
        $("#threePM").addClass("present");
        $("#fourPM").addClass("future");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 16) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("past");
        $("#twoPM").addClass("past");
        $("#threePM").addClass("past");
        $("#fourPM").addClass("present");
        $("#fivePM").addClass("future");
    };

    if (hourNow === 17) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("past");
        $("#twoPM").addClass("past");
        $("#threePM").addClass("past");
        $("#fourPM").addClass("past");
        $("#fivePM").addClass("present");
    };

    if (hourNow > 17) {
        $("#nineAM").addClass("past");
        $("#tenAM").addClass("past");
        $("#elevenAM").addClass("past");
        $("#twelvePM").addClass("past");
        $("#onePM").addClass("past");
        $("#twoPM").addClass("past");
        $("#threePM").addClass("past");
        $("#fourPM").addClass("past");
        $("#fivePM").addClass("past");
    };




    saveBtn = $(".saveBtn").on("click", function() {
            var task = document.getElementsByClassName("myInput").value;
            localStorage.setItem("calendar item", JSON.stringify(task));
            updateHTML();
    });
        

    

    function updateHTML() {
        var task = getTask();
        document.getElementsByClassName("myInput").innerHTML = task;
    }
  

    function getTask() {
        return localStorage.getItem("myInput");
    }
});