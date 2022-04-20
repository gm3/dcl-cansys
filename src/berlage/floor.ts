export class Floor extends Entity {
    constructor(
    position: Vector3
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: position,
        scale: new Vector3(1,1,1),
        rotation: new Quaternion().setEuler(0,0,0)
      }))
      this.addComponent(new GLTFShape("models/floor/floor.gltf"))
    } 
   }

