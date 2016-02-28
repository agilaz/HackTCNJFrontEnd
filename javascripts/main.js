//console.log('This would be the main JS file.');
//filler



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
	if ( isSubset(wantedCourse.attribute , dbCourse.attribute) != 1) {
		return false;
	}
	return true; 
}


	function isSubset(wantedCourse.attribute , dbCourse.attribute) {
	var i = 0;
	var j = 0;
	var m = (wantedCourse.attribute.length) / (wantedCourse.attribute[0].length);
	var n = (dbCourse.attribute.length) / (dbCourse.attribute[0].length);

	for (i=0; i<n; i++) {
		for (j = 0; j<m; j++) {

			
		if(arr2[i] == arr1[j]) {
				break;
			}
		}
		if (j==m) {
				return 0;
			}
		}
		return 1;
	}	
	