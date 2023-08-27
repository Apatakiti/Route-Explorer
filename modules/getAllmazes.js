import { Simple_Maze } from "./Mazes/simpleMaze.js";
import { Recursive_Division } from "./Mazes/Recursive_Division.js";

export class Mazes {

    simpleMaze() {
      return Simple_Maze()
    }

    Recursive_Division() {
        return Recursive_Division()
    }

}

const Maze = new Mazes()
