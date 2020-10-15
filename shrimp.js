var count = 0;
var times = 1;
var price = 100;
var autoclickerupgrade = 'no';

count = parseInt(window.localStorage.getItem('count'));
times = parseInt(window.localStorage.getItem('times'));
price = parseInt(window.localStorage.getItem('price'))

if (localStorage.getItem("count") == null) {
count = 0;
} else {
count = parseInt(window.localStorage.getItem('count'));
}

if (localStorage.getItem("times") == null) {
times = 1;
} else {
times = parseInt(window.localStorage.getItem('times'));
}

  counter.innerHTML = "<h3>" + count + "</h3>";

reset.onclick = function() {
  count = 0;
  times = 1;
  price = 100;
  counter.innerHTML = "<h3>" + count + "</h3>";
  timesa.innerHTML = "Upgrade shrimp per click ($" + price + ")";
  localStorage.setItem("count", count);
  localStorage.setItem("times", times);
  localStorage.setItem("price", price);
};

timesa.onclick = function() {
  if (count < price) {
    alert("You don't have enough shrimp to do that. You need " + price);
  } else {
    count -= price;
    times += 1;
    alert("You bought more shrimp");
    price += 25;
    counter.innerHTML = "<h3>" + count + "</h3>";
    timesa.innerHTML = "Upgrade shrimp per click (" + price + ")";
    localStorage.setItem("times", times);
    localStorage.setItem("count", count);
    localStorage.setItem("price", price);
  }
};

shrimp.onclick = function() {
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
};

timesa.innerHTML = "Upgrade shrimp per click (" + price + ")";

if (autoclickerupgrade == 'yes') {
var interval = 5000;
var auto = window.setInterval(autoclicker, interval);

function autoclicker() {
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
}
}
