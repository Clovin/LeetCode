/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let directions = ['N', 'E', 'S', 'W'];
    let direction = 'N';
    let now = [0, 0];
    let result = 0;

    let obstacleMap = new Map();
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacleMap.has(obstacles[i][0])) {
            obstacleMap.get(obstacles[i][0]).push(obstacles[i][1]);
        } else {
            obstacleMap.set(obstacles[i][0], [obstacles[i][1]]);
        }
    }
    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            direction = directions[(directions.indexOf(direction) - 1 + 4) % 4];
            continue;
        }

        if (commands[i] === -2) {
            direction = directions[(directions.indexOf(direction) + 1 + 4) % 4];
            continue;
        }

        if (direction === 'N') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacleMap.has(now[0]) && obstacleMap.get(now[0]).includes(now[1] + 1)) {
                    break;
                }

                now[1] += 1;
            }
        } else if (direction === 'E') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacleMap.has(now[0] - 1) && obstacleMap.get(now[0] - 1).includes(now[1])) {
                    break;
                }

                now[0] -= 1;
            }
        } else if (direction === 'S') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacleMap.has(now[0]) && obstacleMap.get(now[0]).includes(now[1] - 1)) {
                    break;
                }

                now[1] -= 1;
            }
        } else if (direction === 'W') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacleMap.has(now[0] + 1) && obstacleMap.get(now[0] + 1).includes(now[1])) {
                    break;
                }

                now[0] += 1;
            }
        }

        result = result > Math.pow(now[0], 2) + Math.pow(now[1], 2) ? result : Math.pow(now[0], 2) + Math.pow(now[1], 2);
    }

    return result;
};
