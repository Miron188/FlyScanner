(function(){
	function getFlight(direction, cb){
		getAjax('http://dump.metacode.in/flyscanner/api/flights/' + direction.toLowerCase() + '.json.', cb);
		alert(document.querySelector('#input-to.selected').getAttribute('data-value'));

	};
};)();
