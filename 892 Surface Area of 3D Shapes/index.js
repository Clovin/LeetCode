/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                continue;
            }

            result += grid[i][j] * 6 - (grid[i][j] - 1) * 2;

            // top
            if (i - 1 >= 0 && grid[i - 1][j] !== 0) {
                result -= grid[i][j] > grid[i - 1][j] ? grid[i - 1][j] : grid[i][j];
            }

            // right
            if (j + 1 < grid[i].length && grid[i][j + 1] !== 0) {
                result -= grid[i][j] > grid[i][j + 1] ? grid[i][j + 1] : grid[i][j];
            }

            // bottom
            if (i + 1 < grid.length && grid[i + 1][j] !== 0) {
                result -= grid[i][j] > grid[i + 1][j] ? grid[i + 1][j] : grid[i][j];
            }

            // left
            if (j - 1 >= 0 && grid[i][j - 1] !== 0) {
                result -= grid[i][j] > grid[i][j - 1] ? grid[i][j - 1] : grid[i][j];
            }
        }
    }

    return result;
};