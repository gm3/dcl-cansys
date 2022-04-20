export class Berlage extends Entity {
    constructor(
    
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: new Vector3(15.8,0,24),
        scale: new Vector3(1,1,1),
        rotation: new Quaternion().setEuler(0,-90,0)
      }))
      this.addComponent(new GLTFShape("models/berlage/berlage.gltf"))
    } 
   }

