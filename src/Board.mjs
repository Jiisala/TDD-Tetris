
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
    
    this.board = new Array(this.width)
    for (let i = 0; i<this.width; i++){
      this.board[i] = new Array(this.height)
    }
    for (let j = 0; j < this.board.length; j++){
      for (let k = 0; k < this.board[j].length; k++){
        this.board[j][k] = "."
      }

    }
  }

  drop(block){
    if (!this.hasFalling()){
      this.currentBlock = block
      this.setFalling()
    }
    else {throw ("already falling")}
  }
  tick(){
    if (!this.isBlocked()){
      this.currentTick += 1
    }
    else{
      this.setBlock()
      this.setFalling()
      this.currentTick = 0;
      this.currentBlock = new Block(".")
 
    }
  }
  setBlock(){
    this.board[this.currentTick][1] = this.currentBlock.color
  }
  setFalling(){
    this.isFallig = !this.isFallig
  }
  hasFalling(){
    return this.isFallig
  }
  isBlocked(){
    
    return this.currentTick === this.height -1 || this.board[this.currentTick +1][1] !== "."
  }
  toString() {
    let board = ""
    for (let j = 0; j < this.width; j++){
      for (let k = 0; k < this.height; k++){
        if (j === this.currentTick && k === 1){
          board += this.currentBlock.color
        }
        else{
          board += this.board[j][k]
        }
      }
      board += "\n"
    }
    return board;
  }
}
