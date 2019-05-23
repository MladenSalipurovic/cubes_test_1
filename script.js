 
// ###################################
// Task 5 od proslog domaceg
// ###################################


// var toPrint = "";

// for (var i = 0; i < 0; i++) {
// 	toPrint += "*";
// 		console.log(toPrint)
// }

//__________________________________________________________________________________________

// ##################################
// FUNCTION
// ##################################

// function printName() {
// 	console.log("His name is Peter")
// }
// printName();

// // ___________________________________________


// function printName(text, name) {
// 	console.log(text + name)
// }

// printName("His name is ", "Peter");
// printName("His name is not ", "Mike");


// ___________________________________________

// function printName(text, name) {
// 	console.log(arguments)  //(arguments[0])
// }

// printName("His name is ", "Peter");
// printName("His name is not ", "Mike");

// ___________________________________________

// var printName = function(age){
// 	console.log("His name is Peter")
// };

// printName(34);

// ___________________________________________

// var calculateAge = function(currentYear, yearOfBirth){
// 	return currentYear - yearOfBirth;
		
// };

// var calculateYearOfBirth = function (currentYear, age) {
// 	return currentYear - age;
// }

// var cYear = 2019;

// console.log(calculateYearOfBirth(cYear, calculateAge(cYear, calculateAge(cYear, 1963) )))

// ___________________________________________



// var calculateAge = function(currentYear, yearOfBirth){
// 	if (currentYear > 2018) {
// 		return 2019;
// 	} 
// 		return 2018;
	
// };

// calculateAge();


//##########################################
// var definisan van funkcije je global scope
// var unutar funkcije je local scope
//##########################################

// ___________________________________________


// var calculateAge = function(currentYear, yearOfBirth) {   // ----------------CALL BACK FUNCTION (Prebacivanje prve funkcije u drugu kroz argument, a pozivamo je u parametru druge)
// 	return currentYear - yearOfBirth;
// }

// var printAge = function(cAge) {     // ---- cAge je zapravo calculateAge 
// 	var current = 2019;
// 	var birthYear = 1962;

// 	return cAge(current, birthYear);
// }

// printAge(calculateAge);

// ___________________________________________

// function combineNumbers () {
// 	return function (age) {
// 		console.log(age)
// 	}
// }

// combineNumbers()(23);

// ___________________________________________

// (function() {                          // -------------- ANONYMOUS FUNCTION (poziva sama sebe) --IIFE Immediately Invoked Function Expression
// 	console.log("Something")
// })();

// ___________________________________________

// (function(age) {                        
// 	console.log("Something")
// })(35);