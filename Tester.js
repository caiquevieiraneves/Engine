import {CanvasHandler, PointerHandler, vec2} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

setInterval(()=>{
  for(const [i,v] of Pointer.Touches){
    Canvas.drawRect({Pos: v.Pos, Size:[5,5], Anchor:[1,1], Angle: 1})
  }
},10)