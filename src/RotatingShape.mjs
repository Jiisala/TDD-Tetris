export class RotatingShape{
    constructor(shape){
        this.shapeRaw = shape.replace(/\s+/g, '')
        this.shapeMatrix = new Array(3)
        for (let i = 0; i<3; i++){
        this.shapeMatrix[i] = new Array(3)
        }
        for (let j = 0; j < 3; j++){
            for (let k = 0; k < 3; k++){
                this.shapeMatrix[j][k] = this.shapeRaw[j*3+k]
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
        for (let j = 0; j < 3; j++){
            for (let k = 0; k < 3; k++){
                shape += matrix[j][k]
        }
        shape += "\n"
        }
        return shape;
    }
    
    
}