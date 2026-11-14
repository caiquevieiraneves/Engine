import {CanvasHandler, PointerHandler, vec2} from "./Canvas.js"
import {BoxSolver, CircleSolver} from "./Engine.js"
const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)
let Objs = [
  {Pos: [100,100],Matrix: [[-100,100], [100,100], [0,-100]], Color: ""}
]

setInterval(()=>{
  Objs[0].Pos = Pointer.Pointer.Pos



  Canvas.flip()
  for(const Obj of Objs){
    Canvas.drawShape({Pos: Obj.Pos, Matrix: Obj.Matrix, Color: Obj.Color, Stroke:"#ffff"})
  }

},1)