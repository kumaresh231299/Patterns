// 1. Inverse Pyramid

const inversePyramid = (rows) => {
    console.log("Inverse Pyramid : ");
    for (let i = rows; i >= 1; i--) {
        let spaces = " ".repeat(rows - i)
        let stars = "*".repeat(2*i-1)
        console.log(spaces + stars)
    }
    console.log("\n");
}

// 2. Inverse Right Angle Triangle
const inverseRightAngleTriangle = (rows) =>{
    console.log("Inverse Right Angle Triangle : ")
    for(let i=rows;i>=1;i--){
        console.log("*".repeat(i));
    }
    console.log("\n");
}

// 3. Square
const square = (rows) => {
    console.log("Square");
    for(let i=1;i<=rows;i++){
        console.log("*".repeat(rows))
    }
    console.log("\n");
}

// 4. Hollow Square
const hollowSquare = (rows) => {
    console.log("Hollow Square : ");
    for(let i=1;i<=rows;i++){
        if (i===1 || i===5) {
            console.log("*".repeat(rows));
        } else {
            console.log("*"+" ".repeat(rows-2)+"*")
        }
    }
    console.log("\n");
}


function generatePatterns(rows) {
    inversePyramid(rows);
    inverseRightAngleTriangle(rows);
    square(rows);
    hollowSquare(rows);
}
const rows = 5;
generatePatterns(rows)