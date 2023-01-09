import { Block } from "./Block.mjs";

export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentBlock = new Block(".")
    this.currentTick = 0
    this.isFallig = false
  }
  drop(block){
    if (!this.isFallig){
      this.currentBlock = block
      this.isFallig = true
    }
    else {throw ("already falling")}
  }
  tick(){
    this.currentTick += 1
  }
  toString() {
    let board = ""
    for (let j = 0; j < this.width; j++){
      for (let k = 0; k < this.height; k++){
        if (j === this.currentTick && k === 1){
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
