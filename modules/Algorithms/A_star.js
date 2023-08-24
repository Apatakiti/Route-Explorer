import { Visualizer } from "../visualizer.js";
const Visualize = new Visualizer()

export class A_star {

 async aStar(grid, startNode, targetNode) {

    const tableRow = grid.length;
    const tableCol = grid[0].length;
    const openSet = [startNode];
    const cameFrom = new Array(tableRow).fill(null).map(() => new Array(tableCol).fill(null));
    const ActualCost_gScore = new Array(tableRow).fill(null).map(() => new Array(tableCol).fill(Number.POSITIVE_INFINITY));
    const TotalCost_fScore = new Array(tableRow).fill(null).map(() => new Array(tableCol).fill(Number.POSITIVE_INFINITY));

    const [startRow, startCol] = startNode;
    const [targetRow, targetCol] = targetNode;

    ActualCost_gScore[startRow][startCol] = 0;
    TotalCost_fScore[startRow][startCol] = this.heuristic_EstimatedCost(startRow, startCol, targetRow, targetCol);

    while (openSet.length > 0) {
      const [currentRow, currentCol] = this.getLowestFScoreNode( openSet, TotalCost_fScore );

      await Visualize.delay()
      Visualize.shortestPath(currentRow, currentCol)
      
      if (currentRow === targetRow && currentCol === targetCol) {
        return 
      }

      openSet.splice(openSet.indexOf([currentRow, currentCol]), 1);

      const neighbors = this.getNeighbors(grid, currentRow, currentCol);

      for (const [neighborRow, neighborCol] of neighbors) {
        const tentativeGScore = ActualCost_gScore[currentRow][currentCol] + grid[neighborRow][neighborCol];

        if (tentativeGScore < ActualCost_gScore[neighborRow][neighborCol]) {
          cameFrom[neighborRow][neighborCol] = [currentRow, currentCol];
          ActualCost_gScore[neighborRow][neighborCol] = tentativeGScore;
          TotalCost_fScore[neighborRow][neighborCol] = ActualCost_gScore[neighborRow][neighborCol] + this.heuristic_EstimatedCost(
              neighborRow, neighborCol, targetRow, targetCol
            );

          if ( !openSet.some( (node) => node[0] === neighborRow && node[1] === neighborCol ) ) {
            openSet.push([neighborRow, neighborCol]);
          }
        }
      }
    }

    return null; // No path found
  }

  heuristic_EstimatedCost(rowA, colA, rowB, colB) {
    // Manhattan distance heuristic |A2(col) - A1(row)| + |B2 - B1|
    // Or point horizontal connects the vertical target node
    return Math.abs(rowA - rowB) + Math.abs(colA - colB);
  }

  getLowestFScoreNode(nodes, fScore) {
    let lowestNode = nodes[0];
    let lowestScore = fScore[lowestNode[0]][lowestNode[1]];

    for (const [row, col] of nodes) {
      if (fScore[row][col] < lowestScore) {
        lowestNode = [row, col];
        lowestScore = fScore[row][col];
      }
    }

    return lowestNode;
  }

  getNeighbors(grid, row, col) {
    const neighbors = [];

    if (row > 0) neighbors.push([row - 1, col]);
    if (row < grid.length - 1) neighbors.push([row + 1, col]);
    if (col > 0) neighbors.push([row, col - 1]);
    if (col < grid[0].length - 1) neighbors.push([row, col + 1]);

    return neighbors;
  }
}
