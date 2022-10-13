/* I. Variables & Datatypes
To answer these questions, you can add them in a multiline comment section inside of script.js

like this:

/*
1. How do we assign a value to a variable?

Answer: With the assignment operator =

2. How do we change the value of a variable?

Answer: reassign with = sign

3. How do we assign an existing variable to a new variable?

Answer: use the let keyword

4. Remind me, what are declare, assign, and define?

Answer: You can declare a variable by creating it  using let or const

assign using the assignment operator = to a value

define = delcare


5. What is pseudocoding and why should you do it?

Answer: Pseudocoding is informal language that you write out to explain your code to yourself or other programmers


6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

Answer: You should always code out your problem to test it while you plan


*/

/* B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable

Assign it the value of the string "Hello World"

Change the value of this variable to some number

Store the value of firstVariablein a new variable called secondVariable

Change the value of secondVariableto any string.

What is the value of firstVariable?

Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

ex: Hello, my name is Jean Valjean
*/

// let firstVariable = "Hello World";
// firstVariable = "10"

// let secondVariable = "10"

// secondVariable = "Happy days!"

// console.log(secondVariable)
// console.log(firstVariable)

// // 5. Answer: secondVariable value is "Happy days!"
// // 6. Answer: firstVariable value is 10

// let yourName = "Nimo Jama"
// console.log(`Hello, my name is ${yourName}`)


// // C. Booleans
// // Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// // D. The farm
// // Declare a variable animal. Set it to be either "cow" or something else
// // Write code that will print out "mooooo" if the it is equal to cow
// // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// // Commit

// let animal = "bird"

// if (animal === "cow") {
//     console.log("moooooo")
// } else {
//     console.log("Hey you're not a cow!")
// }

// // E. Driver's Ed
// // Make a variable that holds a person's age; be semantic
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// const age = 14

// if (age >= 16) {
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young")
// }

// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// #10 part #1
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// #10 part #2
// for (let i = 10; i >= 10 && i <= 400; i++) {
//     console.log(i)
// }

// #10 part #3
// for (let i = 12; i <= 4000; i += 3) {
//     console.log(i)
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number`)
//     } else {
//         console.log(i)
//     }
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:


// for (let i = 5; i <= 100; i += 5) {
//     if (i % 5 === 0) {
//         console.log(`I found a ${i}. High five!`)
//     }
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(`I found a ${i}. High five!`)
//     } else if (i % 3 === 0) {
//         console.log(`I found a ${i}. Three is a crowd`)
//     }
// }

// For numbers divisible by both three and five, be sure your code prints both messages

// for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`I found a ${i}.Three is a crowd`)
//         console.log(`I found a ${i}.High five!`)
//     } else if (i % 3 === 0) {
//         console.log(`I found a ${i}.Three is a crowd`)
//     } else if (i % 5 === 0) {
//         console.log(`I found a ${i}.High five!`)
//     } else {
//         console.log("")
//     }
// }


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// let base = 0
// let bank_account = 0
// for (i = 1; i <= 10; i++) {
//     bank_account = base += i
// }

// console.log(bank_account)


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let baseTwo = 0
// let newbank_account = 0
// for (i = 1; i <= 100; i++) {
//     newbank_account = baseTwo += i * 2
// }

// console.log(newbank_account)


// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?
// Answer: they are called elements
// Do Arrays guarantee those things will be in order?
// Yes
// What real-life thing could you model with an array?
// A list of anything

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// const quotes = ["this happy", "this good", "this funny"]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])

// Change the value of "Hello"to "World"

// randomThings[2] = "World"


// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings[2])

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?

// console.log(ourClass[3])
// // Change the value of "Github" to "Octocat"

// ourClass[4] = "Octocat"
// console.log(ourClass[4])

// // Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City")
// console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// const myArray = [5, 10, 500, 20]

// myArray.push("Aegon")
// console.log(myArray)

// // Remove the 5from the beginning of the array.

// myArray.shift()
// console.log(myArray)


// // Add the string "Bob Marley"to the beginning of the array.

// myArray.unshift("Bob Marley")
// console.log(myArray)

// // Remove the string of your choice from the end of the array.

// myArray.pop()
// console.log(myArray)

// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// myArray.reverse()
// console.log(myArray)

// F. Biggie Smalls
// Create a variable that contains an integer.

// let thisNumber = 200

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100

// let thisNumber = 200

// if (thisNumber < 100) {
//     console.log("little number")
// } else if (thisNumber >= 100) {
//     console.log("big number")
// }
// // console.log()s big numberif the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.

// let numberOne = 6
// if (numberOne < 5) {
//     console.log("little number")
// } else if (numberOne > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey")
// }
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// // console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`)

// // // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

// // kristynsCloset.splice(6, 0, "raybans")
// // console.log(kristynsCloset)

// // // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// // kristynsCloset[5] = "stained knit hat"
// // console.log(kristynsCloset)

// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// console.log(thomsCloset[0][0])


// // In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][1])

// // Access one item from Thom's accessories array.


// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(thomsCloset[2][1])

// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset[1][2])

// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// function printGreeting(name) {
//     console.log(`Hello there, ${name}!`)
// }

// printGreeting("Slimer")

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// function printCool(personName) {
//     console.log(`${personName} is cool`)
// }

// printCool("Captain Reynolds")

// // C. calculateCube
// // Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// // let edge = 3
// let volume = 0
// function calculateCube(edge) {
//     volume = edge ** 3
//     return volume
// }

// console.log(calculateCube(3))

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// function isCharAVowel(character) {
//     if (character === "a" || character === "i" || character === "o" || character === "u" || character === "y") {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isCharAVowel("v"));


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(stringOne, stringTwo) {
//     let array = []
//     array.push(stringOne.length)
//     array.push(stringTwo.length)
//     return array
// }

// console.log(getTwoLengths("fo", "winter"))


// Alternatively: return([stringOne.length, stringTwo.length])

// Alternatively: if you wanted to use for loop ...args (already an array and just push the length)

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// const getMultipleLengths = function (arrayOfStrings) {
//     let array = []
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         array.push(arrayOfStrings[i].length)
//     }
//     return array
// }

// console.log(getMultipleLengths(["roberta", "bob", "fo"]))

// arrayOfStrings[i].length
// wrap array.push in a for loop

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(a, b, c) {
//     if (a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else {
//         return c
//     }
// }

// console.log(maxOfThree(22222, 18, 6666666666666))

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// function printLongestWord(word) {
//     let max = [0]
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > max.length) {
//             max = word[i]

//         }

//     }
//     return max
// }

// console.log(printLongestWord(["fu", "loifffffffffffffffffffff", "fred"]))

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name: "Freddie",
    email: "freddiejohns@mail.com",
    age: 22,
    purchased: []
}

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "freddienono@yahoo.com"
user.age++ // postfix operator

// let i = 1
// console.log(i)
// console.log(++i)  // increments the i before you do anything
// console.log(i)

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "England"

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user.purchased.push("carbohydrates")

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

user.purchased.push("peace of mind")

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino judhpurs")

// Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2])

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// When we console.log user, we would see the friendobject added to our user object.
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "St.Louis",
    purchased: []

}

// console.log(user)



// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

// Console.log just the friend's name
// console.log(user.friend.name)

// Console.log just the friend's location

// console.log(user.friend.location)

// CHANGE the friend's age to 55

user.friend.age = 55
// console.log(user.friend.age)

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

user.friend.purchased.push("The One Ring")
// console.log(user.friend.purchased)

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

user.friend.purchased.push("A latte")
// console.log(user.friend.purchased)

// Console.log just "A latte" from the friend's purchasedarray.

// console.log(user.friend.purchased[1])

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

// for (let i = 0; i < user.purchased.length; i++) {
//     // console.log(user.purchased[i])
// }

// // Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

// for (let i = 0; i < user.friend.purchased.length; i++) {
//     // console.log(user.friend.purchased[i])
// }

// // G. Functions can operate on objects
// // Write a single function updateUserthat takes no parameters. When the function is run, it should:
// // it should increment the user's age by 1
// // make the user's name uppercase
// // The function does not need a returnstatement, it will merely modify the user object.

// // Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

// // function updateUser() {
// //     user.age++
// //     user.name.toUpperCase()

// // }

// // updateUser()

// function oldAndLoud(person) {
//     person.age++
//     person.name = person.name.toUpperCase()

// }

// oldAndLoud(user)
// console.log(user)

// Cat Combinator



// 1. Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
    name: "fuzzy",
    breed: "Persian",
    age: 0
}

console.log(cat1.age)
console.log(cat1.breed)

// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {
    name: "buffy",
    breed: "Siamese",
    age: 1
}

// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// function combineCats(mama, papa) {
//     const newCombination = { mama, ...papa }
//     return newCombination
// }

// console.log(combineCats(cat1, cat2))


// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:

// Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:

// function combineCats(mama, papa) {
//     return {
//         name: mama.name + papa.name,
//         age: mama.age + papa.age,
//         breed: mama.breed + "-" + papa.breed
//     }

// }

// console.log(combineCats(cat1, cat2))


// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.


// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))), combineCats(cat1, cat2)))
