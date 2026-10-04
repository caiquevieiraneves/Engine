export class CanvasHandler{
    constructor(Canvas,Context){
        this.Canvas = Canvas;
        this.Context = Canvas.getContext(Context);
    }
    draw(Obj="rect",Pos=[0,0],Size=[0,0],Color="#ffff"){
        switch(Obj){
            case "rect":{
                alert(Foi)
            }
        }
    }
}
export class PointerHandler{
    constructor(CanvasHandler){
        this.Handler = CanvasHandler;
    }
}