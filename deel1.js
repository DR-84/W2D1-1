/*
//A.

const isArray = function(inhhhput) {
	return Array.isArray(inhhhput);
};
console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true

//B.

const amountOfElementsInArray = function(arrhhhay) {
	return arrhhhay.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // false????

//C

const selectBelgiumFromBenelux = function(arrayValueBelgium) {
	return arrayValueBelgium[0];
};

console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg'])); // resultaat: "Belgie"

//D

const lastElementInArray = function(array) {
	return array.pop();
};

const lastElementInArray2 = function(schildpad) {
	return schildpad[schildpad.length - 1];
};
console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));
console.log(lastElementInArray2(['Haas', 'Cavia', 'Kip', 'Schildpad']));

//E

const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];
const impeachTrumpSlice = function(presidents) {
	// geeft een kopie terug van de gervaagde inhoud
	return presidents.slice(1);
};
const impeachTrumpSplice = function(presidents) {
	// snijd de "opgegeven" inhoud uit de array
	return presidents.splice(1);
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F

const stringsTogether = function(array) {
	return array.join(' ');
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));
//resultaat: "Winc Academy is leuk ;-}"

//G

const combineArrays = function(array1, array2) {
	return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
*/

//-----------------ben helemaal opnieuw begonnen om dat ik wil dat ik het 100% snap zowel de arrow als de normale functies----------------------------

//A

const arrayWithWords = ['nice', 'awesome', 'tof'];
/*
const addTheWordCool = function(array) {
	array.push('Cool!!');
	return array;
};


console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'tof']));

const addTheWordCool = array => {
	array.push('Cool!!');
	return array;
};

console.log('Add cool:', addTheWordCool(['nice', 'awesome', 'tof']));

//B
//const amountOfElementsInArray = function(array) {
//	return array.length;
//};

const amountOfElementsInArray = array => array.length;
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3

//C

//const selectBelgiumFromBenelux = function(array) {
//return array.shift();
//};

const selectBelgiumFromBenelux = array => array.shift();
console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg'])); // resultaat: "Belgie"

//D

//const lastElementInArray = function(array) {
//	return array.pop();
//};

const lastElementInArray = array => array.pop();

console.log(lastElementInArray(['Haas', 'Cavia', 'Kip', 'Schildpad']));
// resultaat: "Schildpad"

//E

const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];

//const impeachTrumpSlice = function(array) {
//	return array.slice(1);
//};
//const impeachTrumpSplice = function(array) {
//	return array.splice(1);
//};

const impeachTrumpSlice = array => array.slice(1); //showed een selectie

const impeachTrumpSplice = array => array.splice(1); //snijd de selectie uit de array

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F

//const stringsTogether = function(hetMaaktGeenHolUitWatHierStaatInPrincipe) { // ik zat echt even in de stress maar het is nu weer duidelijk!!
//	return hetMaaktGeenHolUitWatHierStaatInPrincipe.join(' ');
//};

const stringsTogether = fakkingFakIkSnapHet => fakkingFakIkSnapHet.join(' ');

console.log(stringsTogether(['Winc', 'Academy', 'is', 'WEER', 'leuk', ';-}']));
//resultaat: "Winc Academy is leuk ;-}"

//G

//const combineArrays = function(array1, array2) {
//	return array1.concat(array2);
//};
const combineArrays = (array1, array2) => array1.concat(array2);
//const combineArrays = (array1, array2) => array1.concat(array2);

combineArrays([1, 2, 3], [4, 5, 6]);
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// result should be [1,2,3,4,5,6]

//BOOJA!! IK WAS ECHT EVEN WANHOPIG VANMIDDAG..
*/
