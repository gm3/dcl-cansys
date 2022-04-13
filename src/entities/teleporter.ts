export class Teleporter extends Entity {
    constructor(
    
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position: new Vector3(0,1.72,0),
        scale: new Vector3(1,1,1),
        rotation: new Quaternion().setEuler(0,0,0)
      }))
      this.addComponent(new GLTFShape("models/teleporter.gltf"))
    } 
   }

