import {CanvasHandler, PointerHandler} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

Canvas.draw("rect",[0,0],[10,10],"#ffff")