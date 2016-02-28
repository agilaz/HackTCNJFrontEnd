//console.log('This would be the main JS file.');
//filler

var wantedCourse = {subject:"A" , courseNumber: "B" , name: "C" , day:"" , attribute: "[A,B]"}
var dbCourse = {subject:"AAS" , courseNumber: "B" , name: "C" , day:"" , attribute: "[A,B,C]"}

//Get the name of the course
function setSubject(){
var nameList = document.getElementById("SSR_CLSRCH_WRK_SUBJECT_SRCH$0");
return nameList.options[nameList.selectedIndex].value;
}

function setCourseNum() {
	var num = document.getElementById("Course#");
	return num;
}


function setName() {
	var Name = document.getElementById("courseName");
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

function setProperties(){
	wantedCourse.subject = setSubject(); //wantedCourse.subject = the value of what the user selects
	//alert(wantedCourse.subject); 
	wantedCourse.day = setDay();
	alert(wantedCourse.day);
}

function filter(wantedCourse , dbCourse ) {	
	if (dbCourse.subject != wantedCourse.subject) {
		return false;
	} 
	if (dbCourse.courseNumber != wantedCourse.courseNumber) {
		return false;
	}
	if (dbCourse.name != wantedCourse.name) {
		return false;
	}
	if (dbCourse.day != wantedCourse.day) {
		return false;
	}
	//Checking for subset
	var i = 0;
	while (i < wantedCourse.attribute.length) {
		var j = 0;
		while (j < dbCourse.attribute.length) {
			if (wantedCourse.attribute[i] != dbCourse.attribute[j]) { //if A is not C, then = 1/B... ifA!=B, j=2/A
				j++; //GOES BACK W/O INCREMENTING
			}//end of if (60)
			else {
				break;
			}
		} //end of while (59)
		if (wantedCourse.attribute[i] != dbCourse.attribute[j]){ //B is B
			alert ("false");
			return false;
		}//end of if (64)
		i++;
	}//end of while 57
	alert("trueeee")
	return true;
}

filter(wantedCourse , dbCourse);
