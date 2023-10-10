import { BFS } from "./modules/Algorithms/BFS.js";
import { DFS } from "./modules/Algorithms/DFS.js";
import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
import { Astar } from "./modules/Algorithms/A_star.js";
import { getStartTargetNode } from "./modules/get_start_target_Node.js";
import { SimpleMaze } from "./modules/Mazes/simpleMaze.js";
import { Recursive_Division } from "./modules/Mazes/Recursive_Division.js";
import { Matrix } from "./modules/grid_Matrix.js";
import { Random_Start_TargetNode } from "./modules/set_Start_targetNode.js";
import { graph } from "./modules/graph.js";
import { row_col } from "./modules/grid_Matrix.js";
import { cleanBoard } from "./modules/cleanBoard.js";
import { cleanPath } from "./modules/cleanBoard.js";

const [rols, cols] = row_col();

Random_Start_TargetNode();
graph(rols, cols);

// initial button before selection
let PickAlgo = document.createElement("button");
PickAlgo.classList.add("VSBTN");
PickAlgo.innerText = "Pick an algorithm";

let VisualizingBtn = document.getElementById("visualizingBtn");
VisualizingBtn.appendChild(PickAlgo);

// initial Text
let Notes = document.getElementById("Notes");
Notes.innerText =
  "Generate a Start & Target Node and Select an Algorithm to Visualize!";

let STnodes;

document.getElementById("ST").addEventListener("click", () => {
  setTimeout(() => {
    cleanBoard();
    STnodes = getStartTargetNode();

    // Maze selection
    const selectedMaze = document.getElementById("selectMaze");

    selectedMaze.addEventListener("change", () => {
      cleanBoard();

      // switching Maze
      if (selectedMaze.value === "Basic_Random") {
        // Basic Random maze
        cleanBoard();
        const simple_Maze = SimpleMaze();

        //  Algo selection for basic random
        const selectedAlgo1 = document.getElementById("Algorithm");
        selectedAlgo1.addEventListener("change", () => {
          // switching Algorithms per maze for basic random maze
          switch (selectedAlgo1.value) {
            case "BFS":
              cleanPath();
              let NotesBFS = document.getElementById("Notes");
              NotesBFS.innerText =
                "Breadth-first search (BFS) traverse graph and find the shortest path in unweighted graph";

              let RMBTNB1 = document.querySelectorAll(".VSBTN");
              if (RMBTNB1) {
                RMBTNB1.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnB1 = document.createElement("button");
              VbtnB1.classList.add("VSBTN");
              VbtnB1.innerText = "Visualize BFS";
              let VisualizingBtnB1 = document.getElementById("visualizingBtn");
              VisualizingBtnB1.appendChild(VbtnB1);
              VbtnB1.addEventListener("click", () => {
                simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new BFS().TraverseBFS(
                  simple_Maze,
                  STnodes.startN,
                  STnodes.targetN
                );
              });
              break;

            case "DFS":
              cleanPath();
              let NotesDFS = document.getElementById("Notes");
              NotesDFS.innerText =
                "Depth-first search (DFS) traverse graph along one branch before backtracking in unweighted graph";

              let RMBTNDF1 = document.querySelectorAll(".VSBTN");
              if (RMBTNDF1) {
                RMBTNDF1.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnDF1 = document.createElement("button");
              VbtnDF1.classList.add("VSBTN");
              VbtnDF1.innerText = "Visualize DFS";
              let VisualizingBtnDF1 = document.getElementById("visualizingBtn");
              VisualizingBtnDF1.appendChild(VbtnDF1);
              VbtnDF1.addEventListener("click", () => {
                simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new DFS().PathDFS(simple_Maze, STnodes.startN, STnodes.targetN);
              });
              break;

            case "Dijsktra":
              cleanPath();

              let NotesDij = document.getElementById("Notes");
              NotesDij.innerText =
                "Dijkstra's algorithm traverse graph to find the shortest path in a non-negative edge weighted graph";

              let RMBTND1 = document.querySelectorAll(".VSBTN");
              if (RMBTND1) {
                RMBTND1.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnD1 = document.createElement("button");
              VbtnD1.classList.add("VSBTN");
              VbtnD1.innerText = "Visualize Dijsktra";
              let VisualizingBtnD1 = document.getElementById("visualizingBtn");
              VisualizingBtnD1.appendChild(VbtnD1);
              VbtnD1.addEventListener("click", () => {
                for (let i = 0; i < simple_Maze.length; i++) {
                  for (let j = 0; j < simple_Maze[0].length; j++) {
                    if (simple_Maze[i][j] === 1) {
                      simple_Maze[i][j] = Infinity;
                    }
                  }
                }
                simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                dijkstra(simple_Maze, STnodes.startN, STnodes.targetN);
              });
              break;

            case "A*":
              cleanPath();

              let NotesA = document.getElementById("Notes");
              NotesA.innerText =
                "A* combines the principles of Dijkstra's algorithm with heuristics to find the shortest path in a weighted graph";

              let RMBTN1 = document.querySelectorAll(".VSBTN");
              if (RMBTN1) {
                RMBTN1.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnA1 = document.createElement("button");
              VbtnA1.classList.add("VSBTN");
              VbtnA1.innerText = "Visualize A*";
              let VisualizingBtnA1 = document.getElementById("visualizingBtn");
              VisualizingBtnA1.appendChild(VbtnA1);
              VbtnA1.addEventListener("click", () => {
                for (let i = 0; i < simple_Maze.length; i++) {
                  for (let j = 0; j < simple_Maze[0].length; j++) {
                    if (simple_Maze[i][j] === 1) {
                      simple_Maze[i][j] = Infinity;
                    }
                  }
                }
                simple_Maze[STnodes.startN[0]][STnodes.startN[1]] = 0;
                simple_Maze[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new Astar().aStar(simple_Maze, STnodes.startN, STnodes.targetN);
              });
              break;
          }
        });
      } else if (selectedMaze.value === "Recursive_Division") {
        // Recursive Division
        cleanBoard();
        const RecursiveDivision = Recursive_Division();

        //   Algo selection for Recursive division
        const selectedAlgo2 = document.getElementById("Algorithm");
        selectedAlgo2.addEventListener("change", () => {
          //   switching Algorithms per maze for  recursive division maze
          switch (selectedAlgo2.value) {
            case "BFS":
              cleanPath();

              let NotesBFS2 = document.getElementById("Notes");
              NotesBFS2.innerText =
                "Breadth-first search (BFS) traverse graph and find the shortest path in unweighted graph";

              let RMBTNB = document.querySelectorAll(".VSBTN");
              if (RMBTNB) {
                RMBTNB.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnB = document.createElement("button");
              VbtnB.classList.add("VSBTN");
              VbtnB.innerText = "Visualize BFS";
              let VisualizingBtnB = document.getElementById("visualizingBtn");
              VisualizingBtnB.appendChild(VbtnB);
              VbtnB.addEventListener("click", () => {
                RecursiveDivision[STnodes.startN[0]][STnodes.startN[1]] = 0;
                RecursiveDivision[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new BFS().TraverseBFS(
                  RecursiveDivision,
                  STnodes.startN,
                  STnodes.targetN
                );
              });
              break;

            case "DFS":
              cleanPath();

              let NotesDFS2 = document.getElementById("Notes");
              NotesDFS2.innerText =
                "Depth-first search (DFS) traverse graph along one branch before backtracking in unweighted graph";

              let RMBTNDF = document.querySelectorAll(".VSBTN");
              if (RMBTNDF) {
                RMBTNDF.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnDF = document.createElement("button");
              VbtnDF.classList.add("VSBTN");
              VbtnDF.innerText = "Visualize DFS";
              let VisualizingBtnDF = document.getElementById("visualizingBtn");
              VisualizingBtnDF.appendChild(VbtnDF);
              VbtnDF.addEventListener("click", () => {
                RecursiveDivision[STnodes.startN[0]][STnodes.startN[1]] = 0;
                RecursiveDivision[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new DFS().PathDFS(
                  RecursiveDivision,
                  STnodes.startN,
                  STnodes.targetN
                );
              });
              break;

            case "Dijsktra":
              cleanPath();

              let NotesDij2 = document.getElementById("Notes");
              NotesDij2.innerText =
                "Dijkstra's algorithm traverse graph to find the shortest path in a non-negative edge weighted graph";

              let RMBTND = document.querySelectorAll(".VSBTN");
              if (RMBTND) {
                RMBTND.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnD = document.createElement("button");
              VbtnD.classList.add("VSBTN");
              VbtnD.innerText = "Visualize Dijsktra";
              let VisualizingBtnD = document.getElementById("visualizingBtn");
              VisualizingBtnD.appendChild(VbtnD);
              VbtnD.addEventListener("click", () => {
                for (let i = 0; i < RecursiveDivision.length; i++) {
                  for (let j = 0; j < RecursiveDivision[0].length; j++) {
                    if (RecursiveDivision[i][j] === 1) {
                      RecursiveDivision[i][j] = Infinity;
                    }
                  }
                }
                RecursiveDivision[STnodes.startN[0]][STnodes.startN[1]] = 0;
                RecursiveDivision[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                dijkstra(RecursiveDivision, STnodes.startN, STnodes.targetN);
              });
              break;

            case "A*":
              cleanPath();

              let NotesA2 = document.getElementById("Notes");
              NotesA2.innerText =
                "A* combines the principles of Dijkstra's algorithm with heuristics to find the shortest path in a weighted graph";

              let RMBTNA = document.querySelectorAll(".VSBTN");
              if (RMBTNA) {
                RMBTNA.forEach((ele) => {
                  ele.parentNode.removeChild(ele);
                });
              }
              let VbtnA = document.createElement("button");
              VbtnA.classList.add("VSBTN");
              VbtnA.innerText = "Visualize A*";
              let VisualizingBtnA = document.getElementById("visualizingBtn");
              VisualizingBtnA.appendChild(VbtnA);
              VbtnA.addEventListener("click", () => {
                for (let i = 0; i < RecursiveDivision.length; i++) {
                  for (let j = 0; j < RecursiveDivision[0].length; j++) {
                    if (RecursiveDivision[i][j] === 1) {
                      RecursiveDivision[i][j] = Infinity;
                    }
                  }
                }
                RecursiveDivision[STnodes.startN[0]][STnodes.startN[1]] = 0;
                RecursiveDivision[STnodes.targetN[0]][STnodes.targetN[1]] = 0;
                new Astar().aStar(
                  RecursiveDivision,
                  STnodes.startN,
                  STnodes.targetN
                );
              });
              break;
          }
        });
      }
    });

    cleanBoard();
    // Algo selection for Recursive division
    const selectedAlgo2 = document.getElementById("Algorithm");
    selectedAlgo2.addEventListener("change", () => {
      // switching Algorithms per maze for  recursive division maze
      switch (selectedAlgo2.value) {
        case "BFS":
          cleanPath();

          let Notes_BFS = document.getElementById("Notes");
          Notes_BFS.innerText =
            "Breadth-first search (BFS) traverse graph and find the shortest path in unweighted graph";

          let RMBTNBdft = document.querySelectorAll(".VSBTN");
          if (RMBTNBdft) {
            RMBTNBdft.forEach((ele) => {
              ele.parentNode.removeChild(ele);
            });
          }
          let VbtnBdft = document.createElement("button");
          VbtnBdft.classList.add("VSBTN");
          VbtnBdft.innerText = "Visualize BFS";
          let VisualizingBtnBdft = document.getElementById("visualizingBtn");
          VisualizingBtnBdft.appendChild(VbtnBdft);
          VbtnBdft.addEventListener("click", () => {
            new BFS().TraverseBFS(Matrix(), STnodes.startN, STnodes.targetN);
          });
          break;

        case "DFS":
          cleanPath();

          let Notes_DFS = document.getElementById("Notes");
          Notes_DFS.innerText =
            "Depth-first search (DFS) traverse graph along one branch before backtracking in unweighted graph";

          let RMBTNDFdft = document.querySelectorAll(".VSBTN");
          if (RMBTNDFdft) {
            RMBTNDFdft.forEach((ele) => {
              ele.parentNode.removeChild(ele);
            });
          }
          let VbtnDFdft = document.createElement("button");
          VbtnDFdft.classList.add("VSBTN");
          VbtnDFdft.innerText = "Visualize DFS";
          let VisualizingBtnDFdft = document.getElementById("visualizingBtn");
          VisualizingBtnDFdft.appendChild(VbtnDFdft);
          VbtnDFdft.addEventListener("click", () => {
            new DFS().PathDFS(Matrix(), STnodes.startN, STnodes.targetN);
          });
          break;

        case "Dijsktra":
          cleanPath();

          let Notes_Dij = document.getElementById("Notes");
          Notes_Dij.innerText =
            "Dijkstra's algorithm traverse graph to find the shortest path in a non-negative edge weighted graph";

          let RMBTNDdft = document.querySelectorAll(".VSBTN");
          if (RMBTNDdft) {
            RMBTNDdft.forEach((ele) => {
              ele.parentNode.removeChild(ele);
            });
          }

          let VbtnDdft = document.createElement("button");
          VbtnDdft.classList.add("VSBTN");
          VbtnDdft.innerText = "Visualize Dijsktra";
          let VisualizingBtnDdft = document.getElementById("visualizingBtn");
          VisualizingBtnDdft.appendChild(VbtnDdft);
          VbtnDdft.addEventListener("click", () => {
            dijkstra(Matrix(), STnodes.startN, STnodes.targetN);
          });
          break;

        case "A*":
          cleanPath();

          let Notes_A = document.getElementById("Notes");
          Notes_A.innerText =
            "A* combines the principles of Dijkstra's algorithm with heuristics to find the shortest path in a weighted graph";

          let RMBTNAdft = document.querySelectorAll(".VSBTN");
          if (RMBTNAdft) {
            RMBTNAdft.forEach((ele) => {
              ele.parentNode.removeChild(ele);
            });
          }
          let VbtnAdft = document.createElement("button");
          VbtnAdft.classList.add("VSBTN");
          VbtnAdft.innerText = "Visualize A*";
          let VisualizingBtnAdft = document.getElementById("visualizingBtn");
          VisualizingBtnAdft.appendChild(VbtnAdft);

          VbtnAdft.addEventListener("click", () => {
            new Astar().aStar(Matrix(), STnodes.startN, STnodes.targetN);
          });
          break;
      }
    });
  }, 200);
});

document.getElementById("clearBoard").addEventListener("click", () => {
  cleanBoard();

  const getStartNode = document.querySelector(".startNode");
  getStartNode.classList.remove("startNode");

  const getTargetNode = document.querySelector(".targetNode");
  getTargetNode.classList.remove("targetNode");
});
