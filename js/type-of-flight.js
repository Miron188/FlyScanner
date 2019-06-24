(function() {
    const container = document.querySelector('#type-flight');
    let activeIndex = 0;

    function setTwoWays() {
        setActiveState(0);
    }

    function setActiveState(index) {
        const field = container.querySelectorAll('.field')[index];
        const radioInput = field.querySelector('input[type=radio]'); 
        const radioItem = field.querySelector('.radio');  

        radioInput.click();
        radioItem.classList.add('checked');   
    }

    function addEvent(items) {
        items.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                setActiveState(index);        
        //        removeClass(index);
            })
        })
    }
    function init(index) {
        const labels = container.querySelectorAll('.field label');

        setActiveState(index);
        addEvent(labels);
    //    removeClass();
    }

    init(activeIndex);

    window.setTwoWays = setTwoWays;
    
     var c = document.querySelector('#firstCB');
        c.onclick = function() {
            fun1();
        }
    

    var ch = document.querySelector('#secondCB');
    ch.onclick = function() {
        fun1();
     }
    
    function fun1() {
    var chbox;
    chbox = document.getElementById('firstCB');
    if (chbox.checked) {
         document.getElementById('date-range-end').classList.remove('disabled');
    }
    else {
          document.getElementById('date-range-end').classList.add('disabled');
    }


};

fun1();

 var dateRangeClick = document.querySelector('#date-range-end');
    dateRangeClick.onclick = function() {
        var c1 = document.querySelector('#firstCB');
        c1.checked = "checked";
        document.getElementById('date-range-end').classList.remove('disabled');
    };
    
})(); //LLFI