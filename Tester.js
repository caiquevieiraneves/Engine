import {CanvasHandler, PointerHandler} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

setInterval(()=>{Canvas.draw("rect",Pointer.Pointer.Pos,[10,10],"#ffff")},1)
