function Node(val) {
    this.val = val;
    this.next = [];
    this.time = Infinity;
}

function popSmallestTime(list) {
    list.sort((a, b) => a.time - b.time);
    return list.shift();
}

function createGraph(numNodes, edges) {
    const nodes = {};
    
     for(var i = 1; i <= numNodes; i++) {
        nodes[i] = new Node(i);
    }
    
    edges.forEach(([u, v, w]) => {
        nodes[u].next.push([nodes[v], w]);
    });
    
    return nodes;
}

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    const nodes = createGraph(N, times);
    const unvisited = Object.values(nodes);
    nodes[K].time = 0;
    let maxTime = 0;
    
    do {
        const node = popSmallestTime(unvisited); 
        maxTime = node.time;
        node.next.forEach(([next, weight]) => {
            if ((node.time + weight) < next.time) {
                next.time = node.time + weight;
            }
        });
    } while (unvisited.length);
    
    return maxTime === Infinity ? -1 : maxTime;
};