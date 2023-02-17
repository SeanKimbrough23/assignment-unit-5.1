console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property

  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = { // created object literal about myself
  firstName:'Sean', // assigned property firstName with a value of Sean
  lastName:'Kimbrough', // assigned property lastName with a value of Kimbrough
  hasSiblings: true, // assigned Boolean property hasSiblings with a value of true
  shoeCount: 50, //assigned shoeCount property to a value of number 50
  favThreeFoods: ['pineapple', 'burgers', 'waffles'], // assigned a FavThreeFoods array with my 3 favorite foods
  // TODO - add properties here
};
console.log('A little about me:', me); // logged object literal of me

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName; // created variable fullName and set its value using the oject properties
console.log('My full name is:', fullName); //logged the new varible fullName 


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('My 1st Favorite Food:', (me.favThreeFoods[0])); // logged the 1st item in my FavThreeFoods array
console.log('My 2nd Favorite Food:', (me.favThreeFoods[2])); // logged the last item in my FavThreeFoods array


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('My current shoe count is:', me.shoeCount); // expected output is 50
me.shoeCount ++;
console.log('My updated shoe count:', me.shoeCount); // expected output is 51 

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/