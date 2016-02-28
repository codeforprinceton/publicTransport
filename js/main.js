

//var A = [['n','sqrt(n)']];


function createlink(A, filename){


	var csvRows = [];

	for(var i=0, l=A.length; i<l; ++i){
	    csvRows.push(A[i].join(','));
	}

	var csvString = csvRows.join("%0A");
	// var a         = document.createElement('a');
	// a.href        = 'data:attachment/csv,' + csvString;
	// a.target      = '_blank';
	// a.download    = filename;

	var linkText = document.createTextNode(filename);
	var a = document.createElement('a');
	a.appendChild(linkText);
	a.title = "Download "+filename;
	a.href = 'data:attachment/csv,' + csvString;
	a.target = '_blank';
	a.download = filename;

	var brk = document.createElement('br');

	//document.body.appendChild(a);
	$("#downloads").append(brk).append(a);
}

function deletelink(){

}
//a.click();