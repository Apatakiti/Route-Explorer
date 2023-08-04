let board = document.getElementById("board");

visualizer = ([row, col]) => {
  const visualizeCurrentNode = document.getElementById(`${"cell" + row}${col}`);
  visualizeCurrentNode.className = "currentCell";
};

const graph_adjMatrix = [];

// Two dimensional graph (20 by 20)
for (let index = 0; index < 20; index++) {
  graph_adjMatrix[index] = new Array(20).fill(0);
}

CreateGrid = () => {
  for (let row = 0; row < graph_adjMatrix.length; row++) {
    let tableRow = document.createElement("tr");

    for (let col = 0; col < graph_adjMatrix.length; col++) {
      let tableCol = document.createElement("td");
      tableCol.setAttribute("id", `${"cell" + row}${col}`);
      tableCol.setAttribute("border", "2px");
      tableCol.classList.add("cell");
      let TextNode = document.createTextNode(`[${row}, ${col}]`);

      tableCol.appendChild(TextNode);
      tableRow.appendChild(tableCol);
    }

    board.appendChild(tableRow);
  }
};

CreateGrid();

function validate_cell(
  nextVisitingRowNode,
  nextVisitingColNode,
  graphrow,
  graphcol
) {
  return (
    0 <= nextVisitingRowNode &&
    nextVisitingRowNode < graphrow &&
    0 <= nextVisitingColNode &&
    nextVisitingColNode < graphcol
  );
}

function BFS_twoDimensionalGraph(graph) {
  const graph_Row = graph.length;
  const graph_Col = graph[0].length;

  const visited = new Array(graph_Row)
    .fill()
    .map(() => new Array(graph_Col).fill(false));

  // x and y direction coordinate (right, left, up, down)
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let startRow = 0; startRow < graph_Row; startRow++) {
    for (let startCol = 0; startCol < graph_Col; startCol++) {
      // if the coordinateStartNode is not visited
      if (!visited[startRow][startCol]) {
        // assigning startCoordinateNode to be true
        visited[startRow][startCol] = true;

        // initiating the queue Nested Array
        const queue = [[startRow, startCol]];

        while (queue.length) {
          // offLoad currentCoordinateNode from queue
          const [currentRow, currentCol] = queue.shift();

          // looping through each surrounding Node
          for (const [directrow, directcol] of directions) {
            // Redirecting into a single rol and col coordinate
            const nextRow = currentRow + directrow;
            const nextCol = currentCol + directcol;

            if (
              validate_cell(nextRow, nextCol, graph_Row, graph_Col) &&
              !visited[nextRow][nextCol]
            ) {
              visited[nextRow][nextCol] = true;
              queue.push([nextRow, nextCol]);
              visualizer([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }
}

BFS_twoDimensionalGraph(graph_adjMatrix);
