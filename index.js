import { BFS } from "./modules/Algorithms/BFS.js";
import { DFS } from "./modules/Algorithms/DFS.js";
import { Visualizer } from "./modules/visualizer.js";
import { Grid_adjMatrix } from "./modules/Grid-graph.js";
import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
import { A_star } from "./modules/Algorithms/A_star.js"; 

class Route_explorer {

  start_target_Nodes() {
    const startNode = [0, 0];
    const targetNode = [5, 7];
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

    const grid = new Grid_adjMatrix(4, 4);
    const Matrix = grid.matrix;
    grid.obstacle(3, 0, 1); 

    const RunDFS = new DFS();
    const Visualize = new Visualizer();

    RunDFS.shortestPathDFS(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }

  Search_with_Dijsktra() {
    const [start, target] = this.start_target_Nodes()

    const grid = new Grid_adjMatrix(11, 11);
    const Matrix = grid.matrix;
    grid.obstacle(10, 1, Infinity); 

    const Visualize = new Visualizer();

    dijkstra(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }

  Search_with_Astar() {
    const [start, target] = this.start_target_Nodes()

    const grid = new Grid_adjMatrix(11, 11);
    const Matrix = grid.matrix;
    grid.obstacle(5, 0, 1); 

    const run_Astar = new A_star()
    const Visualize = new Visualizer();

    run_Astar.aStar(Matrix, start, target)
    Visualize.startNandTargetN(start, target);
  }

}

new Route_explorer().Search_with_Astar()
