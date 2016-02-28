//console.log('This would be the main JS file.');
//filler

var wantedCourse = {subject:"A" , courseNumber: "B" , name: "C" , day:"D" , attribute: "[A,B]"}
var dbCourse = {subject:"A" , courseNumber: "B" , name: "C" , day:"D" , attribute: "[A]"}

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
	/*if ( isSubset(wantedCourse.attribute , dbCourse.attribute) != 1) {
		return false;
	}*/
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
	return true; 
}
	
if (filter(wantedCourse , dbCourse)) {
	alert("The filter is true");
}
else {
	alert("The filter is false");
}

//Get the name of the course
function displayChoice(){
var nameList = document.getElementById("SSR_CLSRCH_WRK_SUBJECT_SRCH$0");
var something = document.getElementById("render1").value=nameList.options[nameList.selectedIndex].value;
}

function testAlert(){
	alert(nameList.);
}