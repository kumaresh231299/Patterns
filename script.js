const pyramid = (line) => {
    console.log("Pyramid : ");
    for (let i = 1; i <= line; i++) {
        let spaces = " ".repeat(line - i)
        let stars = "*".repeat(2 * i - 1)
        console.log(spaces + stars)
    }
    console.log("\n");
}

pyramid(5)

const diamond = (column) => {
    console.log("Diamond");
    //UpperPart
    for (let i = 1; i <= column; i++) {
        let spaces = " ".repeat(column - i)
        let stars = "*".repeat(2 * i - 1)
        console.log(spaces + stars)
    }

    //LowerPart
    for (let i=column-1;i>=1;i--){
        let spaces = " ".repeat(column - i)
        let stars = "*".repeat(2 * i - 1)
        console.log(spaces + stars)
    }
    console.log("\n")
}

diamond(5)