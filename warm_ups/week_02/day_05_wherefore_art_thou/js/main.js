// Wherefore art thou
//
// Make a function called whatIsInAName that will take two arguments. The function will look through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).
//
// Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
//
// Spoiler - All the values die at the end of the function.
//
// HINT: Call the function like so:
//
// const arrayObj = [
//   { first: "Romeo", last: "Montague" },
//   { first: "Mercutio", last: null },
//   { first: "Tybalt", last: "Capulet" }
// ];
//
// whatIsInAName( arrayObj, { last: "Capulet" } );
// Bonus - see if you can get it to work with additional values in the second argument
//
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

const arrayObj = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];


const whatIsInAName = function( collection, source ){
  const srcKeys = Object.keys( source );

  console.log( srcKeys ); // Key of the second argument
  console.log( source[srcKeys] ); // Value of the second argument

  // We gain access to the objects within the first agrument by using `.filter()`. This could be done with a loop but as you can see there are many different ways to approach this. Filter returns a new array with the elements that have passed.
  // `.filter()` will return an array of the elements that pass the conditions in your `if` statement.
  collection.filter(function(obj){

    console.log(obj); // listing the objects within the first argument array.
    console.log(obj[srcKeys]); // Listing the values of the second element in the


    if ( obj.hasOwnProperty(srcKeys) && source[srcKeys] === obj[srcKeys] ){
      console.log(`true`);
    }
    return false;
  });

};

// calling the function with two arguments ( first argument is the variable of arrayObj, the second argment is an object with only ONE key value pair.)
whatIsInAName( arrayObj, { last: "Capulet" } );


// To run this section you will need to comment out the above code to remove the conflicting variable names.
//*****************************************************************
// Bonus
//
//
// const arrayObj = [
//   { first: "Romeo", last: "Montague" },
//   { first: "Mercutio", last: null },
//   { first: "Tybalt", last: "Capulet" }
// ];
//
//
//
// const whatIsInAName = function( collection, source ){
//   const srcKeys = Object.keys( source );
//   console.log( srcKeys );
//   console.log( source[srcKeys] );
//
//   collection.filter(function(obj){
//
//     // All you need is another loop to gain access to the second elements in the second argument.
//     for (let i = 0; i < srcKeys.length; i++) {
//       if ( !obj.hasOwnProperty(srcKeys) || obj[srcKeys[i]] !== source[srcKeys[i]] ){
//         console.log(`false`);
//         return false
//       }
//     }
//     console.log(`true`);
//     return true;
//   });
//
// };
//
// whatIsInAName( arrayObj, { last: "Capulet" } );
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
