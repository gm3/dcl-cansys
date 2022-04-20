import { movePlayerTo } from '@decentraland/RestrictedActions'

export class ArrowUp extends Entity {
    constructor(   
      position: Vector3,
      rotation: Quaternion = new Quaternion().setEuler(0,0,0),
      scale: Vector3 = new Vector3(2,2,2),
        
        
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale,
        rotation
      }))
      this.addComponent(new GLTFShape("models/socials/arrow.gltf"))
      
      this.addComponent(
        new OnPointerDown((e) => {
          movePlayerTo({ x: 6.5, y: 55, z: 40 }, { x: 8, y: 1, z: 8 })
        }, 
        {
          
            hoverText: "Up",
          
        })
      )



    } 
   }



   export class ArrowDown extends Entity {
    constructor(   
      position: Vector3,
      rotation: Quaternion = new Quaternion().setEuler(180,0-45,0),
      scale: Vector3 = new Vector3(2,2,2),
        
        
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale,
        rotation
      }))
      this.addComponent(new GLTFShape("models/socials/arrow.gltf"))
      
      this.addComponent(
        new OnPointerDown((e) => {
          movePlayerTo({ x: 15, y: 20, z: 37 }, { x: 8, y: 1, z: 8 })
        }, 
        {
          
            hoverText: "Up",
          
        })
      )



    } 
   }




