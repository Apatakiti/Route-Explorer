import { Visualizer } from "../visualizer.js";
const Visualize = new Visualizer()

 export class Astar {

  // priority Queue
  constructor() {
      this.elements = [];
  }

  enqueue(element, priority) {
      this.elements.push({ element, priority });
      this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
      return this.elements.shift().element;
  }

  isEmpty() {
      return this.elements.length === 0;
  }
  
 async aStar(grid, start, targetNode) {
    const tableRow = grid.length;
    const tableCol = grid[0].length;
    const openList = new Astar();
    const cameFrom = new Map();
    const ActualCost_gScore = new Map();

    ActualCost_gScore.set(start, 0);
    openList.enqueue(start, this.heuristic_EstimatedCost(start, targetNode));

    while (!openList.isEmpty()) {
        const current = openList.dequeue();

        // heuristic_EstimatedCost approach gives shortest path without searching
        await Visualize.delay()
        Visualize.shortestPath(current[0], current[1])

        if (current[0] === targetNode[0] && current[1] === targetNode[1]) {
            return 
        }

        const neighbors = this.re_direct(current[0], current[1], tableRow, tableCol);

        for (const neighbor of neighbors) {
            const tentativeActualCost_gScore = ActualCost_gScore.get(current) + grid[neighbor[0]][neighbor[1]];            

            if (
              !ActualCost_gScore.has(neighbor) || 
              tentativeActualCost_gScore < ActualCost_gScore.get(neighbor)
            ) {
                cameFrom.set(neighbor, current);
                ActualCost_gScore.set(neighbor, tentativeActualCost_gScore);
                const TotalCost_fScore = tentativeActualCost_gScore + this.heuristic_EstimatedCost(neighbor, targetNode);
                openList.enqueue(neighbor, TotalCost_fScore);
            }
        }
    }

    return; // No path found
  }

  heuristic_EstimatedCost(currentNode, targetNode) {
    // Manhattan distance heuristic |A2(col) - A1(row)| + |B2 - B1|
    // Or point horizontal connects the vertical target currentNode
    return Math.abs(currentNode[0] - targetNode[0]) + Math.abs(currentNode[1] - targetNode[1]);
  }

  re_direct(row, col, tableRow, tableCol) {
    const direction = [];
    
    if (row > 0) direction.push([row - 1, col]);
    if (row < tableRow - 1) direction.push([row + 1, col]);
    if (col > 0) direction.push([row, col - 1]);
    if (col < tableCol - 1) direction.push([row, col + 1]);
    
    return direction;
  }
}
