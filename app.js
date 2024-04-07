// const id = setInterval(() => {
//   console.log('setTimeout');
//   clearInterval(id);
// }, 1000);

const pets = [
    { name: 'Luna', age: 6, type: 'cat' },
    { name: 'Luke', age: 6, type: 'cat' },
    { name: 'Leia', age: 6, type: 'cat' },
    { name: 'Daisy', age: 4, type: 'dog' },
    { name: 'Lilly', age: 1, type: 'dog' },
    { name: 'Noodle', age: 0, type: 'cat' },
    { name: 'Nugget', age: 0, type: 'cat' },
    { name: 'Freddy', age: 2, type: 'fish' },
    { name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
    { name: 'Blake', age: 6 },
    { name: 'Avery', age: 4 },
    { name: 'Riley', age: 1 }
]

// Filter  array -> (Smaller) Array // Create a new array with all elements that pass the test implemented by the provided function
{
    const babies = []
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].age < 2) {
            babies.push(pets[i])
        }
    }

    //console.log(babies)
}

{
    const babies = pets.filter(pet => pet.age < 2)
    //console.log(babies)
}

const isBaby = ({age}) => age < 2
//Find: Find the first element in the array that passes the test implemented by the provided function
{
    const furBaby = kids.find(isBaby)
    //console.log(furBaby)
}

//Some: Check if at least one element in the array passes the test implemented by the provided function // returns boolean (true or false)

{
    const hasMonkey = pets.some(({type }) => type.toLowerCase() === 'monkey')
    //console.log({hasMonkey})
}

//map: Create a new array with the results of calling a provided function on every element in the calling array

const book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

const b = JSON.stringify(book)
//console.log(b)

//sort: Sort the elements of an array in place and return the array
{
    const sortedPets = pets.sort((a, b) => a.age - b.age)
    //console.log(sortedPets)
}

//reduce: Apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
{
    const totalAge = pets.reduce((total, pet) => total + pet.age, 10)
    console.log(totalAge)
}

