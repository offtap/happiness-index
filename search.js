//GLOBALS
var serverResponse;
var serverResponse2;
var stringData1 = new Array(); 
var stringData2 = new Array();

var output = document.getElementById("output"); //DEBUG ONLY OUTPUT

//AUTOCOMPLETE SEARCH - //search database using autocomplete
$(function() { $("#search").autocomplete({source: "search.php",minLength: 1});}); 

$(function() { $("#search2").autocomplete({source: "search.php",minLength: 1});}); 

//SUBMITTER - call PHP with LGA search string from AUTOCOMPLETE
function submitter(){
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
	});
}

function dataToStrings(){
	roundNumbers();
	for(var i=4;i<14;i++){
	serverResponse[0][i] = serverResponse[0][i] * 30;
	var num = serverResponse[0][i];
	var numString = num.toString();
	stringData1[i-4] = numString;
	//output.innerHTML += stringData1[i-4] + "<br>";
	}
}

function roundNumbers(){
	for(var i=4;i<14;i++){
		serverResponse[0][i] = Math.round(serverResponse[0][i]);
	}
}

function drawData1(){
		$('#bar1').animate({ height: stringData1[0] }, 1500); 
    	$('#bar2').animate({ height: stringData1[1] }, 1500);
	    $('#bar3').animate({ height: stringData1[2] }, 1500);
	    $('#bar4').animate({ height: stringData1[3] }, 1500);
	    $('#bar5').animate({ height: stringData1[4] }, 1500);
	    $('#bar6').animate({ height: stringData1[5] }, 1500);
	    $('#bar7').animate({ height: stringData1[6] }, 1500);
	    $('#bar8').animate({ height: stringData1[7] }, 1500);
}