   import { Visualizer } from "../visualizer.js";
   import { Grid_adjMatrix } from "../Grid-graph.js";
   import { start_target } from "../Start-targetNode.js";

   const grid = new Grid_adjMatrix()

   const SimpleMaze = () => {

//  (Lower Tendency there will be a path)
//  2D array Matrix to Insert Maze 
    const Maze_Matrix = [];

    for (let i = 0; i < grid.matrix.length; i++) {
      const rows = [];
      for (let j = 0; j < grid.matrix[0].length; j++) {

        // Generating random 0 or 1
        const cellValue = Math.random() < 0.5   ? 0 : 1;
        rows.push(cellValue);
      }
      Maze_Matrix.push(rows);
    }


    Maze_Matrix[start_target.startNode[0]][start_target.startNode[1]] = 0;
    Maze_Matrix[start_target.targetNode[0]][start_target.targetNode[1]] = 0;

    for (let i = 0; i < Maze_Matrix.length; i++) {
      for (let j = 0; j < Maze_Matrix[0].length; j++) {
      }
    }

    return {   
        startN: start_target.startNode,
        targetN: start_target.targetNode,
        Matrix: Maze_Matrix
    };
}

 export const Simple_Maze = SimpleMaze()