//GLOBALS
var serverResponse;
var serverResponse2;

var serverResponseTransformed = new Array(); 
var serverResponseTransformed2 = new Array(); 

var stringData1 = new Array(); 
var stringData2 = new Array();
var topMargins1 = new Array();
var topMargins2 = new Array();

var output = document.getElementById("output"); //DEBUG ONLY OUTPUT

//AUTOCOMPLETE SEARCH - //search database using autocomplete
$(function() { $("#search").autocomplete({source: "search.php",minLength: 1});}); 

$(function() { $("#search2").autocomplete({source: "search.php",minLength: 1});}); 

//SUBMITTER - call PHP with LGA search string from AUTOCOMPLETE
function submitter(){
	findLocation();
	output.innerHTML = ""; //clear output
	$.post("db.php", {LGA:document.getElementById("search").value}, function(response){ //call db.php with search string called LGA and resturn a response
		console.log(response); //debug and testing of JSON return value
		serverResponse = jQuery.parseJSON(response); //convert JSON response to Javascript Array
		/*for(var i=1; i<14; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "["+i+"]"+serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
		}*/
		dataToStrings();
		drawData1();
		locName1 = document.getElementById("search").value;
	});
}

function submitter2(){
	setLocName2();
	output.innerHTML = ""; //clear output
	$.post("db.php", {LGA:document.getElementById("search2").value}, function(response){ //call db.php with search string called LGA and resturn a response
		console.log(response); //debug and testing of JSON return value
		serverResponse2 = jQuery.parseJSON(response); //convert JSON response to Javascript Array
		/*for(var i=1; i<14; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "["+i+"]"+serverResponse2[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
		}*/
		dataToStrings2();
		drawData2();
	});
}

function dataToStrings(){
	for(var n=4;n<14;n++){
		serverResponseTransformed[n-4] = serverResponse[0][n] * 30;
	}
	roundNumbers();
	for(var i=0;i<10;i++){
	var num = serverResponseTransformed[i];
	var numString = num.toString();
	stringData1[i] = numString;
	}
}

function dataToStrings2(){
	for(var n=4;n<14;n++){
		serverResponseTransformed2[n-4] = serverResponse2[0][n] * 30;
	}
	roundNumbers2();
	for(var i=0;i<10;i++){
	var num = serverResponseTransformed2[i];
	var numString = num.toString();
	stringData2[i] = numString;
	}
}

//round numbers to whole numbers for pixel calculation in div height/marginTop
function roundNumbers(){
	for(var i=0;i<10;i++){
		serverResponseTransformed[i] = Math.round(serverResponseTransformed[i]);
	}
}
function roundNumbers2(){
	for(var i=0;i<10;i++){
		serverResponseTransformed2[i] = Math.round(serverResponseTransformed2[i]);
	}
}

//draw dataset 1 (animate height then marginTop)
function drawData1(){
		$('#bar1').animate({ width: stringData1[0] }, 1000); 
    	$('#bar3').animate({ width: stringData1[1] }, 1000);
	    $('#bar5').animate({ width: stringData1[2] }, 1000);
	    $('#bar7').animate({ width: stringData1[3] }, 1000);
	    $('#bar9').animate({ width: stringData1[4] }, 1000);
	    $('#bar11').animate({ width: stringData1[5] }, 1000);
	    $('#bar13').animate({ width: stringData1[6] }, 1000);
	    $('#bar15').animate({ width: stringData1[7] }, 1000);
	    $('#bar17').animate({ width: stringData1[8] }, 1000);
	    $('#bar19').animate({ width: stringData1[9] }, 1000); 
}

//draw dataset 2 (animate height then marginTop)
function drawData2(){
		$('#bar2').animate({ width: stringData2[0] }, 1000); 
    	$('#bar4').animate({ width: stringData2[1] }, 1000);
	    $('#bar6').animate({ width: stringData2[2] }, 1000);
	    $('#bar8').animate({ width: stringData2[3] }, 1000);
	    $('#bar10').animate({ width: stringData2[4] }, 1000);
	    $('#bar12').animate({ width: stringData2[5] }, 1000);
	    $('#bar14').animate({ width: stringData2[6] }, 1000);
	    $('#bar16').animate({ width: stringData2[7] }, 1000);
	    $('#bar18').animate({ width: stringData2[8] }, 1000);
	    $('#bar20').animate({ width: stringData2[9] }, 1000);  
}

function sidebarIn1(){
		document.getElementById('hiddenSidebar').style.display = "block";
	   	outputHeader.innerHTML = "Housing Affordability" +"<BR>";
	    for(var i=16; i<33; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn2(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Wealth" +"<BR>";
	    for(var i=119; i<123; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn3(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Jobs" +"<BR>";
	    for(var i=94; i<105; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn4(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Community" +"<BR>";
	    for(var i=35; i<51; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn5(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Education" +"<BR>";
	    for(var i=73; i<92; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn6(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Safety" +"<BR>";
	    for(var i=53; i<58; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn7(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Health" +"<BR>";
	    for(var i=60; i<71; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn8(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Work-life Balance" +"<BR>";
	    for(var i=125; i<147; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarIn9(){
		document.getElementById('hiddenSidebar').style.display = "block";
		outputHeader.innerHTML = "Remoteness" +"<BR>";
	    for(var i=107; i<117; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "Label X" + "<BR>";
			output2.innerHTML += " " +serverResponse[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
			output3.innerHTML += "vs." + "<BR>";
			output4.innerHTML += serverResponse2[0][i]+"<BR>";
		}
	    $('#hiddenSidebar').animate({ marginRight:0 }, 1000);
	    document.getElementById("hideSidebar").style.display = "block";
}

function sidebarOut(){
		$('#hiddenSidebar').animate({ marginRight:-500 }, 1000);
		document.getElementById("hideSidebar").style.display = "none";
		setTimeout(function(){output.innerHTML = ""},1000);
		setTimeout(function(){output2.innerHTML = ""},1000);
		setTimeout(function(){output3.innerHTML = ""},1000);
		setTimeout(function(){output4.innerHTML = ""},1000);
		setTimeout(function(){document.getElementById('hiddenSidebar').style.display = "none"},1000);
}

function infoBarIn(){
		document.getElementById("infoBar").style.display = "block";
		$('#infoBar').animate({ marginRight:0 }, 1000);
		document.getElementById("showInfoBar").style.display = "none";
		document.getElementById("hideInfoBar").style.display = "block";
}

function infoBarOut(){
		$('#infoBar').animate({ marginRight:-500 }, 1000);
		document.getElementById("showInfoBar").style.display = "block";
		document.getElementById("hideInfoBar").style.display = "none";
		setTimeout(function(){document.getElementById('hiddenSidebar').style.display = "none"},1000);
}


