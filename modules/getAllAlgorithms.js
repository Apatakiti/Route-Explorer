// import { BFS } from "./modules/Algorithms/BFS.js";
// import { DFS } from "./Algorithms/DFS.js";
// import { Visualizer } from "./visualizer.js";
// import { Grid_adjMatrix } from "./Grid-graph.js";
// import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
// import { Astar }  from "./modules/Algorithms/A_star.js"
// import { start_target_Nodes } from "./modules/Start-targetNode.js";
// import { Mazed_Matrix } from "./Mazes/Recursive_Division.js";
// import { row_col } from "./Start-targetNode.js";

class Route_explorer {

//   start_Target_Visualizing() {
//     const Visualize = new Visualizer();
//     Visualize.startNandTargetN(start_target().startNode, start_target().targetNode);
//   }

  Search_with_BFS() {
    // const [start, target] = this.start_target_Nodes()

    // const RunBFS = new BFS();
    // const Visualize = new Visualizer();
    // RunBFS.TraverseBFS(start, target);
    // Visualize.startNandTargetN(start, target);
  };

  Search_with_DFS() {
    // const [start, target] = start_target
    // const [row, col] = row_col

    // const grid = new Grid_adjMatrix();

    // console.log(grid.matrix);
    // grid.graph(row_col[0], row_col[1]);
    // // const Matrix = grid.matrix;
    // // grid.obstacle(5, 5, 1);

    // // console.time()
    // const Maze_Matrix = Mazed_Matrix()

    // const RunDFS = new DFS();
    // const Visualize = new Visualizer();

    // RunDFS.PathDFS(Maze_Matrix.Matrix, Maze_Matrix.startN, Maze_Matrix.targetN)
    // Visualize.startNandTargetN(Maze_Matrix.startN, Maze_Matrix.targetN);
    // console.timeEnd()
    // console.log(performance.memory.usedJSHeapSize / (1024 * 1024) )
  }

  // locally optimistic Approach
  Search_with_Dijsktra() {
    // const [start, target] = this.start_target_Nodes()
    // const [row, col] = total_Rows_Cols()
    // const grid = new Grid_adjMatrix(row, col);
    // const Matrix = grid.matrix;
    // grid.obstacle(4, 1, Infinity);
    // const Visualize = new Visualizer();
    // dijkstra(Matrix, start, target)
    // Visualize.startNandTargetN(start, target);
    // const Maze_Matrix = Mazed_Matrix()
    // dijkstra(Maze_Matrix.Matrix, Maze_Matrix.startN, Maze_Matrix.targetN)
    // Visualize.startNandTargetN(Maze_Matrix.startN, Maze_Matrix.targetN);
  }

  // Optimistic approach ( weighted )
//   Search_with_Astar() {
//     const [start, target] = this.start_target_Nodes()
//     const [row, col] = total_Rows_Cols()
//     const grid = new Grid_adjMatrix(row, col);
//     const Matrix = grid.matrix;
//     grid.obstacle(4, 0, Infinity);
//     const run_Astar = new Astar()
//     const Visualize = new Visualizer();
//     run_Astar.aStar(Matrix, start, target)
//     Visualize.startNandTargetN(start, target);
//     const Maze_Matrix = Mazed_Matrix()
//     run_Astar.aStar(Maze_Matrix.Matrix, Maze_Matrix.startN, Maze_Matrix.targetN)
//     Visualize.startNandTargetN(Maze_Matrix.startN, Maze_Matrix.targetN);
//   }
}

//   const app = new Route_explorer()




