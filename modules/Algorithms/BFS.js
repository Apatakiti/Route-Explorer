import { Visualizer } from "../visualizer.js";

export class BFS {
  async TraverseBFS(Matrix, startNode, targetNode) {
    const Visualize = new Visualizer();

    const tableRow = Matrix.length;
    const tableCol = Matrix[0].length;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const queue = [
      {
        currentRowNode: startNode[0],
        currentColNode: startNode[1],
        trackPath: [[startNode[0], startNode[1]]],
      },
    ];
    const visited = new Set();

    while (queue.length) {
      const { currentRowNode, currentColNode, trackPath } = queue.shift();

      visited.add(`${currentRowNode},${currentColNode}`);

      // Delay to Visualize
      // await Visualize.delay();
      await new Promise((res) => setTimeout(res, 20))
      Visualize.visiting(currentRowNode, currentColNode);

      // Terminate/return shortest path on targetNode
      if (
        currentRowNode === targetNode[0] &&
        currentColNode === targetNode[1]
      ) {
        for ( const [currentRow, currentCol] of trackPath) {


          await Visualize.delay();
          Visualize.shortestPath(currentRow, currentCol);
        }
        return; // stop when path is found
      }

      for (const [directRow, directCol] of directions) {
        let nextRow = currentRowNode + directRow;
        let nextCol = currentColNode + directCol;
        if (
          nextRow >= 0 &&
          nextCol >= 0 &&
          tableRow > nextRow &&
          tableCol > nextCol &&
          Matrix[nextRow][nextCol] === 0 &&
          !visited.has(`${nextRow},${nextCol}`)
        ) {
          queue.push({
            currentRowNode: nextRow,
            currentColNode: nextCol,
            trackPath: [...trackPath, [nextRow, nextCol]],
          });
        }
      }
    }
    return; // No path found
  }
}
