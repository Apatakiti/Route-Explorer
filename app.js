let board = document.getElementById("board");

CreateGrid = () => {
  let rowArray = [4, 6, 8, 10, 12];
  let colArray = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

  for (let row = 0; row < rowArray.length; row++) {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", `'${row}'`);

    for (let col = 0; col < colArray.length; col++) {
      let tableCol = document.createElement("td");
      tableCol.setAttribute("id", `'${col}'`);
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
