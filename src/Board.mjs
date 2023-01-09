import { Block } from "./Block.mjs";

export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBlock = new Block(".")
  }
  drop(block){
    this.currentBlock = block
  }
  toString() {
    let board = ""
    for (let j = 0; j < this.width; j++){
      for (let k = 0; k < this.height; k++){
        if (j === 0 && k === 1){
          board += this.currentBlock.color
        }
        else{
          board += "."
        }
      }
      board += "\n"
    }
    return board;
  }
}
