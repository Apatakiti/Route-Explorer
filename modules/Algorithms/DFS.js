import { Visualizer } from "../visualizer.js";

const visualize = new Visualizer();

export class DFS {
 async shortestPathDFS(adjMatrix, startNode, targetNode) {
    const path = [];
    const visited = new Set();

    this.dfs( startNode[0], startNode[1], path, visited, adjMatrix, targetNode );

      for (const [row, col] of path) {
       await visualize.delay()
       visualize.shortestPath(row, col)
      }
  }

 async dfs(x, y, path, visited, adjMatrix, targetNode) {
    if (
      x < 0                    ||
      x >= adjMatrix.length    ||
      y < 0                    ||
      y >= adjMatrix[0].length ||
      visited.has(`${x}-${y}`) ||
      adjMatrix[x][y] !== 0
    ) {
      return false;
    }

    path.push([x, y]);
    visited.add(`${x}-${y}`);

    if (x === targetNode[0] && y === targetNode[1]) {
      return true;
    }

    if (
     await this.dfs(x + 1, y, path, visited, adjMatrix, targetNode) ||
     await this.dfs(x - 1, y, path, visited, adjMatrix, targetNode) ||
     await this.dfs(x, y + 1, path, visited, adjMatrix, targetNode) ||
     await this.dfs(x, y - 1, path, visited, adjMatrix, targetNode)
    ) {
      await visualize.delay()
      // This tracks path immediately and always not necessarily the shortest path
      // To visualize the recursive visitation
      // visualize.visiting(x, y)
      return true;
    }

    path.pop();
    return false;
  }
}
