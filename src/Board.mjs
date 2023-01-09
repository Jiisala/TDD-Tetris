
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
    if (!this.hasFalling()){
      this.currentBlock = block
      this.setFalling()
    }
    else {throw ("already falling")}
  }
  tick(){
    if (!this.isBottom()){
      this.currentTick += 1
    }
    else{
      this.setFalling() 
    }
  }
  setFalling(){
    this.isFallig = !this.isFallig
  }
  hasFalling(){
    return this.isFallig
  }
  isBottom(){
    return this.currentTick === this.height -1
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
