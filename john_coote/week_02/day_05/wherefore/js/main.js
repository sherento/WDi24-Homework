console.log("on");

const arrayObj = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" },   // Should get this
  { first: "Derek", last: "Capulet" }    // and this
];

let arrReturn = [];


  // whatIsInAName( arrayObj, { last: "Capulet" } );


const compareObjects = function (objInArray, obj1) {
  for (let key1 in obj1) {
    // key1 : obj1[key1]   (key1, value1)
    // step through objInArray to see if there's a matching key1
    for (let keySet in objInArray) {
      if (key1 === keySet) {
        // the keys match. do the values?
        if ( obj1[key1] === objInArray[keySet]) {
          //we have a match.
          console.log("rteue");
          return true;
        }
      }
    }
    console.log("false");
    false;
  }
}




const whatIsInAName = function (arr1, obj1) {

  // loop through the array to extfact the objects within
  // let this internal object be objInArray
  for (let objInArray of arr1) {
    console.log(objInArray);
    if (compareObjects (objInArray, obj1)) {
      arrReturn.push(objInArray)
    }
    // if (compareObjects (objInArray, obj1)) {
    // push objInArray to arrReturn
  }
console.log(arrReturn);
  }


  // loop through the objInArray and extract the key and value pairs
  // keyInternal
  // valueInternal

  // need to return the entire objInArray IFF
  // all key / value pairs from objInArray === obj1
  // if we have a match, push it to arrReturn






whatIsInAName (arrayObj, {first: "Derek", last: "Capulet" } )
