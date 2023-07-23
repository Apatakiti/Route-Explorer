



































































































// class ShortestPathAnd2ndShortestDijkstras {
//     NO_PARENT = -1;	
//     path = new Set(); //nodes in the shortest path
//     allDists = new Set(); //list of shortest distance
//     //use Dijkstra’s Shortest Path Algorithm, Time O(n^2)  n is number of nodes
//     //auxillary Space O(n)
//     shortestPath(adjacencyMatrix,  src, dest) { 
//         var n = adjacencyMatrix[0].length; 
//         var shortest = {}; 
//         var visited = {};
//         var parents = {}; 
//         for (let v = 0; v < n; v++)  { 
//             shortest[v] =  Number.MAX_VALUE; 
//             visited[v] = false; 
//         } 
//         shortest[src] = 0; 
//         parents[src] = this.NO_PARENT; 
//         for (let i = 1; i < n; i++)  { 
//             let pre = -1; 
//             let min =  Number.MAX_VALUE; 
//             for (let v = 0;  v < n;  v++) { 
//                 if (!visited[v] && shortest[v] < min) { 
//                     pre = v; 
//                     min = shortest[v]; 
//                 } 
//             } 
//             if(pre==-1)
//                 return;
//             visited[pre] = true; 
//             for (let v = 0; v < n; v++)  { 
//                 let dist = adjacencyMatrix[pre][v];                  
//                 if (dist > 0 && ((min + dist) < shortest[v]))  { 
//                     parents[v] = pre; 
//                     shortest[v] = min + dist; 
//                 } 
//             } 
//         }  
//         this.allDists.add(shortest[dest]);
//         this.addPath(dest, parents); 
//     } 
//     //utility func to add nodes in the path recursively
//     //Time O(n), Space O(n)
//     addPath(i, parents)  { 	
//         if (i == this.NO_PARENT)        	
//             return;   	
//         this.addPath(parents[i], parents);             
//         this.path.add(i);
//     } 
//     //get 2nd shortest by removing each edge in shortest and compare  
//     //Time O(n^3), Space O(n)
//     find2ndShortest(adjacencyMatrix, src, dest) {    	
//         var preV = -1, preS = -1, preD = -1; //store previous vertex's data
//         var list = Array.from(this.path);       
//         for (let i = 0; i < list.length-1 ; i++) {
//             //get source and destination for each path in shortest path
//             let s = list[i];
//             let d = list[i + 1];
//             if (preV != -1) {//resume the previous path 
//                 adjacencyMatrix[preS][preD] = preV;
//                 adjacencyMatrix[preD][preS] = preV;
//             }
//             //record the previous data for recovery
//             preV = adjacencyMatrix[s][d];
//             preS = s;
//             preD = d;
//             //remove this path
//             adjacencyMatrix[s][d] = 0;
//             adjacencyMatrix[d][s] = 0;
//             //re-calculate
//             this.shortestPath(adjacencyMatrix, src, dest);
//         }
//     }
// }
// 		/*
// 		 *     0
// 		 *  10/ \3
// 		 *   /   \
// 		 *  1--1--4
// 		 * 5|  8/ |2
// 		 *  | /   |
// 		 *  2--7--3
// 		 */ 
// const adjacencyMatrix = [
//     [ 0,10, 0, 0, 3 ],
//     [ 10, 0, 5, 0, 1 ],
//     [ 0, 5, 0, 7, 8 ],
//     [ 0, 0, 7, 0, 2 ],
//     [ 3, 1, 8, 2, 0 ]
// ];
// let src = 2, dest = 4;
// myObj = new ShortestPathAnd2ndShortestDijkstras();
// myObj.shortestPath(adjacencyMatrix, src, dest); 
// myObj.find2ndShortest(adjacencyMatrix, src, dest); 
// let list = Array.from(myObj.allDists); 
// console.log("Shortest distance: " + list[0]);
// console.log("2nd shortest distance: " + list[1]); 