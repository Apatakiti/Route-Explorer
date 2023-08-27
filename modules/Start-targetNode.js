 const rows = 15
 const cols = 15
   
export const row_col = [rows, cols]

const Random_Start_TargetNode = () => { 

  // Random StartNode falling on the left side of the grid
  const RandomStartCol = Math.floor(cols / 2 - (Math.random() * cols) / 2);
  const RandomStartRow = Math.floor(Math.random() * rows);

  // Random TargetNode falling on the Right side of the grid
  const RandomTargetCol = Math.floor(cols / 2 + (Math.random() * cols) / 2);
  const RandomTargetRow = Math.floor(Math.random() * rows);

  return {
      startNode: [RandomStartRow, RandomStartCol],
      targetNode: [RandomTargetRow, RandomTargetCol]
  }
};

export const start_target = Random_Start_TargetNode()

// document.getElementById("start_targetNode").addEventListener("click", () => {

//   try {
//     new Promise((resolve) => {
//       let startNode = document.getElementById("startNode");
//       let targetNode = document.getElementById("targetNode");

//       if (!startNode && !targetNode) {
//         throw new Error(
//           "Maybe Start Node OR Target Node Not Previously Assigned"
//         );
//       }

//       setTimeout(() => {
//         let removeStartN = startNode.removeAttribute("id");
//         let removeTargetN = targetNode.removeAttribute("id");
//         resolve(removeStartN, removeTargetN);
//       }, 30);
//     });
//   } catch (error) {
//     console.error("Error", error.message);
//   }

//   let start_target = Random_Start_TargetNode();
//   let startN = start_target.startNode;
//   let targetN = start_target.targetNode;

//   new Promise(() => {
//     setTimeout(() => {
//       let getSN = document.getElementById(`${"cell" + startN[0]}${startN[1]}`);
//       let getTN = document.getElementById(
//         `${"cell" + targetN[0]}${targetN[1]}`
//       );

//       getSN.setAttribute("id", "startNode");
//       getTN.setAttribute("id", "targetNode");
//     }, 60);
//   })
//     // .then()
//     // .catch((error) => {
//     //   console.error("Error:", error);
//     // });


