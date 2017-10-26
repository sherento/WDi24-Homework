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
