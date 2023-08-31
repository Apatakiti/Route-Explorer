// Matrix for Visitable(0) and Unvisitable/obstacle(1) node
export const row_col = () => {
  const rows = 13;
  const cols = 26;
  return [rows, cols]
}

const [rols, cols] = row_col()

export const Matrix = () => {
    const grid_Matrix = new Array(rols).fill().map(() => new Array(cols).fill(0));
    grid_Matrix[0][0] = 1
    return grid_Matrix;
  }
