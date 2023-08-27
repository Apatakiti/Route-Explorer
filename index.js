import { Grid_adjMatrix } from "./modules/Grid-graph.js";
import { Recursive_Division } from "./modules/Mazes/Recursive_Division.js";
import { Simple_Maze } from "./modules/Mazes/simpleMaze.js";
import { DFS } from "./modules/Algorithms/DFS.js";
import { dijkstra } from "./modules/Algorithms/DIjsktra.js";
import { Visualizer } from "./modules/visualizer.js";

const grid = new Grid_adjMatrix()
const runDfs = new DFS()

const selectedMaze = document.getElementById("selectMaze");
const selectedAlgo = document.getElementById("Algorithm")  

grid.graph(15, 15)

selectedMaze.addEventListener('change', () => {

  const getBlocks = document.querySelectorAll(".block")
  getBlocks.forEach(block => {
    block.classList.remove('block')
  });

      switch(selectedMaze.value) {

        case "Basic_Random" :

          document.querySelectorAll(".block").forEach(clas => {
            clas.classList.remove('block')
          });

          document.querySelectorAll(".shortestpath").forEach(clas => {
            clas.classList.remove('shortestpath')
          });
    
          document.querySelectorAll(".currentCell").forEach(clas => {
            clas.classList.remove('currentCell')
          });


           for (let i = 0; i < Simple_Maze.Matrix.length; i++) {
            for (let j = 0; j < Simple_Maze.Matrix[0].length; j++) {
      
              if (Simple_Maze.Matrix[i][j] === 1) {
                  const visualize = new Visualizer()
                  visualize.Block(i, j)
                }
            }
          }
        break;

        case "Recursive_Division":

          document.querySelectorAll(".block").forEach(clas => {
            clas.classList.remove('block')
          });

          document.querySelectorAll(".shortestpath").forEach(clas => {
            clas.classList.remove('shortestpath')
          });
    
          document.querySelectorAll(".currentCell").forEach(clas => {
            clas.classList.remove('currentCell')
          });

            for (let i = 0; i < Recursive_Division.Matrix.length; i++) {
              for (let j = 0; j < Recursive_Division.Matrix[0].length; j++) {
        
                if (Recursive_Division.Matrix[i][j] === 1) {
                    const visualize = new Visualizer()
                    visualize.Block(i, j)
                  }
              }
            }
          break;
    }
});




selectedAlgo.addEventListener('change', () => {

  switch (selectedAlgo.value) {
  case "BFS":
    console.log('a')
    break;

    case "DFS":
  
      document.querySelectorAll(".shortestpath").forEach(clas => {
        clas.classList.remove('shortestpath')
      });

      document.querySelectorAll(".currentCell").forEach(clas => {
        clas.classList.remove('currentCell')
      });


      if (selectedMaze.value === "Recursive_Division" || selectedMaze.value === "Basic_Random") {
          runDfs.PathDFS(Recursive_Division.Matrix, Recursive_Division.startN, Recursive_Division.targetN)
      } 
    break;

    case "Dijsktra":
      document.querySelectorAll(".shortestpath").forEach(clas => {
        clas.classList.remove('shortestpath')
      });

      if (selectedMaze.value === "Recursive_Division" || selectedMaze.value === "Basic_Random") {
        dijkstra(Recursive_Division.Matrix, Recursive_Division.startN, Recursive_Division.targetN)
    }
    break;
    case "A_star":
      console.log('m')
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
