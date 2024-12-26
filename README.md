# Pattern Generation Functions

- This project includes JavaScript functions to generate different types of patterns using the "*" character.
- These patterns include an inverse pyramid, an inverse right-angle triangle, a square, and a hollow square.
- The code is organized to define each pattern in its own function and to run all patterns through a generatePatterns function.

## Functions Overview

****1. inversePyramid(rows)**** 
- Generates an inverted pyramid pattern of a given number of rows.

**Parameter**
- rows (Number) : The number of rows in the pyramid.

**Output :** An inverted pyramid pattern where the number of stars decreases in each subsequent row, centered with spaces.

**Example Output :** (for ```rows = 5```)
```
*********
 *******
  *****
   ***
    *
```

****2. inverseRightAngleTriangle(rows)**** 
- Generates an inverted right-angle triangle pattern of a given number of rows.

**Parameter**
- rows (Number) : The number of rows in the triangle.

**Output :** An inverted right-angle triangle pattern where the number of stars decreases row by row.

**Example Output :** (for ```rows = 5```)
```
*****
****
***
**
*
```

****3. square(rows)**** 
- Generates a square pattern of stars with a given number of rows and columns.

**Parameter**
- rows (Number) : The number of rows in the square.

**Output :** A solid square of stars.

**Example Output :** (for ```rows = 5```)
```
*****
*****
*****
*****
*****
```

****4. hollowSquare(rows)**** 
- Generates a hollow square pattern of a given number of rows and columns.

**Parameter**
- rows (Number) : The number of rows in the square.

**Output :** A square outline of stars with spaces in the middle rows.

**Example Output :** (for ```rows = 5```)
```
*****
*   *
*   *
*   *
*****
```

****5. generatePatterns(rows)**** 
- Executes all the above functions sequentially to generate their respective patterns.

**Parameter**
- rows (Number) : The number of rows to be used for all the patterns.

****6. pyramid(line)**** 
- Generates a standard pyramid pattern of a given number of rows.

**Parameter**
- line (Number) : The number of rows in the pyramid.

**Output :** A centered pyramid pattern where the number of stars increases row by row.

**Example Output :** (for ```line = 5```)
```
    *
   ***
  *****
 *******
*********
```

****7. diamond(column)**** 
- Generates a diamond pattern of a given number of rows for the upper half.

**Parameter**
- column (Number) : The number of rows in the upper half of the diamond.

**Output :** A diamond pattern with both an upper and lower half, centered with spaces.

**Example Output :** (for ```column = 5```)
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

## Usage

1. Copy the code to your JavaScript environment.
2. Call ```generatePatterns(rows)``` with your desired number of rows to see all patterns printed to the console.
3. Use ```pyramid(line)``` and ```diamond(column)```  separately for additional patterns.

**Example**
```
const rows = 5;
generatePatterns(rows);
pyramid(rows);
diamond(rows);
```

## Notes

- Ensure the input to the functions is a positive integer.
- These patterns are printed directly to the console.
- Adjust the number of rows as needed to generate different sizes of patterns.