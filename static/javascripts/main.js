//console.log('This would be the main JS file.');
//fille
// app.listen(port, function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// });
//var assert = require('assert');
var url = "https://nothingsimpawsible.herokuapp.com/";
var socket = io.connect(url);

function pullInfo() {
  socket.emit('get data');
}

var something = 0;

var wantedCourse = {subject:"" , courseNumber: "" , name: "" , day:"" , attributes: ""}
var dbCourse = [{subject:"" , courseNumber: "" , name: "" , day:"" ,  attributes: [""]}]
/* 

wantedCourse must be an object with properties that are set according to what the user inputs on the HTML page. 

dbCourse must be an array of objects, rather than just an isolated object like wantedCourse. Each of the objects in the array should contain

So instead of comparing "wantedCourse" to "dbCourse", we should compare "wantedCourse" to "dbCourse[0]", "dbCourse[1]", "etc." by looping through each dbCourse object. 
Then we should display each of the dbCourse objects that returned true.
--CAVEAT--
    WE MUST REMOVE ALL OF THE SURROUNDING QUOTES IN EACH OF THE PROPERTY NAMES TO MAKE PROPER MATCHES.
        i.e. --> in the text file, we must remove change: 
            "subject" --> subject
*/
//Get the name of the course
function setSubject(){
var nameList = document.getElementById("SSR_CLSRCH_WRK_SUBJECT_SRCH$0");
return nameList.options[nameList.selectedIndex].value;
}

function setCourseNum() {
	var num = document.getElementById("courseNum").value;
	return num;
}


function setCourseName() {
	var Name = document.getElementById("courseName").value;
	return Name;
}

function setDay() {
  var dayString = "";
  if (document.getElementById("MON").checked) {
    dayString = "Mo";
  }
  if (document.getElementById("TUE").checked)
    {dayString = dayString.concat("Tu");}
  if (document.getElementById("WED").checked)
    {dayString = dayString.concat("We");}
  if (document.getElementById("THUR").checked)
    {dayString = dayString.concat("Th");}
  if (document.getElementById("FRI").checked)
    {dayString = dayString.concat("Fr");}
  if (document.getElementById("SAT").checked)
    dayString = dayString.concat("Sa");
  if (document.getElementById("SUN").checked) 
    dayString = dayString.concat("Su");
  return dayString;
}

function setAttributes() {
	var atrArray = new Array();
	if (document.getElementById("bsc").checked) {
		atrArray.push("BSC");
	}
	if (document.getElementById("cbl").checked)	
		atrArray.push("CBL");
	if (document.getElementById("gen").checked)
		atrArray.push("GEN");
	if (document.getElementById("glo").checked)
		atrArray.push("GLO");
	if (document.getElementById("vpa").checked)
		atrArray.push("VPA");
	if (document.getElementById("nsc").checked)
		atrArray.push("NSC");
	if (document.getElementById("nsl").checked)
		atrArray.push("NSL");
	if (document.getElementById("qur").checked)
		atrArray.push("QUR");
	if (document.getElementById("rae").checked)
		atrArray.push("RAE");
	if (document.getElementById("sch").checked)
		atrArray.push("SCH");
	if (document.getElementById("evpa").checked)
		atrArray.push("EVPA");
	if (document.getElementById("wwk").checked) {
		atrArray.push("WWK");
	}	
	return atrArray;
}

function filter(wantedCourse , dbCourse ) {
  if (wantedCourse.subject) { //assuming condition is true if no subject value is passed (i.e. all subjects are default)
        if (dbCourse.subject != wantedCourse.subject) { 
            return false;
        }
    }  
    if (wantedCourse.courseNumber) {    
        if (dbCourse.courseNumber != wantedCourse.courseNumber) {
            return false;
        }
    }
    if (wantedCourse.name) {
        if (dbCourse.name != wantedCourse.name) {
            return false;
        }
    }
    if (wantedCourse.day) {
        if (dbCourse.day != wantedCourse.day) {
            return false;
        }
    }
	//Checking for subset
	if (wantedCourse.attributes) {
        var i = 0;
        while (i < wantedCourse.attributes.length) {
            var j = 0;
            while (j < dbCourse.attributes.length) {
                if (wantedCourse.attributes[i] != dbCourse.attributes[j]) { //if A is not C, then = 1/B... ifA!=B, j=2/A
                    j++; //GOES BACK W/O INCREMENTING
                }//end of if (60)
                else {
                    break;
                }
            } //end of while (59)
            if (wantedCourse.attributes[i] != dbCourse.attributes[j]){ //B is B
                return false;
            }//end of if (64)
            i++;
        }//end of while 57
    }
  something++;
  return true;
}

var matchingCourses = [];
socket.on('data sent', function(jsonArray) {
  console.log(JSON.stringify(jsonArray));

  wantedCourse.day = setDay();
  wantedCourse.attributes = setAttributes();
  wantedCourse.courseNumber = setCourseNum();
  wantedCourse.courseName = setCourseName();
  //var jsonArray = JSON.parse(text);
  for(var i = 0; i < jsonArray.length; i++) {
      if(filter(wantedCourse,jsonArray[i])) {
          matchingCourses.push(jsonArray[i]);
      }
  }
  if (something == 0) {
    alert("There are no courses that meet your specifications!");}
  else {
    alert("There are courses that meet your specifications!");} 
});
