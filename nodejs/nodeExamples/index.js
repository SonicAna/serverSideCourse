var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {
    console.log("Solving for rec with l = " + l + " and b = " + b);

    if(l <= 0 || b <= 0) {
        console.log("Dimensions should be greated than 0:  l = " + l + " and b = " + b);
    } else {
        console.log("The area of the rectangle is:" + rect.area(l, b));
        console.log("The perimiter of the rectangle is: " + rect.perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(2, -5);
solveRect(-2, 4);
solveRect(2, 0);
