import {DisplayModule, PointerModule} from "./Engine.js"

const Display = new DisplayModule(document.querySelector("Canvas"))
const Pointer = new PointerModule(document.querySelector("Canvas"))

setInterval(() => {
  if(Pointer.Pointer.down){
    Display.fill(Math.floor(Pointer.Pointer.x),Math.floor(Pointer.Pointer.y))
  }
},1)