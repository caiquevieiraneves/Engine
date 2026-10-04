import {CanvasHandler} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')

Canvas.draw("rect",[0,0],[100,100])