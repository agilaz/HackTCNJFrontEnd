//console.log('This would be the main JS file.');
//filler

var wantedCourse = {subject:"" , courseNumber: "" , name: "" , day:"" , attribute: ""}
var dbCourse = {subject:"" , courseNumber: "" , name: "" , day:"" , attribute: [""]}

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

function setAttributes() {
	var atrArray = new Array();
	if (document.getElementById("bsc").checked) {
		atrArray.push("Behavioral, Social or Cultural");
	}
	if (document.getElementById("cbl").checked)	
		atrArray.push("Community Based Learning");
	if (document.getElementById("gen").checked)
		atrArray.push("Gender");
	if (document.getElementById("glo").checked)
		atrArray.push("Global");
	if (document.getElementById("vpa").checked)
		atrArray.push("Literary, Visual and Perform Arts");
	if (document.getElementById("nsc").checked)
		atrArray.push("Natural Science");
	if (document.getElementById("nsl").checked)
		atrArray.push("Natural Science with Lab");
	if (document.getElementById("qur").checked)
		atrArray.push("Quantitative Reasoning");
	if (document.getElementById("rae").checked)
		atrArray.push("Ethnicity");
	if (document.getElementById("sch").checked)
		atrArray.push("Change in Historical");
	if (document.getElementById("vpa").checked)
		atrArray.push("VPA for School of Education");
	if (document.getElementById("wwk").checked) {
		atrArray.push("World Views and Ways of Knowing");
	}	
	return atrArray;
}

function filter(wantedCourse , dbCourse ) {
	if (wantedCourse.subject) { //assuming condition is true if no subject value is passed (i.e. all subjects are default)
        if (dbCourse.subject != wantedCourse.subject) { 
            return false;
        }
    }
    if    
        if (dbCourse.courseNumber != wantedCourse.courseNumber) {
            return false;
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
	if (wantedCourse.attribute) {
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
    }
	alert("trueeee")
	return true;
}

function setProperties(){
	wantedCourse.subject = setSubject(); //wantedCourse.subject = the value of what the user selects
	//alert(wantedCourse.subject); 
	wantedCourse.day = setDay();
	wantedCourse.attribute = setAttributes();
	filter(wantedCourse , dbCourse);
}