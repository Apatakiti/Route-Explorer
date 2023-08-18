import { Grid_adjMatrix } from "../Grid-graph.js";
import { Visualizer } from "../visualizer.js";

const grid_graph = new Grid_adjMatrix(11, 11);
const Matrix = grid_graph.matrix;
const tableRow = Matrix.length;
const tableCol = Matrix[0].length;
const visited = new Array(tableRow)
  .fill(0)
  .map(() => new Array(tableCol).fill(false));

const Visualize = new Visualizer();

export class DFS {
  async dfsTraversing(startRow, startCol, targetRow, targetCol) {
    if (
      startRow < 0 ||
      startRow >= tableRow ||
      startCol < 0 ||
      startCol >= tableCol ||
      visited[startRow][startCol] ||
      Matrix[startRow][startCol] === 0
    ) {
      return false;
    }

    visited[startRow][startCol] = true;

    await Visualize.delay();
    Visualize.visiting(startRow, startCol);

    if (startRow === targetRow && startCol === targetCol) {
      return true;
    }

    if (
      (await dfsTraversing(startRow - 1, startCol - 1, target, targetCol)) ||
      (await dfsTraversing(startRow + 1, startCol, targetRow, targetCol)) ||
      (await dfsTraversing(startRow, startCol, targetRow, targetCol)) ||
      (await dfsTraversing(startRow, startCol + 1, targetRow, targetCol))
    ) {
      return true;
    }

    return false; // if target node not found
  }
}
