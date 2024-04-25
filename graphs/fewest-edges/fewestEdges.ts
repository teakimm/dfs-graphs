import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const visited = new Set([start]);
  const queue = new Queue([start]);
  let minEdges = 0;

  while (!queue.isEmpty()) {
    minEdges = 0;
    const current = queue.dequeue();

    if (current === sought) {
      return minEdges;
    }

    for (const node of current.adjacent) {
      if (!visited.has(node)) {
        queue.enqueue(node);
        minEdges++;
      }
    }


  }

  return Infinity;
}

export { fewestEdges };
