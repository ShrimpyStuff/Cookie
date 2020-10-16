var count = 0;
var times = 1;
var price = 100;
var autoclickerupgrade = false;
var autoclickerprice = 200;
var autoclickerinterval = 5000;

count = parseInt(window.localStorage.getItem('count'));
times = parseInt(window.localStorage.getItem('times'));
price = parseInt(window.localStorage.getItem('price'));
autoclickerprice = parseInt(window.localStorage.getItem('auto'));
autoclickerinterval = parseInt(window.localStorage.getItem('autointerval'));

if (localStorage.getItem("count") === null) {
count = 0;
}
if (localStorage.getItem("times") === null) {
times = 1;
}
if (localStorage.getItem("price") === null) {
  price = 100;
}
if (localStorage.getItem("auto") === null) {
  autoclickerprice = 200;
}
if (localStorage.getItem("autointerval") === null) {
  autoclickerinterval = 5000;
}
if (localStorage.getItem('autoupgrade') === null) {
  autoclickerupgrade = false;
}
if (localStorage.getItem('autoupgrade') == "true") {
  autoclickerupgrade = true;
}

  counter.innerHTML = "<h3>" + count + "</h3>";

reset.onclick = function() {
  count = 0;
  times = 1;
  price = 100;
  autoclickerupgrade = false;
  autoclickerprice = 200;
  autoclickerinterval = 5000;
  counter.innerHTML = "<h3>" + count + "</h3>";
  timesa.innerHTML = "Upgrade shrimp per click ($" + price + ")";
  autoclickerbuy.innerHTML = "Upgrade autoclicker (" + autoclickerprice + ")";
  localStorage.setItem("count", count);
  localStorage.setItem("times", times);
  localStorage.setItem("price", price);
  localStorage.setItem("autoupgrade", autoclickerupgrade);
  localStorage.setItem("auto", autoclickerprice);
  localStorage.setItem("autointerval", autoclickerinterval);
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

autoclickerbuy.onclick = function() {
  if (count < price) {
    alert("You don't have enough shrimp to do that. You need " + autoclickerprice);
  } else if (autoclickerinterval > 0) {
    count -= autoclickerprice;
    autoclickerupgrade = true;
    autoclickerprice += 100;
    autoclickerinterval -= 500;
    alert("You bought autoclicker");
    counter.innerHTML = "<h3>" + count + "</h3>";
    autoclickerbuy.innerHTML = "Upgrade autoclicker (" + autoclickerprice + ")";
    localStorage.setItem("auto", autoclickerprice);
    localStorage.setItem("autointerval", autoclickerinterval);
    localStorage.setItem("count", count);
    localStorage.setItem("autoupgrade", autoclickerupgrade);
  } else {
    alert("Time can't go lower");
  }
};

shrimp.onclick = function() {
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
};

timesa.innerHTML = "Upgrade shrimp per click (" + price + ")";
autoclickerbuy.innerHTML = "Upgrade autoclicker (" + autoclickerprice + ")";

  var autook = setInterval(autoclicker, autoclickerinterval);

function autoclicker() {
  if (autoclickerupgrade) {
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
}
}
