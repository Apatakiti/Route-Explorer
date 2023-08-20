import { Visualizer } from "../visualizer.js";

const visualize = new Visualizer()

export class DFS {
 async dfsTraversing(matrix, currentRow, currentCol, targetNode, visited) {
    if (
      currentRow < 0                  ||
      currentRow >= matrix.length     ||
      currentCol < 0                  ||
      currentCol >= matrix[0].length  ||
      visited[currentRow][currentCol] ||
      matrix[currentRow][currentCol] === 1
    ) {
      return false;
    }

    visited[currentRow][currentCol] = true;

    // Base case
    if (currentRow === targetNode[0] && currentCol === targetNode[1]) {
      return true;
    }

    await visualize.delay()
    visualize.visiting(currentRow, currentCol)

    if (
       await this.dfsTraversing( matrix, currentRow + 1, currentCol, targetNode, visited ) ||
       await this.dfsTraversing( matrix, currentRow - 1, currentCol, targetNode, visited ) ||
       await this.dfsTraversing( matrix, currentRow, currentCol + 1, targetNode, visited ) ||
       await this.dfsTraversing( matrix, currentRow, currentCol - 1, targetNode, visited )
    ) {
      return true;
    }

    return false;
  }
}
