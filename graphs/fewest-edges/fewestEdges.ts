import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const visited = new Set([start]);
  const queue = new Queue([{node: start, edges: 0}]);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current.node === sought) {
      return current.edges;
    }

    for (const node of current.node.adjacent) {
      if (!visited.has(node)) {
        console.log("current edges + 1", current.edges + 1);
        console.log("desired object", {node, edges: current.edges + 1});
        visited.add(node);
        const edges = current.edges + 1;
        queue.enqueue({node, edges});
        console.log("Queue", queue);
      }
    }


  }

  return Infinity;
}

export { fewestEdges };
