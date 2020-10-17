// Use let instead of var as a best practice
let count = parseInt(window.localStorage.getItem('count')) || 0; // "Default" values can be inline with "||" operator
let times = parseInt(window.localStorage.getItem('times')) || 1;
let price = parseInt(window.localStorage.getItem('price')) || 100;
let autoclickerprice = parseInt(window.localStorage.getItem('auto')) || 200;
let autoclickerinterval =
  parseInt(window.localStorage.getItem('autointerval')) || 5500;
let autoclickerupgrade =
  (window.localStorage.getItem('autoupgrade') || 'false') === 'true';

counter.innerHTML = '<h3>' + count + '</h3>';

reset.onclick = function () {
  // Eh a prompt just in case someone clicks "reset" on accident
  if (prompt('Are you sure? (Type "yes" to proceed)') !== 'yes') return;
  count = 0;
  times = 1;
  price = 100;
  autoclickerupgrade = false;
  autoclickerprice = 200;
  autoclickerinterval = 5500;
  counter.innerHTML = `<h3>${count}</h3>`;
  timesa.innerHTML = `Upgrade shrimp per click ($${price})`;
  autoclickerbuy.innerHTML = `Upgrade autoclicker ($${autoclickerprice})`;
  localStorage.setItem('count', count);
  localStorage.setItem('times', times);
  localStorage.setItem('price', price);
  localStorage.setItem('autoupgrade', autoclickerupgrade);
  localStorage.setItem('auto', autoclickerprice);
  localStorage.setItem('autointerval', autoclickerinterval);
};

timesa.onclick = function () {
  if (count < price) {
    alert(`You don't have enough shrimp to do that. You need $${price}`);
    return;
  }

  count -= price;
  times++;
  alert('You bought more shrimp');
  price += 25;
  counter.innerHTML = `<h3>${count}</h3>`;
  timesa.innerHTML = `Upgrade shrimp per click ($${price})`;
  localStorage.setItem('times', times);
  localStorage.setItem('count', count);
  localStorage.setItem('price', price);
};

autoclickerbuy.onclick = function () {
  count;
  if (count < price) {
    alert(
      `You don't have enough shrimp to do that. You need ${autoclickerprice}`
    );
  } else if (autoclickerinterval > 1) {
    count -= autoclickerprice;
    autoclickerupgrade = true;
    autoclickerprice += 100;
    autoclickerinterval -= 500;
    alert(
      "You bought autoclicker (Please reload to make it work (Don't worry it saves automatically))"
    );
    counter.innerHTML = `<h3>${count}</h3>`;
    autoclickerbuy.innerHTML = `Upgrade autoclicker ($${autoclickerprice})`;
    localStorage.setItem('auto', autoclickerprice);
    localStorage.setItem('autointerval', autoclickerinterval);
    localStorage.setItem('count', count);
    localStorage.setItem('autoupgrade', autoclickerupgrade);
  } else {
    alert("Time can't go lower");
  }
};

if (autoclickerinterval < 1) {
  autoclickerinterval = 1;
  localStorage.setItem('autointerval', autoclickerinterval);
}

shrimp.onclick = function () {
  count += times;
  localStorage.setItem('count', count);
  counter.innerHTML = `<h3>${count}</h3>`;
};

timesa.innerHTML = `Upgrade shrimp per click ($${price})`;
autoclickerbuy.innerHTML = `Upgrade autoclicker ($${autoclickerprice})`;

const autook = setInterval(autoclicker, autoclickerinterval);

function autoclicker() {
  if (!autoclickerupgrade) return;

  count += times;
  localStorage.setItem('count', count);
  counter.innerHTML = `<h3>${count}</h3>`;
}
