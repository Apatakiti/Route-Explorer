export class Visualizer {
  delay() {
    return new Promise((res) => setTimeout(res, 100));
  }

  visiting(row, col) {
    const visualizeCurrentNode = document.getElementById(
      `${"cell" + row}${col}`
    );
    visualizeCurrentNode.classList.add("currentCell")
  }

  shortestPath(row, col) {
    const visualizeCurrentNode = document.getElementById(
      `${"cell" + row}${col}`
    );
    visualizeCurrentNode.classList.add("shortestpath")
  }

  startNandTargetN(startN, targetN) {
    const visualizeStartNode = document.getElementById(
      `${"cell" + startN[0]}${startN[1]}`
    );
    // visualizeStartNode.className = "startNode";

    visualizeStartNode.classList.add("startNode")

    const visualizeTargetNode = document.getElementById(
      `${"cell" + targetN[0]}${targetN[1]}`
    );

    visualizeTargetNode.classList.add("targetNode") 
  }

  Block(row, col) {
    const VisualizeMazeBlock = document.getElementById(
      `${"cell" + row}${col}`
    )
    
    VisualizeMazeBlock.classList.add("block")
  } 

}
