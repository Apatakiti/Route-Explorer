import { start_target } from "../Start-targetNode.js";
import { Grid_adjMatrix } from "../Grid-graph.js";
import { Visualizer } from "../visualizer.js";

const grid = new Grid_adjMatrix()
const gridRow = grid.matrix.length
const gridCol = grid.matrix[0].length

export const RecursiveDivision = () => {

    // ( higher tendency there will be a path )
    // 2D array Matrix to Insert Maze 
    const Maze_Matrix = new Array(gridRow).fill().map(() => new Array(gridCol).fill(0));

    // Recursive Division maze generator
    const mazeGenerator  = (x1, y1, x2, y2) => {

        // Base case
        if (x2 - x1 <= 2 || y2 - y1 <= 2) {
            return;
        }

        const horizontal = Math.random() < 0.5;

        const wallX = horizontal ? x1 : x1 + Math.floor(Math.random() * (x2 - x1 - 1)) + 1;
        const wallY = horizontal ? y1 + Math.floor(Math.random() * (y2 - y1 - 1)) + 1 : y1;

        const passageX = horizontal ? wallX : x1 + Math.floor(Math.random() * (x2 - x1));
        const passageY = horizontal ? y1 + Math.floor(Math.random() * (y2 - y1)) : wallY;

        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                if (horizontal && y === wallY && (x < wallX || x > passageX)) {
                    Maze_Matrix[y][x] = 1;
                } else if (!horizontal && x === wallX && (y < wallY || y > passageY)) {
                    Maze_Matrix[y][x] = 1;
                }
            }
        }
        
        mazeGenerator(x1, y1, horizontal ? x2 : wallX + 1, horizontal ? wallY + 1 : y2);
        mazeGenerator(horizontal ? x1 : wallX + 1, horizontal ? wallY + 1 : y1, x2, y2);

    }

    // Generate Maze
    mazeGenerator(0, 0, gridRow, gridCol);


    Maze_Matrix[start_target.startNode[0]][start_target.startNode[1]] = 0;
    Maze_Matrix[start_target.targetNode[0]][start_target.targetNode[1]] = 0;

    return {   
        startN: start_target.startNode,
        targetN: start_target.targetNode,
        Matrix: Maze_Matrix
    };
}

export const Recursive_Division = RecursiveDivision()