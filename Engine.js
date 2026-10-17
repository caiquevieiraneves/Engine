function boxSolve(Obj0, Obj1){
  const
    Dx = Obj0.Pos[0]-Obj1.Pos[1],
    Dy = Obj0.Pos[0]-Obj1.Pos[1];
  const
    deltaX = (Obj0.Size[0]+Obj1.Size[0])/2 - Math.abs(Dx),
    deltaY = (Obj0.Size[1]+Obj1.Size[1])/2 - Math.abs(Dy);
  Obj0.Pos = [
    Obj0.Pos[0]+Math.max(0,deltaX),
    Obj0.Pos[1]
  ]
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