/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        let a = points[i];
        
        for (let j = i + 1; j < points.length; j++) {
            let b = points[j];

            for (let k = j + 1; k < points.length; k++) {
                let c = points[k];

                let area = getArea(a, b, c);
                if (area > result) {
                    result = area;
                }
            }
        }
    }

    return result;
};

function getArea (a, b, c) {
    return Math.abs((a[0] * b[1] - b[0] * a[1]) + (b[0] * c[1] - c[0] * b[1]) + (c[0] * a[1] - a[0] * c[1])) / 2;
}
