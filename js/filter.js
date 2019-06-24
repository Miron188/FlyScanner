(function(){

	numberOfSerch = document.getElementsByClassName('number-of-search');

	countTr = document.getElementById('table-tbody').getElementsByTagName('tr');
	numberOfSerch[0].innerText = countTr.length;

	buttons = document.getElementsByClassName('ui buttons small');

	var selectedButton;
	buttons[0].onclick = function(event){
		var target = event.target;

		if(selectedButton){
			selectedButton.classList.remove('active');
		}
		selectedButton = target;
		selectedButton.classList.add('active');
			typeOfFilterText = document.getElementsByClassName('button active');
		typeOfFilter.innerText = typeOfFilterText[0].textContent;
	};

	typeOfFilter = document.getElementById('type-of-filter');

	function sortTable(){
		
		var lines = document.getElementById('table-tbody').getElementsByTagName('tr');
		var lines2 = lines;
		var arrLinesPrice = [];
		

		for (var i = 0; i < lines.length; i++) {
			arrLinesPrice[i] = i + " " + lines[i].getElementsByClassName('price')[0].textContent
			.slice(0, lines[i].getElementsByClassName('price')[0].textContent.length - 2);
		};

		//alert(lines[0].innerHTML);
	
		arrLinesPrice.sort(compareNumeric);

		//alert(document.getElementById('table-tbody').innerHTML );
		

		for (var j = 0; j < arrLinesPrice.length; j++) {
			 const elem = document.createElement("tr");
			elem.innerHTML += lines[j].innerHTML;
			document.getElementById('table-tbody').appendChild(elem);
		};	
	};

	function compareNumeric(a, b) {
	  if (a.slice(2) > b.slice(2)) return 1;
	  if (a.slice(2) < b.slice(2)) return -1;
	}

		//alert(document.querySelector('#input-to .selected'));
	//sortTable();





})();