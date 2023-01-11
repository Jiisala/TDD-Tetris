export class Tetromino{
    static T_SHAPE = new Tetromino(
    `.T.
    TTT
    ...`)
    static I_SHAPE = new Tetromino(
    `.....
    .....
    IIII.
    .....
    .....`, 2)
    static O_SHAPE = new Tetromino(
    `.OO
    .OO
    ...`, 0)
    static L_SHAPE = new Tetromino(
    `L..
    L..
    LL.`, 4)
    constructor(shape, rotations = 4){
        this.rotations = rotations
        this.shapeRaw = shape.replace(/\s+/g, '')
        this.size = Math.sqrt(this.shapeRaw.length)

        this.shapeMatrix = new Array(this.size)
        for (let i = 0; i<this.size; i++){
            this.shapeMatrix[i] = new Array(this.size)
        }
        for (let j = 0; j < this.size; j++){
            for (let k = 0; k < this.size; k++){
                this.shapeMatrix[j][k] = this.shapeRaw[j*this.size+k]
        }

        }
    }
    rotateRight(){        
        if (this.rotations === 0){
            return this}
        else if( this.rotations === 2){
            let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[index]).reverse())
            return new Tetromino(rotated.toString().replaceAll(',',''), 1)
        }
        else if( this.rotations === 1){
            return this.rotateLeft()
        }
        let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[index]).reverse())
        return new Tetromino(rotated.toString().replaceAll(',',''), this.rotations)
    }
    rotateLeft(){
        if (this.rotations === 0){
            return this}
        else if( this.rotations === 2){
            return this.rotateRight()
        }
        else if(this.rotations === 1){
            let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[row.length-1-index]))
            return new Tetromino(rotated.toString().replaceAll(',',''), 2)    
        }
        else{
        let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[row.length-1-index]))
        return new Tetromino(rotated.toString().replaceAll(',',''), this.rotations)
        }
    }
    toString(matrix = this.shapeMatrix){
        let shape = ""
        for (let j = 0; j < this.size; j++){
            for (let k = 0; k < this.size; k++){
                shape += matrix[j][k]
        }
        shape += "\n"
        }
        return shape;
    } 
}
