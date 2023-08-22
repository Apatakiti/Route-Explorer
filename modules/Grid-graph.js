let board = document.getElementById("board");

export class Grid_adjMatrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = this.createMatrix(rows, cols);
    this.graph = this.createGraph();
  }

  // Matrix for Visitable(0) and Unvisitable/obstacle(1) node
  createMatrix(matrixRow, matrixCol) {
    const grid_Matrix = new Array(matrixRow)
      .fill()
      .map(() => new Array(matrixCol).fill(0));
    return grid_Matrix;
  }

  // Add Obstacle in matrix
  obstacle(row, col, obstacle) {
    // validate
    if (row >= 0 && col >= 0 && row <= this.rows && col <= this.cols) {
      this.matrix[row][col] = obstacle;
    }
  }

  // 2D graph for traversing visualization
  createGraph() {
    for (let x = 0; x < this.matrix.length; x++) {
      const tableRow = document.createElement("tr");
      for (let y = 0; y < this.matrix[0].length; y++) {
        const tableCol = document.createElement("td");

        tableCol.setAttribute("id", `${"cell" + x}${y}`);
        tableCol.setAttribute("border", "2px");
        tableCol.classList.add("cell");
        let TextNode = document.createTextNode(`[${x}, ${y}]`);

        tableCol.appendChild(TextNode);
        tableRow.appendChild(tableCol);
      }
      board.appendChild(tableRow);
    }
  }
}
