import { BSF} from "./modules/Algorithms/BSF.js";
// import { DFS } from "./modules/Algorithms/DFS,js";
import { Visualizer } from "./modules/visualizer.js";


class Route_explorer {
  Search_with_BSF() {
    const startNode = [2, 2];
    const targetNode = [4, 6];
    const RunBSF = new BSF();
    const Visualize = new Visualizer()
    RunBSF.TraverseBSF(startNode, targetNode);
    Visualize.startNandTargetN(startNode, targetNode)
  }

  // Search_with_DFS() {
  //   const startNode = [2, 2];
  //   const targetNode = [4, 6];
  //   const RunDFS = new DFS();
  //   const Visualize = new Visualizer()
  //   // RunDFS.dfs(startNode, targetNode);
  //   RunDFS.dfs
  //   Visualize.startNandTargetN(startNode, targetNode)
  // }
}

new Route_explorer().Search_with_BSF()




