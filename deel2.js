//A
/*
const superheroes = [
	{ name: 'Batman', alter_ego: 'Bruce Wayne' },
	{ name: 'Superman', alter_ego: 'Clark Kent' },
	{ name: 'Spiderman', alter_ego: 'Peter Parker' }
];

//const findSpiderMan = function(obj) {
//	return obj.find(element => element.name === 'Spiderman');
//};

const findSpiderMan = obj => obj.find(element => element.name === 'Spiderman');

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B

const doubleArrayValues = function(items) {
	let moreItems = [];
	items.forEach(item => {
		moreItems.push(item * 2);
	});
	return moreItems;
}; ----------------------------------Deze snap ikniet hoe ik dat op eigen houtje zou moeten kunnen bedenken met de return buiten de curlys

const doubleArrayValues = items => {
	let moreItems = [];
	items.forEach(item => {
		moreItems.push(item * 2);
	});
	return moreItems;
};

const doubleArrayValues = function(items) {
	return items.map(item => {
		return item + item;
	});
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

//C

const containsNumberBiggerThan10 = function(items) {
	return items.some(x => {
		return x > 10;
	});
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// result should be true
*/
//D

//const isItalyInTheGreat7 = function(araiItaliano) {
//	return araiItaliano.includes('Italy');
//};

const isItalyInTheGreat7 = araiItaliano => {
	return araiItaliano.includes('Italy');
};
console.log(
	isItalyInTheGreat7([
		'Canada',
		'France',
		'Germany',
		'Italy',
		'Japan',
		'United Kingdom',
		'United States'
	])
);
// result should be true

//E

//const tenfold = function(array10) {
//	let tenfoldNumber = [];
//	array10.forEach(element => {
//		tenfoldNumber.push(element * 10);
//	});
//	return tenfoldNumber;
//};

const tenfold = array10 => {
	let tenfoldNumber = [];
	array10.forEach(element => {
		tenfoldNumber.push(element * 10);
	});
	return tenfoldNumber;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

//F

//const isBelow100 = function(arrayBelow100) {
//	return arrayBelow100.every(nums => nums < 100);
//};

const isBelow100 = arrayBelow100 => arrayBelow100.every(nums => nums < 100);

console.log(
	isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 10, 110, 77, 84, 98])
);
// result should be: false

//G

//const bigSum = function(bonusNumberExtraordinaire) {
//	return bonusNumberExtraordinaire.reduce(
//		(accumulator, currentValue) => accumulator + currentValue
//	);
//};

const bigSum = bonusNumberExtraordinaire =>
	bonusNumberExtraordinaire.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);
console.log(
	bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
