import { Visualizer } from "../visualizer.js";

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(currentWeight, weightPriority) {
    this.queue.push({ currentWeight, weightPriority });
    this.queue.sort((a, b) => a.weightPriority - b.weightPriority);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift().currentWeight;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const Visualize = new Visualizer();

export const dijkstra = async (Matrix, Start, Target) => {
  const gridRow = Matrix.length;
  const gridCol = Matrix[0].length;
  const distances = Array.from({ length: gridRow }, () =>
    Array(gridCol).fill(Infinity)
  );

  distances[Start[0]][Start[1]] = 0;

  const pq = new PriorityQueue();
  pq.enqueue(Start, 0);

  const predecessors = Array.from({ length: gridRow }, () =>
    Array(gridCol).fill(null)
  );

  while (!pq.isEmpty()) {
    const currentVertex = pq.dequeue();
    const [currentRow, currentCol] = currentVertex;

    await Visualize.delay();
    Visualize.visiting(currentRow, currentCol);

    // Weight is from Zero(0) upward
    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
      for (let colOffset = -1; colOffset <= 1; colOffset++) {
        const newRow = currentRow + rowOffset;
        const newCol = currentCol + colOffset;

        // Terminating on finding target node
        if (currentRow === Target[0] && currentCol === Target[1]) {
          const shortestPath = [];
          let current = Target;
          while (current) {
            shortestPath.push(current);
            current = predecessors[current[0]][current[1]];
          }
          shortestPath.reverse();

          //const distDiffOf_Start_Target = distances[Target[0]][Target[1]]
          for (const [row, col] of shortestPath) {
            await Visualize.delay();
            Visualize.shortestPath(row, col);
          }
          return;
        }

        if (
          newRow >= 0 && newRow < gridRow && newCol >= 0 && newCol < gridCol
        ) {
          const weight = Matrix[currentRow][currentCol];
          const totalDistance = distances[currentRow][currentCol] + weight;

          if (totalDistance < distances[newRow][newCol]) {
            distances[newRow][newCol] = totalDistance;
            pq.enqueue([newRow, newCol], totalDistance);
            predecessors[newRow][newCol] = currentVertex;
          }
        }
      }
    }
  }
  return //if not found
};
