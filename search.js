//GLOBALS
var serverResponse;
var serverResponse2;
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
		//setDataMargins1();
		drawData1();
	});
}

function submitter2(){
	output.innerHTML = ""; //clear output
	$.post("db.php", {LGA:document.getElementById("search2").value}, function(response){ //call db.php with search string called LGA and resturn a response
		console.log(response); //debug and testing of JSON return value
		serverResponse2 = jQuery.parseJSON(response); //convert JSON response to Javascript Array
		/*for(var i=1; i<14; i++){ //for each column in the serverResponse array - note it doesnt work with the .length value of the array
			output.innerHTML += "["+i+"]"+serverResponse2[0][i]+"<BR>"; //note you must use serverResponse[0] as your base and then numbers [0]-[146]
		}*/
		dataToStrings2();
		//setDataMargins1();
		drawData2();
	});
}

function dataToStrings(){
	for(var n=4;n<14;n++){
		serverResponse[0][n] = serverResponse[0][n] * 30;
	}
	roundNumbers();
	calcMarginTop1();
	for(var i=4;i<14;i++){
	var num = serverResponse[0][i];
	var numString = num.toString();
	stringData1[i-4] = numString;
	//output.innerHTML += stringData1[i-4] + "<br>";
	}
}

function dataToStrings2(){
	for(var n=4;n<14;n++){
		serverResponse2[0][n] = serverResponse2[0][n] * 30;
	}
	roundNumbers2();
	calcMarginTop2();
	for(var i=4;i<14;i++){
	var num = serverResponse2[0][i];
	var numString = num.toString();
	stringData2[i-4] = numString;
	//output.innerHTML += stringData1[i-4] + "<br>";
	}
}

//calculate the marginTop necessary for each specific datapoint to bring them to have even bottom levels
function calcMarginTop1(){
	for(var i=4;i<14;i++){
		topMargins1[i-4] = 350 - serverResponse[0][i];
	}
}
function calcMarginTop2(){
	for(var i=4;i<14;i++){
		topMargins2[i-4] = 350 - serverResponse2[0][i];
	}
}

//round numbers to whole numbers for pixel calculation in div height/marginTop
function roundNumbers(){
	for(var i=4;i<14;i++){
		serverResponse[0][i] = Math.round(serverResponse[0][i]);
	}
}
function roundNumbers2(){
	for(var i=4;i<14;i++){
		serverResponse2[0][i] = Math.round(serverResponse2[0][i]);
	}
}

//draw dataset 1 (animate height then marginTop)
function drawData1(){
		$('#bar1').animate({ height: stringData1[0] }, 1000); 
    	$('#bar3').animate({ height: stringData1[1] }, 1000);
	    $('#bar5').animate({ height: stringData1[2] }, 1000);
	    $('#bar7').animate({ height: stringData1[3] }, 1000);
	    $('#bar9').animate({ height: stringData1[4] }, 1000);
	    $('#bar11').animate({ height: stringData1[5] }, 1000);
	    $('#bar13').animate({ height: stringData1[6] }, 1000);
	    $('#bar15').animate({ height: stringData1[7] }, 1000);
	    $('#bar17').animate({ height: stringData1[8] }, 1000);
	    $('#bar19').animate({ height: stringData1[9] }, 1000); 

	    $('#bar1').animate({ marginTop: topMargins1[0] }, 1000); 
    	$('#bar3').animate({ marginTop: topMargins1[1] }, 1000);
	    $('#bar5').animate({ marginTop: topMargins1[2] }, 1000);
	    $('#bar7').animate({ marginTop: topMargins1[3] }, 1000);
	    $('#bar9').animate({ marginTop: topMargins1[4] }, 1000);
	    $('#bar11').animate({ marginTop: topMargins1[5] }, 1000);
	    $('#bar13').animate({ marginTop: topMargins1[6] }, 1000);
	    $('#bar15').animate({ marginTop: topMargins1[7] }, 1000);
	    $('#bar17').animate({ marginTop: topMargins1[8] }, 1000);
	    $('#bar19').animate({ marginTop: topMargins1[9] }, 1000);
}

//draw dataset 2 (animate height then marginTop)
function drawData2(){
		$('#bar2').animate({ height: stringData2[0] }, 1000); 
    	$('#bar4').animate({ height: stringData2[1] }, 1000);
	    $('#bar6').animate({ height: stringData2[2] }, 1000);
	    $('#bar8').animate({ height: stringData2[3] }, 1000);
	    $('#bar10').animate({ height: stringData2[4] }, 1000);
	    $('#bar12').animate({ height: stringData2[5] }, 1000);
	    $('#bar14').animate({ height: stringData2[6] }, 1000);
	    $('#bar16').animate({ height: stringData2[7] }, 1000);
	    $('#bar18').animate({ height: stringData2[8] }, 1000);
	    $('#bar20').animate({ height: stringData2[9] }, 1000);  

	    $('#bar2').animate({ marginTop: topMargins2[0] }, 1000); 
    	$('#bar4').animate({ marginTop: topMargins2[1] }, 1000);
	    $('#bar6').animate({ marginTop: topMargins2[2] }, 1000);
	    $('#bar8').animate({ marginTop: topMargins2[3] }, 1000);
	    $('#bar10').animate({ marginTop: topMargins2[4] }, 1000);
	    $('#bar12').animate({ marginTop: topMargins2[5] }, 1000);
	    $('#bar14').animate({ marginTop: topMargins2[6] }, 1000);
	    $('#bar16').animate({ marginTop: topMargins2[7] }, 1000);
	    $('#bar18').animate({ marginTop: topMargins2[8] }, 1000);
	    $('#bar20').animate({ marginTop: topMargins2[9] }, 1000);  
}

