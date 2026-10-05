import {CanvasHandler, PointerHandler} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

setInterval(()=>{
  for(const [i,v] of Pointer.Touches){
    Canvas.draw("rect",v.Pos,[1,1],"#ffff")
  }
  console.log(Pointer.Touches.size)
},100)