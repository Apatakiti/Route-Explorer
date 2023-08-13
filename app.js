let board = document.getElementById("board");

visualizeVisiting = ([row, col]) => {
  const visualizeCurrentNode = document.getElementById(`${"cell" + row}${col}`);
  visualizeCurrentNode.className = "currentCell";
};

visualizeShortestPath = ([row, col]) => {
  const visualizeCurrentNode = document.getElementById(`${"cell" + row}${col}`);
  visualizeCurrentNode.className = "shortestpath";
};

visualizeStartNandTargetN = (startN, targetN) => {
  const visualizeStartNode = document.getElementById(
    `${"cell" + startN[0]}${startN[1]}`
  );
  visualizeStartNode.className = "startNode";

  const visualizeTargetNode = document.getElementById(
    `${"cell" + targetN[0]}${targetN[1]}`
  );
  visualizeTargetNode.className = "targetNode";
};

function Delay() {
  return new Promise((res) => setTimeout(res, 100));
}

const grid_adjMatrix = [];

// Create Grid (11 by 11)
for (let index = 0; index < 11; index++) {
  grid_adjMatrix[index] = new Array(11).fill(0);
}

// Add an obstacle in the Grid to prevent infinite loop
grid_adjMatrix[4][4] = 1;
grid_adjMatrix[5][4] = 1;
grid_adjMatrix[7][3] = 1;
grid_adjMatrix[2][4] = 1;
grid_adjMatrix[3][4] = 1;
grid_adjMatrix[3][1] = 1;
grid_adjMatrix[8][4] = 1;
grid_adjMatrix[0][4] = 1;
grid_adjMatrix[1][4] = 1;
grid_adjMatrix[6][0] = 1;
grid_adjMatrix[6][2] = 1;

// 2D graph for traversing visualization
CreateGraph = () => {
  for (let row = 0; row < grid_adjMatrix.length; row++) {
    let tableRow = document.createElement("tr");

    for (let col = 0; col < grid_adjMatrix.length; col++) {
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

CreateGraph();

const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const Validate_Cell = (
  nextRowNode,
  nextColNode,
  graphRowLength,
  graphColLength
) => {
  return (
    nextRowNode >= 0 &&
    nextColNode >= 0 &&
    graphRowLength > nextRowNode &&
    graphColLength > nextColNode
  );
};

async function BFS_2D_trackShortestPath(grid, startN, targetN) {
  const graph_Row = grid.length;
  const graph_Col = grid[0].length;

  const queue = [
    {
      currentRowNode: startN[0],
      currentColNode: startN[1],
      trackPath: [[startN[0], startN[1]]],
    },
  ];
  const visited = new Set();

  while (queue.length) {
    const { currentRowNode, currentColNode, trackPath } = queue.shift();

    visited.add(`${currentRowNode},${currentColNode}`);
    await Delay();
    visualizeVisiting([currentRowNode, currentColNode]);

    if (currentRowNode === targetN[0] && currentColNode === targetN[1]) {
      for (const [currentRow, currentCol] of trackPath) {
        await Delay();
        visualizeShortestPath([currentRow, currentCol]);
        visualizeStartNandTargetN(startN, targetN);
      }
      return; // stop on finding path
    }

    for (const [directRow, directCol] of direction) {
      let nextRow = currentRowNode + directRow;
      let nextCol = currentColNode + directCol;
      if (
        Validate_Cell(nextRow, nextCol, graph_Row, graph_Col) &&
        grid[nextRow][nextCol] === 0 &&
        !visited.has(`${nextRow},${nextCol}`)
      ) {
        queue.push({
          currentRowNode: nextRow,
          currentColNode: nextCol,
          trackPath: [...trackPath, [nextRow, nextCol]],
        });
      }
    }
  }
  return; // No path found
}

const startNode = [2, 1];
const targetNode = [6, 5];

visualizeStartNandTargetN(startNode, targetNode);
BFS_2D_trackShortestPath(grid_adjMatrix, startNode, targetNode);
