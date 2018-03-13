/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let result = []

  search(0, [], graph, result)

  return result
}

function search (index, route, graph, result) {
  if (index === graph.length - 1) {
    let newRoute = Array.from(route)
    newRoute.push(index)
    result.push(newRoute)
  }

  if (route.includes(index)) {
    return
  }

  for (let i = 0; i < graph[index].length; i++) {
    let newRoute = Array.from(route)
    newRoute.push(index)
    search(graph[index][i], newRoute, graph, result)
  }
}
