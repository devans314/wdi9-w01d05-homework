// I. Variables & Datatypes
// A. Q + A
// How do we assign a value to a variable?
// How do we change the value of a variable?
// How do we assign an existing variable to a new variable?
// Remind me, what are declare, assign, and define?
// What is pseudocoding and why should you do it?
// What percentage of time should be spent thinking about how 
// you're going to solve a problem vs actually typing in code 
// to solve it?
// ANSWERS
// -by using = and then the value
// -assign it a new value within a scope
// -set them equal to each other
// -Declare is to establish a new variable
// -assign is to give an existing variable a value,
// -define is to give a variable a place
// -pseudocoding is writing out logical steps to use for coding problems
// -70-80%
// B. Strings
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name 
// is " and the variable yourName so that 
// it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let firstVariable = "Hello World";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "Hello !World";
// console.log(firstVariable);
// 1
// const yourName = "Donnie"
// console.log("Hello, my name is " + yourName);


// C. Booleans
// Using the provided variable definitions, 
// replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but 
// happen to print true to the console.
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true !== false);
//   console.log(false == false == false == false == false == false == true);
//   console.log(false == false)
//   console.log(e === 'Kevin');
//   console.log(a < b < c);
//   console.log(a != a < d);
//   console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.

// let animal = "cow";
// if(animal = "cow"){
//     console.log("mooooo");
// }  else {
//     console.log("Hey! You're not a cow.");
// }

// E. Driver's Ed
// Make a variable that will hold a person's age. Be semantic.

// Write code that will print out "Here are the keys", if the age is 16 years or older.

// If the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 13;
//     if(age >= 16){
//         console.log("Here are the keys");
//     } else if (age < 16){
//         console.log("Sorry, you're too young.");
//     }


// #####LOOPS######

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.

// Write a loop that will print out all the numbers from 10 up to and including 400.

// Write a loop that will print out every third number starting with 12 and going no higher than 4000.

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i <= 400; i++){
//     console.log(i);
// }

// for(let i = 12; i <= 4000; i += 3){
//     console.log(i);
// }

// B. Get even
// Print out the even numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

// for(let i = 2; i <= 100; i += 2){
//     console.log(i + "<-- is an even number");
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// for( let i = 0; i <= 100; i++){
//     if(i%5 === 0){
//         console.log(`i found a ${i}. High Five!`);
//     } if(i%3 === 0){
//         console.log(`i found a ${i}. Three is a crowd`);
//     }    
// };

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bankAccount = 0;
// for(let i = 1; i <= 10; i++){
//     bankAccount+= i;
// }
// for(let i = 1; i <= 100; i++){
//     bankAccount+= 2*i;
// } 
// console.log(bankAccount);

// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

// You just solved Project Euler problem 1!

// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.


// I completed this earlier (as in literally tonight).
//######ARRAYS AND CONTROL FLOW #######
// A. Talk about it:
// What are the things in an array called?

// Arrays contain values at indexes

// Do Arrays guarantee those things will be in order?

// No, arrays don't guarantee the order of their values.

// What real-life thing could you model with an array?

// A list of groceries (as long as they don't need to be in order)

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.

// const quotes = [
//     "get busy livin' or get busy dying",
//     "The tree that doesn't bend, breaks.  Bend too much and you're already broken.",
//     "One good thing about music is that when it hits you, you feel no pain"
// ]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// randomThings[0];
// Change the value of "Hello" to "World".
// randomThings[2] = "world";
// console.log(randomThings[2]);

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// ourClass[2];

// Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");

// E. Mix It Up
// Given the following array: 

// const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

// myArray.push('Egon', 'Jack');
// console.log(myArray);

// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley" to the beginning of the array.

// myArray.splice(0,1, 'Bob Marley');
// console.log(myArray);

// Remove the string of your choise from the end of the array.

// myArray.pop();
// console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse();
// console.log(myArray);
// returned the array with indexes numerically reversed
// This method does mutate the array.  Mutate means changing or affecting a source element.

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100

// console.log()s big number if the number is greater than or equal to 100.

// let integer = 1;
// if(integer < 100){
//     console.log('little number')
// } else {console.log('big number')}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, log "monkey". 

// if(integer < 5){
//     console.log('little number');
// } else if(integer > 10){
//     console.log('big number');
// } else{
//     console.log('monkey');
// }
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log(`Kristyn is rocking ${kristynsCloset[2]} today.`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(6,0,'raybans');
// console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5]= "stained knit hat";

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.

// console.log(thomsCloset[2][0]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and  ${thomsCloset[2][1]}!`)

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2]= "footie pajamas";

//######FUNCTIONS######
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// skipped

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// const printCool = (name) => {
//     console.log((`${name} is cool`))
// }
// printCool('captain reynolds')

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125

// const calculateCube = (num) => {
//     console.log(Math.pow(num, 3));
// }
// console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// console.log(isVowel("a"));
// => true

// const isVowel = (vowel) => {
//     if (vowel === 'a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U'){
//                 return true;
//            }
//            return false;
//         }    
// console.log(isVowel('a'));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// const getTwoLengths = (str1, str2) => {
//     const arr = [];
//     arr.push(str1.length);
//     arr.push(str2.length);
//     return arr;
// }
// console.log(getTwoLengths('ham', 'turkey'))

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// const getMultipleLengths = (arr) => {
//     const numbArr = [];
//         for(let i = 0; i < arr.length; i++){
//             numbArr.push(arr[i].length);
//         }  return numbArr
//     }
// console.log(getMultipleLengths(["hello", "world", "how", "are", "you"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9

// const maxOfThree = (num1, num2, num3) => {
//     let biggest = num1;
//     if(num2 > biggest){
//         biggest = num2;
//     } if (num3 > biggest){
//         biggest = num3;
//     }
//     return biggest;
// }
// console.log(maxOfThree(6, 9, 1));

// // I. `transmogrify`

// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```
// > `=> 225`

// const transmogrify = (num1, num2, num3) => {
//     return Math.pow((num1 * num2), num3);
//     }
    
//     console.log(transmogrify(5, 4, 2));


// ### J. `reverseWordOrder` v2

// **Without using `.split()`, `.reverse()`, or `.join()`,** write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation. 

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string: 
// ```js
// "hello world"[6]
// ```
// > `=> "w"`

// That and basic loops and variables and arrays are all you need to solve this without the Array methods.

// ```javascript
// console.log(reverseWordOrder("Ishmael me Call"));
// ```
// > `=> "Call me Ishmael"`

// ```js
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// ```
// > `=> "comb my on Lâncome use I"`

    
// const reverseWordOrder = (string) => {
//     let reversedWords = [];
//     let reversedSentence = "";
//     //loops through reversed words forwards and words backwards
//     for (i = 0; i < words.length; i++){
//       reversedWords.push(words[words.length - 1 - i] + " ");
//     }
//     console.log(reversedWords);
//     //adds the words from reversed words to a string one at a time
//     for (i = 0; i < reversedWords.length; i++){
//       reversedSentence = reversedSentence + reversedWords[i];
//     }
//     console.log(reversedSentence);
//   }
  
//   reverseWordOrder("Ishmael me Call");

// const reverseWordOrder = (str) => {
//     let word = '';
//     let arr = [];
//     let wordsReversed = '';
//     for(let i = 0; i < str.length; i++){
//         while(str[i] !== ' ' && i  < str.length){
//             word+=str[i];
//             i++;
//         } 
//         arr.push(word);
//         if(str[i] === ' '){
//             word = '';
//         }   
//     }
//     for( let i = 0; i < arr.length; i++){
//         wordsReversed += (`${arr[arr.length - (i+1)]} `);
//     }
//     return wordsReversed;
// }
// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

// ### K. Get down and dirty with `Math.random()`

// 1.  Write a function that will return a random integer between 1 and 10. Test it.
// 2.  Write a function that will return a random integer between 10 and 100. Test it.
// 3.  Write a function that will return a random number between 532 and 13267. Test it.
// 4.  Write a function that will return a random number between 1 and 10. Test it.
// 5.  Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array.  Call your function a few times, passing in the quotes array.  Give it a nice semantic name like `getRandomElement`.


// const RandomIntOneToTen = () => {
//     return Math.ceil(Math.random() * 10)
// }
// console.log(RandomIntOneToTen());

// const RandomIntTenToOneHundred = () => {
//     return Math.ceil(Math.random() * (90) + 10)
// }
// console.log(RandomIntTenToOneHundred());

// const random532to13267 = () => {
//     return  Math.random() * (12735) + 532;
// }

// console.log(random532to13267());

// const RandomNumOneToTen = () => {
//     return  Math.random() * (9) + 1;
// }

// console.log(RandomNumOneToTen());









