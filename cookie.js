var count = 0;
var times = 1;
var price = 100;

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
  counter.innerHTML = "<h3>" + count + "</h3>";
  localStorage.setItem("count", count);
  localStorage.setItem("times", times);
};

timesa.onclick = function() {
  if (count < price) {
    alert("You don't have enough cookies to do that. You need 100");
  } else {
    count -= price;
    times += 1;
    alert("You bought more cookies");
    price + 25;
    counter.innerHTML = "<h3>" + count + "</h3>";
    localStorage.setItem("times", times);
    localStorage.setItem("price", price)
  }
};

add.onclick = function() {
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
};
