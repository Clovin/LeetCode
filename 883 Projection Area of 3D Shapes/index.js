/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let result = 0;
    
    let y = [];
    for (let i = 0; i < grid.length; i++) {
        let x = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0) {
                y[j] = 0;
            }

            if (grid[i][j] !== 0) {
                result++;
            }

            if (grid[i][j] > x) {
                x = grid[i][j];
            }

            if (grid[i][j] > y[j]) {
                y[j] = grid[i][j];
            }
        }

        result += x;
    }

    for (let i = 0; i < grid.length; i++) {
        result += y[i];
    }

    return result;
};