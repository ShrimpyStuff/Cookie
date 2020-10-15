var count = 0;
var times = 1;

count = parseInt(window.localStorage.getItem('count'));

if (localStorage.getItem("count") == null) {
count = 0;
} else {
count = parseInt(window.localStorage.getItem('count'));
}

  counter.innerHTML = "<h3>" + count + "</h3>";

reset.onclick = function() {
  count = 0;
  counter.innerHTML = "<h3>" + count + "</h3>";
  localStorage.setItem("count", count);
}

add.onclick = function() {
if (count > 100) {
   times = 2;
 }
 if (count > 200) {
  times = 3;
}
  count += times;
  localStorage.setItem("count", count);
  counter.innerHTML = "<h3>" + count + "</h3>";
};
