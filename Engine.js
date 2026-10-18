function boxSolve(Obj0, Obj1){
  const
    Dx = Obj0.Pos[0]-Obj1.Pos[0],
    Dy = Obj0.Pos[1]-Obj1.Pos[1];
  const
    deltaX = (Obj0.Size[0]+Obj1.Size[0])/2 - Math.abs(Dx),
    deltaY = (Obj0.Size[1]+Obj1.Size[1])/2 - Math.abs(Dy);
  if(deltaX < 0 || deltaY < 0){return}
  if(deltaX < deltaY){
    Obj0.Pos[0] += 0.5*deltaX*Math.sign(Dx)
    Obj1.Pos[0] -= 0.5*deltaX*Math.sign(Dx)*(Obj0.Mvd[0] == Math.abs(Dx) ? 1 : 0)
  }else{
    Obj0.Pos[1] += 0.5*deltaY*Math.sign(Dy)
    Obj1.Pos[1] -= 0.5*deltaY*Math.sign(Dy)* (Obj0.Mvd[1] == Math.abs(Dy) ? 1 : 0)
  }
  Obj0.Mvd = [Math.sign(Dx),Math.sign(Dy)]
}

function _boxSolve(Obj0,Obj1){
}

export class BoxEngine{
  static solveArray(Objs){
    for(const Obj0 of Objs){
      Obj0.Mvd = [0,0]
      for(const Obj1 of Objs){
        if(Obj0 == Obj1){break;}
        boxSolve(Obj0, Obj1)
        Obj0.Apos = Obj0.Pos
        Obj1.Apos = Obj1.Pos
      }
    }
  }
  static initArray(Objs){
    for(const Obj of Objs){
      Obj.Apos = [Obj.Pos[0], Obj.Pos[1]]
    }
  }
}