export const Random_Start_TargetNode = (row, col) => { 

  // Random StartNode falling on the left side of the grid
  const RandomStartCol = Math.floor(col / 2 - (Math.random() * col) / 2);
  const RandomStartRow = Math.floor(Math.random() * row);

  // Random TargetNode falling on the Right side of the grid
  const RandomTargetCol = Math.floor(col / 2 + (Math.random() * col) / 2);
  const RandomTargetRow = Math.floor(Math.random() * row);

  return {
      startNode: [RandomStartRow, RandomStartCol],
      targetNode: [RandomTargetRow, RandomTargetCol]
  }
};
