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