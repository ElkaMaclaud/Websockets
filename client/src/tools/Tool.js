export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.destroyEvents()
    }

    destroyEvents() {
        this.canvas.mouseUpHandler = null   
        this.canvas.mouseDownHandler = null
        this.canvas.mouseMoveHandler = null
  }

}