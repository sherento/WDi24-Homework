## Wherefore art thou

Make a function called `whatIsInAName` that will take two arguments. The function will look through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).

Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Spoiler - All the values die at the end of the function.

HINT: Call the function like so:

```js
const arrayObj = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

whatIsInAName( arrayObj, { last: "Capulet" } );
```

Bonus - see if you can get it to work with additional values in the second argument

```js
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
```
