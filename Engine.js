export class BoxEngine {
  static quickSolve(Objs) {
    for(let i = 0; i < Objs.length; i++){
      const Obj0 = Objs[i];
      for(let v = i+1; v < Objs.length; v++){
        const Obj1 = Objs[v];
        
        const
          Dx = Obj0.Pos[0] - Obj1.Pos[0],
          Dy = Obj0.Pos[1] - Obj1.Pos[1];
        const
          deltaX = (Obj0.Size[0] + Obj1.Size[0]) / 2 - Math.abs(Dx),
          deltaY = (Obj0.Size[1] + Obj1.Size[1]) / 2 - Math.abs(Dy);
        if (deltaX < 0 || deltaY < 0) { continue }
        if (deltaX < deltaY) {
          Obj0.Pos[0] += 0.5 * deltaX * Math.sign(Dx)
          Obj1.Pos[0] -= 0.5 * deltaX * Math.sign(Dx)
        } else {
          Obj0.Pos[1] += 0.5 * deltaY * Math.sign(Dy)
          Obj1.Pos[1] -= 0.5 * deltaY * Math.sign(Dy) 
        }
        
      }
    }
  }
  static initArray(Objs) {
    for (const Obj of Objs) {
      Obj.Apos = [Obj.Pos[0], Obj.Pos[1]]
    }
  }
}