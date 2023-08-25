import { BFS } from "./modules/Algorithms/BFS.js";
import { DFS } from "./modules/Algorithms/DFS.js";
import { Visualizer } from "./modules/visualizer.js";
import { Grid_adjMatrix } from "./modules/Grid-graph.js";
import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
import { Astar }  from "./modules/Algorithms/A_star.js"
import { Random_Start_TargetNode } from "./modules/Start-targetNode.js";

export class Route_explorer {

  start_target_Nodes() {
   const [rows, cols] = this.total_Rows_Cols() 
 
   const start_target_node = Random_Start_TargetNode(rows, cols)

   // console.log(startNode, targetNode)
   const start_target_coords = [
      start_target_node.startNode, 
      start_target_node.targetNode
    ];

    return start_target_coords;
  }

  total_Rows_Cols() {
    const rows = 11
    const cols = 11

    return [rows, cols]
  }

  Search_with_BFS() {
    const [start, target] = this.start_target_Nodes()

    const RunBFS = new BFS();
    const Visualize = new Visualizer();
    RunBFS.TraverseBFS(start, target);
    Visualize.startNandTargetN(start, target);
  };

  Search_with_DFS() {
    const [start, target] = this.start_target_Nodes()
    const [row, col] = this.total_Rows_Cols()

    const grid = new Grid_adjMatrix(row, col);
    const Matrix = grid.matrix;
    grid.obstacle(10, 0, 1); 

    const RunDFS = new DFS();
    const Visualize = new Visualizer();

    RunDFS.PathDFS(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }

  // locally optimistic Approach
  Search_with_Dijsktra() {
    const [start, target] = this.start_target_Nodes()
    const [row, col] = this.total_Rows_Cols()

    const grid = new Grid_adjMatrix(row, col);
    const Matrix = grid.matrix;
    grid.obstacle(4, 1, Infinity);

    const Visualize = new Visualizer();

    dijkstra(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }

  // Optimistic approach ( weighted ) 
  Search_with_Astar() {
    const [start, target] = this.start_target_Nodes()
    const [row, col] = this.total_Rows_Cols()

    const grid = new Grid_adjMatrix(row, col);
    const Matrix = grid.matrix;
    grid.obstacle(4, 0, Infinity); 

    const run_Astar = new Astar()
    const Visualize = new Visualizer();

    run_Astar.aStar(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }  

}

new Route_explorer().Search_with_Dijsktra()
