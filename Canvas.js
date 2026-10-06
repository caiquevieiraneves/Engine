export class CanvasHandler {
    constructor(Canvas, Context) {
        this.Canvas = Canvas;
        this.Context = Canvas.getContext(Context);
    }
    draw(Obj = "rect", Pos = [0, 0], Size = [0, 0], Color = "#ffff") {
        switch (Obj) {
            case "rect": {
                this.Context.fillStyle = Color;
                this.Context.fillRect(Pos[0], Pos[1], Size[0], Size[1]);
                break;
            }
        }
        switch (Obj) {
            case "circle": {
                this.Context.fillStyle = Color;
                this.Context.beginPath();
                this.Context.ellipse(Pos[0], Pos[1], Size[0], Size[1], 0, 0, 2*Math.PI);
                this.Context.fill();
                break;
            }
        }
    }
}

export class PointerHandler {
    constructor(Canvas) {
        this.Canvas = Canvas;

        // Define

        this.Pointer = { Pos: [0, 0], Id: null, IsDown: false };
        this.Mouse = { Pos: [0, 0], Id: null, IsDown: false };
        this.Pen = { Pos: [0, 0], Id: null, IsDown: false };
        this.Touches = new Map();

        //Events

        Canvas.addEventListener("pointerdown", (Event) => {
            const rect = this.Canvas.getBoundingClientRect();
            const Pos = this.posToContext(Event);

            switch (Event.pointerType) {
                
                case "mouse": {
                    this.Mouse.IsDown = true;
                  break;
                }
                case "pen": {
                    this.Pen.IsDown = true;
                  break;
                }
                case "touch": {
                    this.Touches.set(Event.pointerId,{Pos: Pos, Id: Event.pointerId});
                  break;
                }
            }
            if (this.Pointer.Id == null) {
                this.Pointer.Id = Event.pointerId;
                this.Pointer.Pos = Pos;
            }
        })
        Canvas.addEventListener("pointermove", (Event) => {
            const Pos = this.posToContext(Event);
            switch (Event.pointerType) {
                case "mouse": {
                  this.Mouse.Pos = Pos;
                  break;
                }
                case "touch": {
                  this.Touches.get(Event.pointerId).Pos = Pos;
                  break;
                }
            }
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Pos = Pos;
            }
        });
        ['pointerup','pointerleave','pointercancel'].forEach(EvName => {document.addEventListener(EvName, (Event) => {
            switch (Event.pointerType) {
                case "mouse": {
                    this.Mouse.IsDown = false;
                    break;
                }
                case "pen": {
                    this.Pen.IsDown = false;
                    break;
                }
                case "touch": {
                    this.Touches.delete(Event.pointerId);
                    break;
                }
            }
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Id = null;
            }
        })});
        /*document.addEventListener("pointerleave", (Event) => {
            switch (Event.pointerType) {
                case "mouse": {
                    this.Mouse.IsDown = false;
                }
                case "pen": {
                    this.Pen.IsDown = false;
                }
            }
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Id = null;
            }
        })*/
    }
    posToContext(Event) {
        const rect = this.Canvas.getBoundingClientRect()
        return [
            Math.floor((Event.clientX - rect.left) * (this.Canvas.width / rect.width)),
            Math.floor((Event.clientY - rect.top) * (this.Canvas.height / rect.height))
        ]
    }
}

export class vec2{
  static add(vec0, vec1){
    return [vec0[0]+vec1[0],vec0[1]+vec1[1]];
  }
  static sub(vec0, vec1){
    return [vec0[0]-vec1[0],vec0[1]-vec1[1]];
  }
  static div(vec0, vec1){
    return [vec0[0]/vec1[0],vec0[1]/vec1[1]];
  }
  static mult(vec0, vec1){
    return [vec0[0]*vec1[0],vec0[1]*vec1[1]];
  }
  static times(vec0, size){
    return [vec0[0]*size,vec0[1]*size];
  }
}