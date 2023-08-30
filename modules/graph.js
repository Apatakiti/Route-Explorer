let board = document.getElementById("board");

// 2D graph for traversing visualization
export const graph = (rows, cols) => {
  for (let x = 0; x < rows; x++) {
    const tableRow = document.createElement("tr");
    for (let y = 0; y < cols; y++) {
      const tableCol = document.createElement("td");

      tableCol.setAttribute("id", `cell${x}${y}`);
      tableCol.setAttribute("border", "2px");
      tableCol.classList.add("cell", `cell_${x}_${y}_`);
      // let TextNode = document.createTextNode(`[${x}, ${y}]`);

      // tableCol.appendChild(TextNode);
      tableRow.appendChild(tableCol);
    }
    tableRow.classList.add("cellRow");
    board.appendChild(tableRow);
  }
};
