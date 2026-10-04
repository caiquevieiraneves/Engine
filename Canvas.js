export class CanvasHandler{
    constructor(Canvas,Context){
        this.Canvas = Canvas;
        this.Context = Canvas.getContext(Context);
    }
    draw(Obj="rect",Pos=[0,0],Size=[0,0],Color="#ffff"){
        switch(Obj){
            case "rect":{
                this.Context.fillStyle = Color
                this.Context.fillRect(Pos[0],Pos[1],Size[0],Size[1])
            }
        }
    }
}
export class PointerHandler{
    constructor(Canvas){
        this.Canvas = Canvas;

        // Define

        this.Pointer = {Pos: [0,0], Id: null, IsDown: false}
        this.Mouse = {Pos: [0,0], Id: null, IsDown: false}
        this.Pen = {Pos: [0,0], Id: null, IsDown: false}
        this.Touches = new Map()

        //Events

        Canvas.addEventListener("pointerdown",(Event) => {
            switch (Event.pointerType){
                case "mouse":{
                    this.Mouse.IsDown = true
                }
                default: {
                    console.log(Event.pointerId)
                }
            }
        })
        Canvas.addEventListener("pointerup",(Event) => {
            switch (Event.pointerType){
                case "mouse":{
                    this.Mouse.IsDown = false
                    console.log("subiu")
                }
            }
        })

        //End
    }
}