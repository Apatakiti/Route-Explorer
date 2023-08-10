let board = document.getElementById("board");

visualizer = ([row, col]) => {
  const visualizeCurrentNode = document.getElementById(`${"cell" + row}${col}`);
  visualizeCurrentNode.className = "currentCell";
};

function Delay() {
  return new Promise((res) => setTimeout(res, 100));
}

const graph_adjMatrix = [];

// Two dimensional graph (20 by 20)
for (let index = 0; index < 11; index++) {
  graph_adjMatrix[index] = new Array(11).fill(0);
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

// Not to go beyod the grid Range (- range)
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

async function BFS_2D_ShortestPath(graph, start_Coord_Node, target_Coord_Node) {
  const graph_Row = graph.length;
  const graph_Col = graph[0].length;

  const visited = new Array(graph_Row).fill().map(() => new Array(graph_Col).fill(false));

  // x and y direction coordinate (right, left, up, down)
  const directions = [
    [1, 0],  // down
    [-1, 0], // up
    [0, 1],  // right
    [0, -1], // left
  ];

  for (let startRow = start_Coord_Node[0]; startRow < graph_Row; startRow++) {
    for (let startCol = start_Coord_Node[1]; startCol < graph_Col; startCol++) {

      if (!visited[startRow][startCol]) {
        visited[startRow][startCol] = true;
        const queue = [[startRow, startCol]];

        while (queue.length) {
          await Delay();
          const [currentRow, currentCol] = queue.shift();
          visualizer([currentRow, currentCol]);

          // Terminatine further node visiting on getting to the target node
          if (currentRow === target_Coord_Node[0] && currentCol === target_Coord_Node[1]) {
              return true
          }

          for (const [directrow, directcol] of directions) {
            const nextRow = currentRow + directrow;
            const nextCol = currentCol + directcol;
            if (validate_cell(nextRow, nextCol, graph_Row, graph_Col) && !visited[nextRow][nextCol]) {
              visited[nextRow][nextCol] = true;
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }
}

let startN = [3, 3]
let targetN = [5, 5]

BFS_2D_ShortestPath(graph_adjMatrix, startN, targetN);
