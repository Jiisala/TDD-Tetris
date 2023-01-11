export class RotatingShape{
    constructor(shape){
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
        let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[index]).reverse())
        return new RotatingShape(rotated.toString().replaceAll(',',''))
    }
    rotateLeft(){        
        let rotated = this.shapeMatrix[0].map((val, index) => this.shapeMatrix.map(row => row[row.length-1-index]))
        return new RotatingShape(rotated.toString().replaceAll(',',''))
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