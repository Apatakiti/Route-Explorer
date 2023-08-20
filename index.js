import { BFS } from "./modules/Algorithms/BFS.js";
import { DFS } from "./modules/Algorithms/DFS.js";
import { Visualizer } from "./modules/visualizer.js";
import { Grid_adjMatrix } from "./modules/Grid-graph.js";

class Route_explorer {

  start_target_Nodes() {
    const startNode = [2, 2];
    const targetNode = [4, 6];
    const start_target_coords = [startNode, targetNode];
    return start_target_coords;
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

    const RunDFS = new DFS();
    const Visualize = new Visualizer();

    const grid = new Grid_adjMatrix(11, 11);
    const Matrix = grid.matrix;
    grid.obstacle(3, 3, 0);

    const tableRow = Matrix.length;
    const tableCol = Matrix[0].length;
    const visited = new Array(tableRow)
      .fill(0)
      .map(() => new Array(tableCol).fill(false));

    RunDFS.dfsTraversing( Matrix, start[0], start[1], target, visited );
    Visualize.startNandTargetN(start, target);
  }
}

new Route_explorer().Search_with_DFS();
