(function() {

	var elemWhence = document.getElementById('whence');
	var elemWhere = document.getElementById('where');


	document.getElementById('btn-submit').onclick = function(){

		//alert(document.getElementById('whence').getAttribute('value-data'));


		if(elemWhence.textContent === "Страна, город или аэропорт"){
			elemWhence.parentNode.classList.add('error');
		}
		else{
			elemWhence.parentNode.classList.remove('error');
		};
		 
		 	if(elemWhere.textContent === "Страна, город или аэропорт"){
			elemWhere.parentNode.classList.add('error');
		}
		else{
			elemWhere.parentNode.classList.remove('error');
		};

		
	 	
	 	if(!Serch(elemWhence.textContent, arrWhere) || !Serch(elemWhere.textContent, arrWhence)){
	 		noRezShow();
	 		
	 	}
	 	else
	 	{
	 		if(elemWhence.textContent != " " || delemWhere.textContent != " "){
	 		document.getElementById('no-result').classList.add('hidden');
	 		document.getElementById('container').classList.remove('placeholder');
	 	}
		}
				
	};
	 function noRezShow(){
	 	
	 	document.getElementById('no-result').classList.remove('hidden');
		document.getElementById('container').classList.add('placeholder');
	};	

	var arrWhere;
	    var arrWhence;    
	    

 	 function getJSON(url) {
        var resp ;
        var xmlHttp ;

        resp  = '' ;
        xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
            resp = xmlHttp.responseText;
        }

        return resp ;
    }

	arrWhere = getJSON('http://dump.metacode.in/flyscanner/api/departure.json');
	arrWhence = getJSON('http://dump.metacode.in/flyscanner/api/destination.json');

	function Serch(find, json){
		if(json.indexOf(find) + 1) {
			return true;
		}
		else return false;

	};
	

})()