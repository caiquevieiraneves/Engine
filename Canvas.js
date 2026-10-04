export class CanvasHandler {
    constructor(Canvas, Context) {
        this.Canvas = Canvas;
        this.Context = Canvas.getContext(Context);
    }
    draw(Obj = "rect", Pos = [0, 0], Size = [0, 0], Color = "#ffff") {
        switch (Obj) {
            case "rect": {
                this.Context.fillStyle = Color
                this.Context.fillRect(Pos[0], Pos[1], Size[0], Size[1])
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
            const rect = this.Canvas.getBoundingClientRect()

            switch (Event.pointerType) {
                case "mouse": {
                    this.Mouse.IsDown = true;
                }
            }
            if (this.Pointer.Id == null) {
                this.Pointer.Id = Event.pointerId;
                this.Pointer.Pos = this.posToContext(Event)
            }
        })
        Canvas.addEventListener("pointermove", (Event) => {

            switch (Event.pointerType) {
                case "mouse": {

                }
            }
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Pos = this.posToContext(Event);
            }
        })
        document.addEventListener("pointerup", (Event) => {
            switch (Event.pointerType) {
                case "mouse": {
                    this.Mouse.IsDown = false;
                    console.log("subiu");
                }
            }
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Id = null;
            }
        })
        document.addEventListener("pointerleave", (Event) => {
            if (this.Pointer.Id == Event.pointerId) {
                this.Pointer.Id = null;
            }
        })
    }
    posToContext(Event) {
        const rect = this.Canvas.getBoundingClientRect()
        return [
            Math.floor((Event.clientX - rect.left) * (this.Canvas.width / rect.width)),
            Math.floor((Event.clientY - rect.top) * (this.Canvas.height / rect.height))
        ]
    }
}