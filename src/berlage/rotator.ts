export class Rotator implements ISystem {
    public timer: number = 0
    public speed: number = 30
    public rotation: number = 0
   
    constructor(
      public entities: Array<Entity>,
      speed: number = 30
    ){
      
      this.speed = speed

    }
  
    update(dt: number) {    
      this.timer+=dt
      this.entities.forEach(entity => {
        entity.getComponent(Transform).rotation.setEuler(this.rotation,(this.timer*this.speed),0)
      })
  
    }
  
  }