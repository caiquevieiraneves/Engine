import {CanvasHandler, PointerHandler, vec2} from "./Canvas.js"

const CanvasElement = document.querySelector('Canvas')

const Canvas = new CanvasHandler(CanvasElement,'2d')
const Pointer = new PointerHandler(CanvasElement)

let Ang = 0
setInterval(()=>{
  Ang += 0.005
  Canvas.flip()
  //Canvas.drawEllipse({Color: "rgba(197, 42, 42, 0.1)", Stroke:"", StrokeSize: 1, Pos: Pointer.Pointer.Pos, Size:[60,30], Anchor:[-1,0], Angle: Ang, Delta: 3.14/2,EndAngle: Math.PI})
  Canvas.drawText({Color:"", Stroke:"#ffff", Pos: Pointer.Pointer.Pos, Text: "Ola Marilene"})
},10)