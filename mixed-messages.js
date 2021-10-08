const randomMonth = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return months[Math.floor(Math.random() * months.length)];
};
const randomDay = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return days[Math.floor(Math.random() * days.length)];
};
const randomDrink = () => {
	const drinks = ['beer', 'wine', 'whiskey', 'rum', 'coffee', 'milk', 'water', 'soda', 'cocktails', 'thee', 'lemonade'];
	return drinks[Math.floor(Math.random() * drinks.length)];
};

console.log(`On a ${randomDay()} in ${randomMonth()}, you will drink ${randomDrink()}.`);
