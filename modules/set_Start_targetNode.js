const rows = 15;
const cols = 30;

export const row_col = [rows, cols];

export const Random_Start_TargetNode = () => {
  // Random StartNode falling on the left side of the grid
  const RandomStartCol = Math.floor(cols / 2 - (Math.random() * cols) / 2);
  const RandomStartRow = Math.floor(Math.random() * rows);

  // Random TargetNode falling on the Right side of the grid
  const RandomTargetCol = Math.floor(cols / 2 + (Math.random() * cols) / 2);
  const RandomTargetRow = Math.floor(Math.random() * rows);

  return {
    startNode: [RandomStartRow, RandomStartCol],
    targetNode: [RandomTargetRow, RandomTargetCol],
  };
};

document.getElementById("ST").addEventListener("click", () => {
  try {
    new Promise(() => {
      let startNode = document.querySelectorAll(".startNode");
      let targetNode = document.querySelectorAll(".targetNode");

      if (startNode && targetNode) {
        setTimeout(() => {
          startNode.forEach((ele) => {
            ele.classList.remove("startNode");
          });

          targetNode.forEach((ele) => {
            ele.classList.remove("targetNode");
          });
        }, 50);
      } else {
        // throw new Error(
        //   "Maybe Start Node OR Target Node Not Previously Assigned"
        // );
      }
    });
  } catch (error) {
    console.error("Error", error.message);
  }

  let start_target = Random_Start_TargetNode();
  let startN = start_target.startNode;
  let targetN = start_target.targetNode;


  new Promise(() => {
    setTimeout(() => {
      let getSN = document.getElementsByClassName(
        `cell_${startN[0]}_${startN[1]}_`
      )[0];
      let getTN = document.getElementsByClassName(
        `cell_${targetN[0]}_${targetN[1]}_`
      )[0];

      getSN.classList.add("startNode");
      getTN.classList.add("targetNode");
    }, 100);
  });
  // .then()
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
});
