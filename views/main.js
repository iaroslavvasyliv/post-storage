(function () {
	"use strict";
	var computers = document.querySelector('#computers'),
		phones = document.querySelector('#phones'),
		selector = document.querySelector('#prod'),
		phonReset = document.querySelector('#phonReset'),
		compReset= document.querySelector('#compReset'),
		phoneResult = document.querySelector('#phoneResult'),
		compResult = document.querySelector('#compResult'),
		compList = document.querySelector('#compList'),
		phonList = document.querySelector('#phonList'),
		phonForm = document.querySelector('#phonForm'),
		compForm = document.querySelector('#compForm');

console.log(phoneResult);

selector.onchange = function () {
if (selector.value === 'computers') {
	computers.setAttribute("style", "display: block;"); 
	phones.setAttribute("style", "display: none;"); 
} else {
	computers.setAttribute("style", "display: none;"); 
	phones.setAttribute("style", "display: block;"); 
}
};

phonReset.onclick = function () {
	phonForm.elements[1].value = '';
	phonForm.elements[2].value = '';
	phonForm.elements[3].value = '';
};

compReset.onclick = function () {
	compForm.elements[1].value = '';
	compForm.elements[2].value = '';
	compForm.elements[3].value = '';
	compForm.elements[4].value = '';
	compForm.elements[5].value = '';
	
};

phonList.onchange = function () {
	 var url = 'http://localhost:8000/phones';
	 var request;
	 request = $.get(url);
	 request.complete(callback);
	 function callback(data) {
            var res = JSON.parse(data.responseText);
            phoneResult.value = res[(phonList.value-1)].name;
           
     }
	 
}
compList.onchange = function () {
	 var url = 'http://localhost:8000/computers';
	 var request;
	 request = $.get(url);
	 request.complete(callback);
	 function callback(data) {
            var res = JSON.parse(data.responseText);
            compResult.value = res[(compList.value-1)].name;
           
     }
	 
}



	


})();