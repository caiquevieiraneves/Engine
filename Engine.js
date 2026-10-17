function boxSolve(Obj0, Obj1){
  const
    Dx = Obj0.Pos[0]-Obj1.Pos[0],
    Dy = Obj0.Pos[1]-Obj1.Pos[1];
  const
    deltaX = (Obj0.Size[0]+Obj1.Size[0])/2 - Math.abs(Dx),
    deltaY = (Obj0.Size[1]+Obj1.Size[1])/2 - Math.abs(Dy);
  if(deltaX <= 0 || deltaY <= 0){return}
  if(deltaX < deltaY){
    Obj0.Pos[0] += deltaX*Math.sign(Dx)
  }else{
    Obj0.Pos[1] += deltaY*Math.sign(Dy)
  }
}
export class BoxEngine{
  static solveArray(Objs){
    for(const Obj0 of Objs){
      for(const Obj1 of Objs){
        if(Obj0 == Obj1){break;}
        boxSolve(Obj0, Obj1)
      }
    }
  }
}