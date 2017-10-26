/*
Geometry Function Lab
*/

// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const isSquare = function ( rectangle ) {
  return rectangle.length === rectangle.width;
}

const area = function ( rectangle ) {
  return rectangle.length * rectangle.width;
}

const perimeter = function ( rectangle ) {
  return ( 2 * rectangle.length ) + ( 2 * rectangle.width );
}

const rectangle1 = {
  length: 4,
  width: 4,
}
const rectangle2 = {
  length: 4,
  width: 5,
}
const rectangle3 = {
  length: 4,
  width: 6,
}

console.log(isSquare(rectangle1));
console.log(isSquare(rectangle2));
console.log(isSquare(rectangle3));
console.log(area(rectangle1));
console.log(area(rectangle2));
console.log(area(rectangle3));
console.log(perimeter(rectangle1));
console.log(perimeter(rectangle2));
console.log(perimeter(rectangle3));

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const isEquilateral = function ( triangle ) {
  return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
}
const isIsosceles = function ( triangle ) {
  return triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC
}
const triangleArea = function ( triangle ) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  let halfPerimeter = ( a + b + c ) / 2;
  console.log( halfPerimeter );
  const area = Math.sqrt( halfPerimeter * ( halfPerimeter - a ) * ( halfPerimeter - b ) * ( halfPerimeter - c ) );
  return area;
}
const isObtuse = function ( triangle ) {
  let sides = [triangle.sideA, triangle.sideB, triangle.sideC];
  sides.sort(function(a, b) {
    console.log(a, b);
    console.log(a - b);
    return a - b;
  });
  console.log(sides);
  return (( sides[0] * sides[0] ) + ( sides[1] * sides[1] )) < ( sides[2] * sides[2] )
}

const triangle1 = {
  sideA: 6,
  sideB: 7,
  sideC: 5
};
const triangle2 = {
  sideA: 5,
  sideB: 14,
  sideC: 10
};
const triangle3 = {
  sideA: 37,
  sideB: 35,
  sideC: 12
};

console.log(isEquilateral(triangle1));
console.log(isEquilateral(triangle2));
console.log(isEquilateral(triangle3));
console.log(isIsosceles(triangle1));
console.log(isIsosceles(triangle2));
console.log(isIsosceles(triangle3));
console.log(triangleArea(triangle1));
console.log(triangleArea(triangle2));
console.log(triangleArea(triangle3));
console.log(isObtuse(triangle1));
console.log(isObtuse(triangle2));
console.log(isObtuse(triangle3));
