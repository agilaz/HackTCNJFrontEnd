var iterator1 = 0;
var iterator2 = 0;
var subjectList = [];
var civList = [];
var domainList = ['BSC','VPA','NSC','NSL','QUR','SCH','EVPA','WWK'];
var getSearchOptions = function() {
  var innerDoc = document.getElementById('ptifrmtgtframe').contentDocument;
  var subjectMenu = innerDoc.getElementById('SSR_CLSRCH_WRK_SUBJECT_SRCH$0');
  var attributeMenu = innerDoc.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15');
  var searchButton = innerDoc.getElementById('CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH');
  //console.log(subjectMenu);
  var menuOptions = subjectMenu.getElementsByTagName('option');
  subjectList = [];
  for(var i = 1; i < menuOptions.length; i++) {
    subjectList.push(menuOptions[i].value);
    //console.log(menuOptions[i].value);
  }

  attributeMenu.value = 'CIV';
  attributeMenu.onchange();
  var innerDoc = document.getElementById('ptifrmtgtframe').contentDocument;
  var attributeValueMenu = innerDoc.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15');
  civList = [];
  //console.log(attributeValueMenu);
  var menuOptions = attributeValueMenu.getElementsByTagName('option');
  for(var i = 1; i < menuOptions.length; i++) {
    civList.push(menuOptions[i].value);
    console.log(+i + ' ' + menuOptions[i].value);
  }

  /*attributeMenu.value = 'DOM';
  //attributeMenu.onchange();
  var innerDoc = document.getElementById('ptifrmtgtframe').contentDocument;
  var attributeValueMenu = innerDoc.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15');
  domainList = [];
  var menuOptions = attributeValueMenu.getElementsByTagName('option');
  for(var i = 1; i < menuOptions.length; i++) {
    domainList.push(menuOptions[i].value);
    //console.log(menuOptions[i].value);
  }*/
  // for (var i = 0; i < subjectList.length; i++) {
  //   subjectMenu.value = subjectList[i];
  //   attributeMenu.value = 'CIV';
  //   for (var j = 0; j < civList.length; j++) {
  //     attributeValueMenu.value = civList[i];
  //     //console.log(searchButton);
  //     clickButton();
      
  //   }
  // }
  console.log(civList.length);
  for(var i = 0; i < civList.length; i++) {
    console.log(civList[i]);
  }
  console.log(domainList.length);
  for(var i = civList.length; i < domainList.length+civList.length; i++) {
    console.log(domainList[i-civList.length]);
  }
  // if(civList.length == 0) getSearchOptions();
}
// var changeLiberalAttribute = function() {
//   if (document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value == 'CIV') {
//     console.log('DOM time');
//     console.log(document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15'));

//     document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'DOM';

//     needChange=false;
//     setTimeout(nextSearch,'1000');
//   }
//   else if (document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value == 'DOM') {
//     console.log('CIV time');
//     document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'CIV';
//     needChange=false;
//     setTimeout(nextSearch,'1000');
//   }
// }

var getSearchOptionsTwice = function() {
  setTimeout(getSearchOptions,'200');
  getSearchOptions();
}
//var needChange=true;
var nextSearch = function() {
  //console.log(+ iterator2 + ' ' + civList.length);
  if (iterator2 < civList.length) {
    // if(iterator2 == 0 && needChange && document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value != 'CIV') setTimeout(changeLiberalAttribute, '500');
    // else {
      //needChange=true;
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_SUBJECT_SRCH$0').value = subjectList[iterator1];
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'CIV';
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15').value = civList[iterator2++];
      console.log('finding: ' + document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_SUBJECT_SRCH$0').value + ' ' + document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15').value);
      if(iterator2 == civList.length) {
        document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'DOM';
      }
      clickButton();
    // }
  }
  else if (iterator2 < civList.length+domainList.length) {
    // if(iterator2 == civList.length && needChange) {
    //   changeLiberalAttribute();
    // } else {
      //needChange = true;
      //console.log(document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15'));
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_SUBJECT_SRCH$0').value = subjectList[iterator1];
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'DOM';
      document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15').value = domainList[iterator2-civList.length];
      //console.log(domainList[iterator2-civList.length]);
      iterator2++;
      console.log('finding: ' + document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_SUBJECT_SRCH$0').value + ' ' + document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR_VALUE$15').value);
      if(iterator2 == civList.length+domainList.length) {
        document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'CIV';
      }
      clickButton();
    //}
  }
  else if (iterator1 < subjectList.length-1) {
    iterator1++;
    iterator2=0;
    nextSearch();
  }
}
var clickButton = function() {
  document.getElementById('ptifrmtgtframe').contentDocument.getElementById('CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH').click();
  window.setTimeout(readCurrentClassList,'1500');
}
clickButtonOut = function() {
  document.getElementById('ptifrmtgtframe').contentDocument.getElementById('CLASS_SRCH_WRK2_SSR_PB_MODIFY').click();
  // if(iterator2 == civList.length) {
  //   document.getElementById('ptifrmtgtframe').contentDocument.getElementById('SSR_CLSRCH_WRK_CRSE_ATTR$15').value = 'DOM';
  // }
  window.setTimeout(nextSearch, '1500');
}

var courseInfo = [];
var count = 0;
var readCurrentClassList = function() {
  //console.log('reading class list');
  var COURSE_BASE_STRING = 'win0divSSR_CLSRSLT_WRK_GROUPBOX2$';
  var COURSE_TITLE_BASE_STRING = 'win0divSSR_CLSRSLT_WRK_GROUPBOX2GP$';
  //chrome.tabs.getCurrent()
  var innerDoc = document.getElementById('ptifrmtgtframe').contentDocument;
  var courseIndex = 0;
  var course = innerDoc.getElementById(COURSE_BASE_STRING+courseIndex);
  while (course) {
    var courseName = innerDoc.getElementById(COURSE_TITLE_BASE_STRING+courseIndex).innerText;
    var sections = course.getElementsByTagName('span');
    var index = 0;
    while(index+8 < sections.length) {
      //console.log( + index + ' ' + sections.length);
      var classNumber = sections[index++].innerText;
      //console.log( + index + ' ' + sections.length);
      var sectionNumber = sections[index++].innerText;
      //console.log( + index + ' ' + sections.length);
      var date = sections[index++].innerText;
      //console.log( + index + ' ' + sections.length);
      var room = sections[index++].innerText;
      var teacher = sections[index++].innerText;
      index++; //Ignore dates offered
      index++; //Ignore requirements
      index++; //Ignore reserved seats
      index++; //Ignore select button
      //console.log(courseName + ' ' + date + ' ' + room + ' ' + teacher);
      if(iterator2-1<civList.length) {
        addClass(courseName, classNumber, sectionNumber, date, room, teacher, civList[iterator2-1]);
      } else {
        addClass(courseName, classNumber, sectionNumber, date, room, teacher, domainList[iterator2-civList.length-1]);
      }
    }
    courseIndex++;
    course = innerDoc.getElementById(COURSE_BASE_STRING+courseIndex);
  }
  if(courseIndex > 0)
    clickButtonOut();
  else nextSearch();
}
function addClass(clsName, clsNum, secNum, date, rmNum, prof, attr){
  //create an object and save to classinfo[count]
  //count being a continually increasing incremented num
  clsName = clsName.substr(1);
  spaceLocation = clsName.indexOf(' ');
  var temp = clsName.substring(space2Location + 2, clsName.length - 1);
  var courseName = temp;
  var space2Location = clsName.indexOf(' ', spaceLocation + 1);
  var subject = clsName.substring(0, spaceLocation);
  var courseNumber = clsName.substring(spaceLocation + 1, space2Location);
  var myRegExp = /[A-Z][a-z]/g;
  var myArray = [];
  var myMatch = [];
  var i = 0;
  var j = 0;
  while((myMatch = myRegExp.exec(date)) !== null) {
   for(j = 0; j < i; j++){
      if(myArray[j] == myMatch[0]){
        break;
      }
    }
    if (j == i) {
      myArray[i++] = myMatch[0];
    }
    //console.log(myArray[i - 1]);
  }
  var dateList = [];
  for(i = 0; i < myArray.length; i++){
    if(myArray[i] == 'Mo'){
      dateList.push({day:'Monday', time:'now'});      
    }
    if(myArray[i] == 'Tu'){
      dateList.push({day:'Tuesday', time:'now'});
    }
    if(myArray[i] == 'We'){
      dateList.push({day:'WednesDay', time:'now'});
    }
    if(myArray[i] == 'Th'){
      dateList.push({day:'Thursday', time:'now'});
    }
    if(myArray[i] == 'Fr'){
      dateList.push({day:'Friday', time:'now'});
    }
    if(myArray[i] == 'Sa'){
      dateList.push({day:'Saturday', time:'now'});
    }
    if(myArray[i] == 'Su'){
      dateList.push({day:'Sunday', time:'now'});
    }
  }


  //date needs to read the days and time and return each of the unique days
  // for(i = 0; i < courseInfo.length; i++) {
  //   if(courseInfo[i].classNum == clsNum) {
  //     console.log(+courseInfo[i].classNum+ ' ' + clsNum + ' ' + attr);
  //     courseInfo[i].attributes.push(attr);
  //     console.log(courseInfo[i]);
  //     break;
  //   }
  }
  if(i == courseInfo.length) {
    var newObject = { "subject" : subject,
                      "courseNumber" : courseNumber,
                      "name" : courseName,
                      "classNum" :  clsNum, 
                      "sectionNum" : secNum, 
                      "schedule" : dateList,                    
                      "teacher" : prof,
                      "roomNum" : rmNum,
                      "attributes" : [attr]
                    };
    //console.log(newObject);
    courseInfo[count] = newObject;
    count++;
  }
}

