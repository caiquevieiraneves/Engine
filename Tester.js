import {CanvasHandler, PointerHandler, vec2} from "./Canvas.js"
import {BoxEngine} from "./Engine.js"
const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)
let Objs = [{Pos: [100,100],Size:[100,100]},{Pos: [300,300], Size: [200,200]}]

setInterval(()=>{
  Objs[0].Pos = Pointer.Pointer.Pos
  BoxEngine.solveArray(Objs)
  Canvas.flip()
  for(const Obj of Objs){
    Canvas.drawRect({Pos: Obj.Pos, Size: Obj.Size, Anchor:[0.5,0.5]})
  }
},1)