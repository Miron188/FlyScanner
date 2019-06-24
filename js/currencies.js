(function() {

  let container = document.querySelector("#dropdown-currency");
  let currentIndex = 0;
  let isInit = false;
  let data = {};
  

  function close() {
    let dropdown = container.querySelector(".dropdown");
    let menu = container.querySelector(".menu");

    dropdown.classList.remove("active");
    menu.classList.remove("transition");
    menu.classList.remove("visible");
  }

  function updateCurrentItem(key) {
    
    let currentItem = container.querySelector('.text');
    currentItem.innerText = key;
    currentItem.setAttribute('data-value', key.toLowerCase());
    currentItem.classList.add("item");

    const flag = document.createElement("i");
    flag.className = "flag " + getClassNameFlag(key);
    currentItem.insertBefore(flag, currentItem.firstChild);

  }

  function renderList() {
    

    Object.keys(data.rates).forEach(function(key, index) {
      const menu = document.querySelector(".menu");
      
      const item = document.createElement("div");
      item.setAttribute('data-value', key.toLowerCase());
      item.classList.add("item");
      item.innerText = key;

      if(index === 0) { // First item
        item.classList.add("selected");  
      };

      const flag = document.createElement("i");
      flag.className = "flag " + getClassNameFlag(key);
      item.insertBefore(flag, item.firstChild);

      menu.appendChild(item);
      
      item.addEventListener("click", function() {
        let items = container.querySelectorAll(".item");

        items[currentIndex].classList.remove("selected");

        this.classList.add("selected");

        currentIndex = index;
        
        updateCurrentItem(key);
      
        close();
      }, true);
    });
  }
 

  function loadData() {
    container.classList.add("loading");

    window.api.getCurrencies(function(response) {
      container.classList.remove("loading");
      
      data = response;

      renderList();
    });

    isInit = true;
  }
  
  // Open list
  container.addEventListener('click', function() {
      let dropdown = container.querySelector(".dropdown");
      let menu = container.querySelector(".menu");

      dropdown.classList.add("active");
      menu.classList.add("transition", "visible");

      if(!isInit) {
        loadData();
      }
  }, true);

  //1.2.d
  document.addEventListener("click", (evt) => {
    const dropdownCur = document.getElementById("dropdown-currency");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == dropdownCur) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    close();
  });

function getClassNameFlag(value) {
  if (value === "AUD") {
    return "au";
  } else if (value === "CNY") {
    return "cn";
  } else if (value === "EUR") {
    return "eu";
  } else if (value === "GBP") {
    return "gb uk";
  } else if (value === "HUF") {
    return "hu";
  } else if (value === "RUB") {
    return "ru";
  } else if (value === "UAH") {
    return "ua";
  }
}

/*  var obj = {
    "base": "USD",
    "date": "2018-9-27",
    "rates": {
      "AUD": 1.385883,
      "CNY": 6.8875,
      "EUR": 0.855973,
      "GBP": 0.761652,
      "HUF": 277.02524,
      "RUB": 65.805,
      "UAH": 28.157923
    },
    "symbols": {
        "AUD": "$",
        "CNY": "¥",
        "EUR": "€",
        "GBP": "£",
        "HUF": "Ft",
        "RUB": "руб",
        "UAH": "₴"
    }
  };*/

// 1.6
function getCurrentRate() {
  return Object.values(data.rates)[currentIndex];
};

window.getCurrentRate = getCurrentRate;


// 1.7
function getCurrentSymbol() {
  return Object.values(data.symbols)[currentIndex];
};

window.getCurrentSymbol = getCurrentSymbol;


})();