import { Matrix } from "../grid_Matrix.js";

const defaultMatrix = Matrix()

export const Recursive_Division = () => {

    const clearBlocks = document.querySelectorAll(".block")
    clearBlocks.forEach(clas => {
        clas.classList.remove('block')
    });

    // 2D array Matrix to Insert Maze 
    // Recursive Division maze generator
    const mazeGenerator  = (x1, y1, x2, y2) => {

        // Base case
        if (x2 - x1 <= 2 || y2 - y1 <= 2) {
            return;
        }

        const horizontal = Math.random() < 0.5;

        const wallX = horizontal ? x1 : x1 + Math.floor(Math.random() * Math.random() * (x2 - x1 - 1)) + 1;
        const wallY = horizontal ? y1 + Math.floor(Math.random() * Math.random() * (y2 - y1 - 1)) + 1 : y1;

        const passageX = horizontal ? wallX : x1 + Math.floor(Math.random() * Math.random() * (x2 - x1));
        const passageY = horizontal ? y1 + Math.floor(Math.random() * Math.random() * (y2 - y1)) : wallY;

        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                if (horizontal && y === wallY && (x < wallX || x > passageX)) {
                    defaultMatrix[y][x] = 1;
                } else if (!horizontal && x === wallX && (y < wallY || y > passageY)) {
                    defaultMatrix[y][x] = 1;
                }
            }
        }
        
        mazeGenerator(x1, y1, horizontal ? x2 : wallX + 1, horizontal ? wallY + 1 : y2);
        mazeGenerator(horizontal ? x1 : wallX + 1, horizontal ? wallY + 1 : y1, x2, y2);
    }

    // Generate Maze
    mazeGenerator(0, 0, 30, 15);

    for (let i = defaultMatrix.length - 1 ; i >= 0 ; i--) {
        for (let j = defaultMatrix[0].length - 1; j  >= 0; j--) {
            if (defaultMatrix[i][j] === 1) {
                document.getElementById(`cell${i}${j}`).classList.add('block')
            }
        }
    }

    return  defaultMatrix;
}
