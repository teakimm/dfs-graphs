import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const visited = new Set([start]);
  const queue = new Queue([{node: start, edges: 0}]);
  let minEdges = 0;

  while (!queue.isEmpty()) {
    minEdges = 0;
    const current = queue.dequeue();

    if (current.node === sought) {
      return current.edges;
    }

    for (const node of current.node.adjacent) {
      if (!visited.has(node)) {
        const edges = current.edges++;
        queue.enqueue({node, edges});
        console.log(current.edges);
        minEdges++;
      }
    }


  }

  return Infinity;
}

export { fewestEdges };
