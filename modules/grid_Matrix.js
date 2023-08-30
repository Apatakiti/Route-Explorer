// Matrix for Visitable(0) and Unvisitable/obstacle(1) node
export const Matrix = () => {
    const grid_Matrix = new Array(15).fill().map(() => new Array(30).fill(0));
    return grid_Matrix;
  }
