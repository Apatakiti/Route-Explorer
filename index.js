import { Recursive_Division } from "./modules/Mazes/Recursive_Division.js";
import { BFS } from "./modules/Algorithms/BFS.js";
import { DFS } from "./modules/Algorithms/DFS.js";
// import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
// import { Astar } from "./modules/Algorithms/A_star.js";
// import { Visualizer } from "./modules/visualizer.js";
import { getStartTargetNode } from "./modules/get_start_target_Node.js";
import { SimpleMaze } from "./modules/Mazes/simpleMaze.js";
import { Random_Start_TargetNode } from "./modules/set_Start_targetNode.js";
import { graph } from "./modules/graph.js";

Random_Start_TargetNode();
graph(15, 30);

document.getElementById("ST").addEventListener("click", () => {

//   const getBlocks =  document.querySelectorAll(".block")
//   getBlocks.forEach(clas => {
//     clas.classList.remove('block')
//   });

//   const getPath =  document.querySelectorAll(".shortestpath")
//   getPath.forEach(clas => {
//     clas.classList.remove('shortestpath')
//   });

  // const getStartNode =  document.querySelector(".startNode")
  // getStartNode.classList.remove('startNode')

  // const getTargetNode =  document.querySelector(".targetNode")
  // getTargetNode.classList.remove('targetNode')

//   const getCurrentNode =  document.querySelectorAll(".currentCell")
//   getCurrentNode.forEach(clas => {
//     clas.classList.remove('currentCell')
//   });

  setTimeout(() => {
    let STnodes = getStartTargetNode();

    // Maze selection
    const selectedMaze = document.getElementById("selectMaze");

    selectedMaze.addEventListener("change", () => {

      const clearBlocks = document.querySelectorAll(".block");
      clearBlocks.forEach((clas) => {
        clas.classList.remove("block");
      });

        const getPath =  document.querySelectorAll(".shortestpath")
        getPath.forEach(clas => {
            clas.classList.remove('shortestpath')
        });

      // switching Maze
      switch (selectedMaze.value) {

        //////////////////// for Basic Random maze //////////////////////////////
        case "Basic_Random":
          const simple_Maze = SimpleMaze();

        //   Algo selection for basic random
          const selectedAlgo1 = document.getElementById("Algorithm");
          selectedAlgo1.addEventListener("change", () => {

            // switching Algorithms per maze for  basic random maze
            switch (selectedAlgo1.value) {
              case "BFS":
                document.getElementById("selectedAlgo").addEventListener("click", () => {
                    simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                    simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                   new BFS().TraverseBFS(simple_Maze, STnodes.startN, STnodes.targetN)
                    });
                break;

              case "DFS":
                document.getElementById("selectedAlgo").addEventListener("click", () => {
                    simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                    simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                    new DFS().PathDFS(simple_Maze, STnodes.startN, STnodes.targetN);
                  });
                break;

              case "Dijsktra":
                console.log("you havent set dijsktra");
                break;

              case "A*":
                console.log("you havent set A star");
                break;
            }
          });
          break;

        ////////////////   for  Recursive Division  //////////////////////
        case "Recursive_Division":
          const RecursiveDivision = Recursive_Division();

           //   Algo selection for Recursive division
          const selectedAlgo2 = document.getElementById("Algorithm");
          selectedAlgo2.addEventListener("change", () => {

            //   switching Algorithms per maze for  recursive division maze
            switch (selectedAlgo2.value) {
              case "BFS":
                document.getElementById("selectedAlgo").addEventListener("click", () => {
                    new BFS().TraverseBFS(RecursiveDivision, STnodes.startN, STnodes.targetN);
                    });
                    console.log(" you have set BSF");
                break;

              case "DFS":
                document.getElementById("selectedAlgo").addEventListener("click", () => {
                  RecursiveDivision[STnodes.startN[0]][STnodes.startN[1]] = 0;
                  RecursiveDivision[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                  new DFS().PathDFS(RecursiveDivision, STnodes.startN, STnodes.targetN);
                  });
                break;

              case "Dijsktra":
                console.log("you havent set dijsktra");
                break;

              case "A*":
                console.log("you havent set A star");
                break;
            }
          });

          break;
      }
    });
  }, 100);
});

 const visualizeBtn = document.getElementById('selectedAlgo')
 const selectedAlgo = document.getElementById('Algorithm')
   
 selectedAlgo.addEventListener('change', () => {
      switch (selectedAlgo.value) {
                case "BFS":
                    visualizeBtn.textContent =  `Visualize ${selectedAlgo.value}`
                  break;
                case "DFS":
                    visualizeBtn.textContent = `Visualize ${selectedAlgo.value}`
                  break;
                case "Dijsktra":
                    visualizeBtn.textContent = `Visualize ${selectedAlgo.value}`
                  break;
                case "A*":
                    visualizeBtn.textContent = `Visualize ${selectedAlgo.value}`
                  break;
              }
 })

document.getElementById('clearBoard').addEventListener('click', () => {

  const getBlocks =  document.querySelectorAll(".block")
  getBlocks.forEach(clas => {
    clas.classList.remove('block')
  });

  const getPath =  document.querySelectorAll(".shortestpath")
  getPath.forEach(clas => {
    clas.classList.remove('shortestpath')
  });

  // const getStartNode =  document.querySelector(".startNode")
  // getStartNode.classList.remove('startNode')

  // const getTargetNode =  document.querySelector(".targetNode")
  // getTargetNode.classList.remove('targetNode')

  const getCurrentNode =  document.querySelectorAll(".currentCell")
  getCurrentNode.forEach(clas => {
    clas.classList.remove('currentCell')
  });

})
