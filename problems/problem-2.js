
/*
Assignment 5: Problem 2 - Turn the following array of strings into an array of objects.
Each string in the array is a comma-separated list of key-value pairs.
The key and value are separated by a colon.
Omit any non-jedi from the array.

For example, the following array:
[
	'"firstName":"Luke","lastName":"Skywalker","age":19,"occupation":"Jedi","homePlanet":"Tatooine"',
	'"firstName":"Obi-Wan","lastName":"Kenobi","age":57,"occupation":"Jedi","homePlanet":"Stewjon"',
	'"firstName":"Padme","lastName":"Amidala","age":27,"occupation":"Senator","homePlanet":"Naboo"'
]

Should be turned into the following array of objects:

[
	{
		firstName: 'Luke',
		lastName: 'Skywalker',
		age: 19,
		occupation: 'Jedi',
		homePlanet: 'Tatooine'
	},
	{
		firstName: 'Obi-Wan',
		lastName: 'Kenobi',
		age: 57,
		occupation: 'Jedi',
		homePlanet: 'Stewjon'
	}
]

Take note of how JSON-like the strings are... this may make your job easier.


TO TEST:
You can run this example by running `node problems/problem-2` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const strings = [
	'"firstName":"Padme","lastName":"Amidala","age":27,"occupation":"Senator","homePlanet":"Naboo"',
	'"firstName":"Yoda","lastName":"null","age":900,"occupation":"Jedi","homePlanet":"null"',
	'"firstName":"Palpatine","lastName":"null","age":86,"occupation":"Emperor","homePlanet":"Naboo"',
	'"firstName":"Qui-Gon","lastName":"Jinn","age":60,"occupation":"Jedi","homePlanet":"Coruscant"',
	'"firstName":"Mace","lastName":"Windu","age":53,"occupation":"Jedi","homePlanet":"Haruun Kal"'
]

// append your code here
const jedi = strings
	.map(str => { // what does str mean? it is a stringify objects
		const obj = JSON.parse(`{${str}}`)
		return obj.occupation === 'Jedi' ? obj : null 
	})
	.filter(obj => obj !== null)

console.log(jedi)

test("Problem 2", jedi)


//Filter: Create a new array with all elements that pass the test implemented by the provided function
//Map: Create a new array with the results of calling a provided function on every element in the calling array