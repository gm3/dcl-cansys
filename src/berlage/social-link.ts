export class SocialLink extends Entity {
    constructor(
      hoverText: string,
      filename: string,
      url: string,
        
      position: Vector3,
      rotation: Quaternion = new Quaternion().setEuler(0,0-45,0),
      scale: Vector3 = new Vector3(2,2,2),
        
        
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale,
        rotation
      }))
      this.addComponent(new GLTFShape("models/socials/"+filename))
      
      this.addComponent(
        new OnPointerDown((e) => {
          openExternalURL(url)
        }, 
        {
          
            hoverText: hoverText,
          
        })
      )



    } 
   }




