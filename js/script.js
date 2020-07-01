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

// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }
//     isSquare(l, w) {
//         if (l === w) {
//             console.log("Rectangle is square - true");
//             return "true";
//         } else {
//             console.log("rectangle is not square - false");
//             return "false";
//         }

//     }
//     area(l, w) {
//         let area = l * w;
//         console.log("area of the rectangle is  " + area);

//     }
//     perimeter(l, w) {
//         let perimeter = 2 * (l + w);
//         console.log("The perimeter of the Rectangle is  " + perimeter);

//     }

// }

// let a = new Rectangle(2, 3);
// let b = new Rectangle(4, 5);
// console.log(a);
// console.log(b);
// console.log(a.isSquare(2, 2));
// a.area(2, 3);
// a.perimeter(2, 3);


// Triangle
// Declare a Triangle class.Where the constructor should take three sides-- sideA sideB and sideC-- as arguments.

// The Triangle class should have the following methods...

// isEquilateral - This method returns true if the triangle is equilateral, otherwise returns false.
//     Hint: Equilateral triangles have sides of the same length.

//         isIsosceles - This method returns true if the triangle is isosceles, otherwise returns false.
//             Hint: Isosceles triangles have two equal sides.

//                 area - This method returns the area of the Triangle.
//                     Hint: A triangle has three sides represented by a, b and c, as well as a semi - perimeter, represented by s.s = (a + b + c) / 2
// and Area is equal to the square root of s * (s - a) * (s - b) * (s - c).

//     isObtuse - This method returns true if the triangle is obtuse, otherwise returns false.
//         Instantiate 3 Triangles.each one with different values from each other.For each rectangle you instatiated, print the following messages:

// The area of the Triangle is ____.

// Add other messages to test your code 👍

// 😉 commit

// class Triangle {
//     constructor(sideA, sideB, sideC) {
//         this.sideA = sideA;
//         this.sideB = sideB;
//         this.sideC = sideC;
//     }
//     isEquilateral(a1, b1, c1) {
//         if (a1 === b1 && a1 === c1) {
//             console.log(`triangle is equilateral cuz sides are same length  ${a1, b1, c1}`);
//             return "true";
//         } else {
//             console.log(`triangle NOT equilateral cuz sides are NOT same length  ${a1, b1, c1}`);
//             return "false";
//         }
//     }

//     isIsosceles(a1, b1, c1) {
//         if (a1 === b1 || a1 === c1 || b1 === c1) {
//             console.log(`triangle is isosceles cuz it has two sildes of same length  ${a1, b1, c1}`);
//             return "true";
//         } else {
//             console.log(`triangle NOT isosceles cuz, two sides are NOT having same length  ${a1, b1, c1}`);
//             return "false";
//         }
//     }


//     area(a1, b1, c1) {
//         let s = (a1 + b1 + c1) / 2;
//         let area = Math.sqrt(s * ((s - a1) * (s - b1) * (s - c1)));
//         console.log(`traingle perm(s) is ${s}`);
//         console.log(`traingle area is ${area}`);
//     }

//     isObtuse(angle) {
//         if (angle < 90) {
//             console.log("Acute angle");
//             return "Acute angle.";
//         }
//         if (angle === 90) {
//             console.log("Right angle");
//             return "Right angle.";
//         }
//         if (angle > 90 && angle < 180) {
//             console.log("Obtuse angle");
//             return "Obtuse angle.";
//         }
//         console.log("Straight angle");
//         return "Straight angle.";
//     }
// }

// inst = new Triangle(2, 3, 4);
// inst.area(2, 3, 4);
// inst.isObtuse(100);
// inst.isEquilateral(5, 5, 5);
// inst.isIsosceles(6, 6, 9);


// Shape
// Define a Shape class. It should have the number of sides and a color associated with it. Make the other classes inherit from it.

// 😉 commit


class Shape {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.color = "blue";
    }
}


class Rectangle extends Shape {
    constructor(sideA, sideB, sideC, length, width) {
        super(sideA, sideB, sideC)
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
console.log(a.color);


class Triangle extends Shape {
    constructor(sideA, sideB, sideC, length, width, third) {
        super(sideA, sideB, sideC)
        this.length = length;
        this.width = width;
        this.third = third;
    }
    isEquilateral(a1, b1, c1) {
        if (a1 === b1 && a1 === c1) {
            //if (a1 === b1 === a1 === c1) {
            console.log(`triangle is equilateral cuz sides are same length  ${a1, b1, c1}`);
            return "true";
        } else {
            console.log(`triangle NOT equilateral cuz sides are NOT same length  ${a1, b1, c1}`);
            return "false";
        }
    }

    isIsosceles(a1, b1, c1) {
        if (a1 === b1 || a1 === c1 || b1 === c1) {
            console.log(`triangle is isosceles cuz it has two sildes of same length  ${a1, b1, c1}`);
            return "true";
        } else {
            console.log(`triangle NOT isosceles cuz, two sides are NOT having same length  ${a1, b1, c1}`);
            return "false";
        }
    }


    area(a1, b1, c1) {
        let s = (a1 + b1 + c1) / 2;
        let area = Math.sqrt(s * ((s - a1) * (s - b1) * (s - c1)));
        console.log(`traingle perm(s) is ${s}`);
        console.log(`traingle area is ${area}`);
    }

    isObtuse(angle) {
        if (angle < 90) {
            console.log("Acute angle");
            return "Acute angle.";
        }
        if (angle === 90) {
            console.log("Right angle");
            return "Right angle.";
        }
        if (angle > 90 && angle < 180) {
            console.log("Obtuse angle");
            return "Obtuse angle.";
        }
        console.log("Straight angle");
        return "Straight angle.";
    }
}

let b = new Triangle(4, 5, 6);
b.color = "Green" //changing color from child class
console.log(b.color);


// Bonus
// Feel free to fork and clone and work your way through the following repo:
// Gladiator