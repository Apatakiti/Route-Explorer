let board = document.getElementById("board");

visualizer = (row, col) => {
   const visualizeCurrentNode = document.getElementById(`${'cell' + row}${col}`)
   visualizeCurrentNode.className = 'currentCell'
}

const graph_adjMatrix = [];

// filling the graph with nested array of zeros(0)
// with 10 by 10 row/col
for (let index = 0; index < 10; index++) {
  graph_adjMatrix[index] = new Array(10).fill(0);
}

// create Edge
function addEdge(row_x, col_y) {
  graph_adjMatrix[row_x][col_y] = 1;
  graph_adjMatrix[col_y][row_x] = 1;
}

CreateGrid = () => {
  for (let row = 0; row < graph_adjMatrix.length; row++) {
    let tableRow = document.createElement("tr");

    for (let col = 0; col < graph_adjMatrix.length; col++) {
      let tableCol = document.createElement("td");
      tableCol.setAttribute("id", `${ 'cell' + row}${col}`);
      tableCol.setAttribute("border", "2px");
      tableCol.classList.add("cell");
      let TextNode = document.createTextNode(`[${row}, ${col}]`);

      tableCol.appendChild(TextNode);
      tableRow.appendChild(tableCol);

      addEdge(row, col);
    }
    board.appendChild(tableRow);
  }
};

CreateGrid();

const startNode = 0;

function bfs(graph, startNode) {
  const queue = [startNode];
  const visited = new Array(graph.length).fill(false);
  console.log(visited)

  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    // console.log(currentNode); 

    // looping through the next promising Node
    for (let i = 0; i < graph[currentNode].length; i++) {
      if (graph[currentNode][i] === 1 && !visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}

bfs(graph_adjMatrix, startNode);

