import {CanvasHandler, PointerHandler, vec2} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

setInterval(()=>{
  for(const [i,v] of Pointer.Touches){
    Canvas.draw("circle",vec2.add(v.Pos,[0,-3]),[5,2],"#ffff")
  }
},10)