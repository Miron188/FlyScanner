(function() {
    window.api = {};

    function getAjax(url, cb) {
        const xhr = new XMLHttpRequest();
    
        xhr.onload = function() {
            if (xhr.readyState === 4) {
                cb(JSON.parse(xhr.responseText));
            }
        }
        
        xhr.open("GET", url);
        xhr.send();
    }

    function getCurrencies(cb) {
        getAjax("http://dump.metacode.in/flyscanner/api/exchange_rates.json", cb);
    };

    function getDeparture(cb) {
        getAjax("http://dump.metacode.in/flyscanner/api/departure.json", cb);
    };

    function getDestination(cb) {
        getAjax("http://dump.metacode.in/flyscanner/api/destination.json", cb);
    };
   

    
    window.api.getCurrencies = getCurrencies;
    window.api.getDeparture = getDeparture;
    window.api.getDestination = getDestination;
})();