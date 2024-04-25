import { Stack } from "../common/stack";
import { UGraphNodeStr } from "../graph/graph";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {

  result.push(start.value);

  for (const node of start.adjacent) {

    if (!visited.has(node)) {
      visited.add(node);
      rDfs(node, result, visited);

    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  const stack = new Stack([start]);
  const result: string[] = [];
  const visited = new Set([start]);

  while (!stack.isEmpty()) {
    const current = stack.pop();
    result.push(current.value);

    for (const node of current.adjacent) {
      if (!visited.has(node)) {
        visited.add(node);
        stack.push(node);
      }
    }
  }
  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  const queue = new Queue([start]);
  const result: string[] = [];
  const visited = new Set([start]);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    result.push(current.value);

    for (const node of current.adjacent) {
      if (!visited.has(node)) {
        visited.add(node);
        queue.enqueue(node);
      }
    }
  }
  return result;
}


export { iDfs, rDfs, bfs };