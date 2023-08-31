import { Matrix } from "../grid_Matrix.js";
//  async
export const  SimpleMaze = () => {
  const clearBlocks = document.querySelectorAll(".block")
  clearBlocks.forEach(clas => {
      clas.classList.remove('block')
  });

  //  2D array Matrix to Insert Maze
  const defaultMatrix = Matrix();
  
  for (let i = defaultMatrix.length - 1;  i >= 0 ;  i--) {
    for (let  j = defaultMatrix[0].length - 1; j >= 0; j--) {
      // Generating random 0 or 1
      defaultMatrix[i][j] = Math.random() < 0.75 ? 0 : 1;
      
        if (defaultMatrix[i][j] === 1) {
            // await new Promise((res) => setTimeout(res, 10))
            document.getElementById(`cell${i}${j}`).classList.add('block')
      }
    }
  }
  
  return  defaultMatrix;
};
