export class Visualizer {

  delay() {
    return new Promise((res) => setTimeout(res, 100));
  }

  visiting(row, col) {
    const visualizeCurrentNode = document.getElementById(
      `${"cell" + row}${col}`
    );
    visualizeCurrentNode.className = "currentCell";
  }

  shortestPath(row, col) {
    const visualizeCurrentNode = document.getElementById(
      `${"cell" + row}${col}`
    );
    visualizeCurrentNode.className = "shortestpath";
  }

  startNandTargetN(startN, targetN) {
    const visualizeStartNode = document.getElementById(`${"cell" + startN[0]}${startN[1]}`
    );
    visualizeStartNode.className = "startNode";

    const visualizeTargetNode = document.getElementById(
      `${"cell" + targetN[0]}${targetN[1]}`
    );

    visualizeTargetNode.className = "targetNode";
  }
}
