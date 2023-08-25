import { Visualizer } from "../visualizer.js";

const visualize = new Visualizer();

export class DFS {
 async PathDFS(adjMatrix, startNode, targetNode) {
    const path = [];
    const visited = new Set();

    this.dfs( startNode[0], startNode[1], path, visited, adjMatrix, targetNode );

      for (const [row, col] of path) {
       await visualize.delay()
       visualize.shortestPath(row, col)
      }
  }

 async dfs(row, col, path, visited, adjMatrix, targetNode) {
    if (
      row < 0                      ||
      row >= adjMatrix.length      ||
      col < 0                      ||
      col >= adjMatrix[0].length   ||
      visited.has(`${row}-${col}`) ||
      adjMatrix[row][col] !== 0
    ) {
      return false;
    }

    path.push([row, col]);
    visited.add(`${row}-${col}`);

    if (row === targetNode[0] && col === targetNode[1]) {
      return true;
    }

    if (
     await this.dfs(row + 1, col, path, visited, adjMatrix, targetNode) ||
     await this.dfs(row - 1, col, path, visited, adjMatrix, targetNode) ||
     await this.dfs(row, col + 1, path, visited, adjMatrix, targetNode) ||
     await this.dfs(row, col - 1, path, visited, adjMatrix, targetNode)
    ) {
      // await visualize.delay()
      // This tracks path immediately and always not necessarily the shortest path
      // To visualize the recursive visitation
      // visualize.visiting(x, y)
      return true;
    }

    path.pop();
    return false;
  }
}
