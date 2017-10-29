//PART 1 RECTANGLE

/*Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

//global scope

const rectangle = {
  length: 4,
  width: 4
};


const isSquare = function (shape) { //function for isSquare
  if (shape.length === shape.width) {
    console.log("This shape is a square");
  }
  else {
    console.log("This shape is not a sqaure");
  }
};

isSquare(rectangle);

const area = function (shape) {
  let shapeArea = shape.length * shape.width
  console.log(shapeArea);
};

area(rectangle);

const perimeter = function (shape) {
  let shapeSum = 2 * (shape.length + shape.width) //sum to find out perimeter
  console.log(shapeSum);
};

perimeter(rectangle);

//PART TWO TRIANGLE

/*Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

longSide = 0;

const isEquilateral = function (shape) {
  if ((shape.sideA === shape.sideB) && (shape.sideA === shape.sideC)) {
    console.log("The shape is equilateral");
  }
  else {
    console.log("The shape is not an equilateral");
  }
};

isEquilateral(triangle);

const isIsosceles = function (shape) {
  if ((shape.sideA === shape.sideB) || (shape.sideA === shape.sideC || shape.sideB === shape.sideC)) {
    console.log("The shape is an isosceles");
  } else {
    console.log("This shape is not an isosceles");
  }
};

isIsosceles(triangle);

const areaTriangle = function (shape) {
  let halfBase = shape.sideA / 2
  let heightA = (shape.sideC * shape.sideC) - (halfBase * halfBase)
  let heightB = Math.sqrt(heightA)
  let triArea = shape.sideA * heightB * 0.5 //area calc
  console.log(`The area is ${triArea}`);
}

areaTriangle(triangle);


//Obtuse

const isObtuse = function (shape) {    //maths a squared + b squared = greater than c sqaured
    if ((shape.sideA^2 + shape.sideB ^2) < (shape.sideC^2)) {
      console.log("This shape is obtuse");
    }    else {
      console.log("This shape is not obtuse");
    }
}

isObtuse(triangle);
