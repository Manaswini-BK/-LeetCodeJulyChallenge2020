/*You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
Example:
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let peri = 0;
    let temp = 0;
    let row = grid.length;
    let col = grid[0].length;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(grid[i][j] === 1){
                temp = 4;
                let n1 = grid[i-1] !== undefined ? grid[i-1][j] : 0;
                let n2 = grid[i+1] !== undefined ? grid[i+1][j] : 0;
                let n3 = grid[i][j-1] !== undefined ? grid[i][j-1] : 0;
                let n4 = grid[i][j+1] !== undefined ? grid[i][j+1] : 0;
                temp = temp - (n1+n2+n3+n4);
                peri += temp;
            }
        }
    }
    return peri;
};