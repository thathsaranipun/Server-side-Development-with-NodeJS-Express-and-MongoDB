var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveReact(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b)
    if (l <= 0 || b <= 0) {
        console.log("Please enter again please")
    } else {
        console.log("The area of the rectangele is " + rect.area(l, b))
        console.log("The perimeter of rectangele is " + rect.perimeter(l, b))
    }
}
solveReact(2, 4);
solveReact(4, 4);
solveReact(-2, 4);
solveReact(8, 4);



var people = {
    office_members: (x, y, z) => ((x * y) + z),
    absent_members: (k, t) => (k * t)
}

function office_present(x, y, z, k, t) {
    console.log("present members " + people.office_members(x, y, z))
    console.log("absent members " + people.absent_members(k, t))

}

office_present(1, 2, 3, 4, 5)