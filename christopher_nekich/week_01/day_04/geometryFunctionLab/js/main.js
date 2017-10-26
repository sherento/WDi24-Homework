// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(shape){
  if(shape.length === shape.width){
    return true;
  }else{
    return false;
  };
};

const area = function(shape){
  return (shape.width * shape.length);
};

const perimeter = function(shape){
  return (2 * shape.width + 2 * shape.length);
};


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 3,
  sideB: 5,
  sideC: 4
};

const isEquilateral = function(shape){
  if(shape.sideA === shape.sideB && shape.sideB === shape.sideC){       // if all three sides are equal
    return true;
  }else{
    return false;
  };
};

const isIsosceles = function(shape){
  if(shape.sideA === shape.sideB || shape.sideB === shape.sideC){       // if at least two sides are equal
    return true;
  }else{
    return false;
  };
};

const areaTriangle = function(shape){
  let s = (shape.sideA + shape.sideB + shape.sideC) / 2 ;      // calculates half of the triangles perimeter
  let area = s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC);       // herons formula
  return area;
};

const isObtuse = function(shape){
  let sides = [shape.sideA, shape.sideB, shape.sideC];
  sides = sides.sort();

  if( (sides[0]**2) + (sides[1]**2) < sides[2]**2 ){        // triangle is obtuse if a**2 + b**2 < c**2 where c is the longest side
    return true;
  }else{
    return false;
  };
};
