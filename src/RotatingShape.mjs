export class RotatingShape{
    constructor(shape){
        this.shape = shape.replace(/^ +| +$/gm, '')
        this.shape +='\n'
    }

    toString(){
        return this.shape
    }
}