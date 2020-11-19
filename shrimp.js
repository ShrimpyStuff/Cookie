$(() => {
	// Select elements with jQuery
	const counter = $('#counter');
	const reset = $('#reset');
	const timesa = $('#timesa');
	const autoClickerBuy = $('#autoclickerbuy');
	const shrimp = $('#shrimp');

	const { localStorage } = window;
	let count = parseInt(localStorage.getItem('count')) || 0;
	let times = parseInt(localStorage.getItem('times')) || 1;
	let price = parseInt(localStorage.getItem('price')) || 100;
	let autoClickerPrice = parseInt(localStorage.getItem('auto')) || 200;
	let autoClickerInterval =
		parseInt(localStorage.getItem('autointerval')) || 5500;
	let autoClickerUpgrade =
		(localStorage.getItem('autoupgrade') || 'false') === 'true';

	counter.html(`<h3>${count}</h3>`);

	reset.on('click', () => {
		// Eh a prompt just in case someone clicks "reset" on accident
		if (prompt('Are you sure? (Type "yes" to proceed)') !== 'yes') return;

		count = 0;
		times = 1;
		price = 100;
		autoClickerUpgrade = false;
		autoClickerPrice = 200;
		autoClickerInterval = 5500;
		counter.html(`<h3>${count}</h3>`);
		timesa.html(`Upgrade shrimp per click ($${price})`);
		autoClickerBuy.html(`Upgrade autoclicker ($${autoClickerPrice})`);

		localStorage.setItem('count', count);
		localStorage.setItem('times', times);
		localStorage.setItem('price', price);
		localStorage.setItem('autoupgrade', autoClickerUpgrade);
		localStorage.setItem('auto', autoClickerPrice);
		localStorage.setItem('autointerval', autoClickerInterval);
	});

	timesa.on('click', () => {
		if (count < price) {
			alert(`You don't have enough shrimp to do that. You need $${price}`);
			return;
		}

		count -= price;
		times++;
		alert('You bought more shrimp');
		price += 25;
		counter.html(`<h3>${count}</h3>`);
		timesa.html(`Upgrade shrimp per click ($${price})`);
		localStorage.setItem('times', times);
		localStorage.setItem('count', count);
		localStorage.setItem('price', price);
	});

	autoClickerBuy.on('click', () => {
		count;
		if (count < price) {
			alert(
				`You don't have enough shrimp to do that. You need ${autoClickerPrice}`
			);
		} else if (autoClickerInterval > 1) {
			count -= autoClickerPrice;
			autoClickerUpgrade = true;
			autoClickerPrice += 100;
			autoClickerInterval -= 500;
			alert(
				"You bought autoclicker (Please reload to make it work (Don't worry it saves automatically))"
			);
			counter.html(`<h3>${count}</h3>`);
			autoClickerBuy.html(`Upgrade autoclicker ($${autoClickerPrice})`);

			localStorage.setItem('auto', autoClickerPrice);
			localStorage.setItem('autointerval', autoClickerInterval);
			localStorage.setItem('count', count);
			localStorage.setItem('autoupgrade', autoClickerUpgrade);
		} else {
			alert("Time can't go lower");
		}
	});

	if (autoClickerInterval < 1) {
		autoClickerInterval = 1;
		localStorage.setItem('autointerval', autoClickerInterval);
	}

	shrimp.on('click', () => {
		count += times;
		localStorage.setItem('count', count);
		counter.html(`<h3>${count}</h3>`);
	});

	timesa.html(`Upgrade shrimp per click ($${price})`);
	autoClickerBuy.html(`Upgrade autoclicker ($${autoClickerPrice})`);

	const autook = setInterval(autoclicker, autoClickerInterval);

	function autoclicker() {
		if (!autoClickerUpgrade) return;

		count += times;
		localStorage.setItem('count', count);
		counter.html(`<h3>${count}</h3>`);
	}
});
