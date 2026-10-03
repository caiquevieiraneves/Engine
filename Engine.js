export class DisplayModule{
  constructor(Canvas){
    this.Canvas = Canvas
    this.Context = Canvas.getContext('2d');
  }
  fill(x,y){
    this.Context.fillStyle = "#ffff";
    this.Context.fillRect(x,y,1,1);
  }
}

export class PointerModule{
  Pointer = {dx: 0, dy: 0, x: 0, y: 0, down: false}
  Mouse = {dx: 0, dy: 0, x: 0, y: 0, down: false}
  Pen = {dx: 0, dy: 0, x: 0, y: 0, down: false, id: false}
  constructor(Canvas){
    this.Touches = new Map()
    Canvas.addEventListener("pointerdown", (Event) => {
      if(Event.pointerType == "pen"){
        this.Pointer.down = true
        this.Pen.id = Event.PointerId
      }
    })
    Canvas.addEventListener("pointermove", (Event) => {
      if(Event.pointerType == "pen" || Event.pointerType == "mouse"){
        const Pos = Canvas.getBoundingClientRect();
        let x = (Event.clientX-Pos.left) * (Canvas.width / Pos.width);
        let y = (Event.clientY-Pos.top) * (Canvas.height / Pos.height);
        this.Pointer.x = x;
        this.Pointer.y = y;
      }
    })
    Canvas.addEventListener("pointerup", (Event) => {
      if(Event.pointerType == "pen"){
        this.Pointer.down = false
        this.Pen.id = Event.PointerId
      }
    })
    Canvas.addEventListener("pointercancel", (Event) => {
      if(Event.pointerType == "pen"){
        this.Pointer.down = false
        this.Pen.id = Event.PointerId
      }
    })
  }
}