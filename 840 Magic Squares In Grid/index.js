/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        if (i + 2 >= grid.length) {
            break;
        }

        for (let j = 0; j < grid[i].length; j++) {
            if (j + 2 >= grid[i].length) {
                break;
            }

            let flag = false;
            let set = new Set();
            for (let p = i; p <= i + 2; p++) {
                for (let q = j; q <= j + 2; q++) {
                    if (grid[p][q] > 9 || grid[p][q] < 1) {
                        flag = true;
                        break;
                    }

                    if (set.has(grid[p][q])) {
                        flag = true;
                        break;
                    }

                    set.add(grid[p][q]);
                }

                if (flag) {
                    break;
                }
            }

            if (flag) {
                continue;
            }

            let sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
            // row
            if (grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] !== sum) {
                continue;
            }
            if (grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] !== sum) {
                continue;
            }

            // col
            if (grid[i][j] + grid[i + 1][j] + grid[i + 2][j] !== sum) {
                continue;
            }
            if (grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] !== sum) {
                continue;
            }
            if (grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] !== sum) {
                continue;
            }

            // diagonals
            if (grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] !== sum) {
                continue;
            }
            if (grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] !== sum) {
                continue;
            }

            result++;
        }
    }
    
    return result;
};
