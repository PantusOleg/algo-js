const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const shortPath = (graph, start, end) => {
  const costs = {};
  const proceeded = [];
  let neighbors = {};
  for (const node in graph) {
    if (node != start) {
      let value = graph[start][node];
      costs[node] = value || 10000;
    }
  }
  let node = findNodeLowestCost(costs, proceeded);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    for (const neighbor in neighbors) {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    }
    proceeded.push(node);
    node = findNodeLowestCost(costs, proceeded);
  }
  return costs;
};

const findNodeLowestCost = (costs, proceeded) => {
  let lowestCost = 10000;
  let lowestNode;
  for (const node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && !proceeded.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  }
  return lowestNode;
};

console.log(shortPath(graph, "a", "g"));
