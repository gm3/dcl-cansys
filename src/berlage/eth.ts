export class Eth extends Entity {
    constructor(
        
      position: Vector3,
      rotation: Quaternion = new Quaternion().setEuler(0,0-45,0),
      scale: Vector3 = new Vector3(1,1,1),
        
        
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale,
        rotation
      }))
      this.addComponent(new GLTFShape("models/berlage/eth.gltf"))


    } 
   }




