// console.log("js working");

// Declare a Rectangle class.where the constructor should take a length and width as arguments.

// The Rectangle class should have the following methods...

// isSquare - This method returns true if the rectangle is a square, otherwise returns false
// Hint: Squares have sides of equal length.

//     area - This method returns the area of the rectangle.
//         Hint: Area = length * width

// perimeter - This method returns the perimeter of the rectangle.
//     Hint: Calculate the perimeter by adding all of the sides together.

//         Instantiate 2 rectangles with different lengths and widths.For each rectangle you instatiated, print the following messages: The area of the Rectangle is ____.

// The perimeter of the Rectangle is ____.

// This Rectangle is a square!(if the return of method isSquare is true).

// This Rectangle is NOT a square!(if the return of method isSquare is false)

// 😉 commit

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare(l, w) {
        if (l === w) {
            console.log("Rectangle is square - true");
            return "true";
        } else {
            console.log("rectangle is not square - false");
            return "false";
        }

    }
    area(l, w) {
        let area = l * w;
        console.log("area of the rectangle is  " + area);

    }
    perimeter(l, w) {
        let perimeter = 2 * (l + w);
        console.log("The perimeter of the Rectangle is  " + perimeter);

    }

}

let a = new Rectangle(2, 3);
console.log(a);
console.log(a.isSquare(2, 2));
a.area(2, 3);
a.perimeter(2, 3);
