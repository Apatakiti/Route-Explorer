import { row_col } from "./Start-targetNode.js";

let board = document.getElementById("board");

export class Grid_adjMatrix {
  constructor() {
    this.matrix = this.defaultMatrix()
  }

  // Matrix for Visitable(0) and Unvisitable/obstacle(1) node
  defaultMatrix() {
    const grid_Matrix = new Array(row_col[0])
      .fill().map(() => new Array(row_col[1]).fill(0));

    //  for (let i = 0; i < grid_Matrix.length; i++) {
    //   for (let j = 0; j < grid_Matrix[0].length; j++) {
    //      const VisualizeMazeBlock = document.getElementById(
    //       `${"cell" + grid_Matrix[i][j]}${grid_Matrix[i][j]}` )
    //     // VisualizeMazeBlock.className = "cell"
    //     console.log(VisualizeMazeBlock)
    //   }
    //  }
       
    return grid_Matrix;
  }

  // Add Obstacle in matrix
  obstacle(row, col, obstacle) {
    // validate
    if (row >= 0 && col >= 0 && row <= this.matrix.length && col <= this.matrix[0].length) {
      this.matrix[row][col] = obstacle;
    }
  }

  // 2D graph for traversing visualization
  graph(rows, cols) {
    for (let x = 0; x < rows; x++) {
      const tableRow = document.createElement("tr");
      for (let y = 0; y < cols; y++) {
        const tableCol = document.createElement("td");        

        tableCol.setAttribute("id", `${"cell" + x}${y}`);
        tableCol.setAttribute("border", "2px");
        tableCol.classList.add("cell");
        // let TextNode = document.createTextNode(`[${x}, ${y}]`);

        // tableCol.appendChild(TextNode);
        tableRow.appendChild(tableCol); 
      }
      tableRow.classList.add("cellRow")
      board.appendChild(tableRow);
    }    
  }
}
