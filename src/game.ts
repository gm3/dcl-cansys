import { Floor } from "./berlage/floor"
import { Berlage } from "./berlage/berlage"
import { Teleporter } from "./berlage/teleporter"
import { SocialLink } from "./berlage/social-link"
import { Rotator } from "./berlage/rotator"
import { Eth } from "./berlage/eth"
import { ArrowUp, ArrowDown } from "./berlage/arrow"

import { createDispenser } from './berlage/poap/dispenser'


const berlage = new Berlage()               // Main building

new Floor( new Vector3(8,0.1,8) )     
new Floor( new Vector3(8+16,0.1,8) )     

new Floor( new Vector3(8,0.1,8+16) )      
new Floor( new Vector3(8+16,0.1,8+16) )    

new Floor( new Vector3(8,0.1,8+16*2) )
new Floor( new Vector3(8+16,0.1,8+16*2) )

let teleporter1 = new Teleporter('Teleport to IRL-Art','-42,49',new Vector3(14.5,1.72,39)) 
let teleporter2 = new Teleporter('Teleport to IRL-Art','-42,49',new Vector3(16.75,1.72,39))
let teleporter3 = new Teleporter('Teleport to IRL-Art','-42,49',new Vector3(19,1.72,39))


/////////////////////////
//  ARROWS TO REACH TOWER

const arrowUp = new ArrowUp(new Vector3(12,20, 37))
const arrowDown = new ArrowDown(new Vector3( 6.5,41, 40))



/////////////////////////
//  SOCIAL LINKS 

let x = 1.15  
let y = 6.1
const discord  = new SocialLink("Discord", "discord.gltf", "https://discord.gg/FhmA3KeF3B", new Vector3(x, 5.4 ,y) )
const twitter  = new SocialLink("Twitter", "twitter.gltf", "https://twitter.com/efdevconnect", new Vector3(x, 4.4 ,y) )
const website  = new SocialLink("Telegram", "devconnect.gltf", "https://devconnect.org/", new Vector3(x, 3.4 ,y) )
const telegram  = new SocialLink("Telegram", "telegram.gltf", "https://t.me/efdevconnect", new Vector3(x, 2.4 ,y) )

engine.addSystem(new Rotator([discord], 20))
engine.addSystem(new Rotator([twitter], 30))
engine.addSystem(new Rotator([website], 40))
engine.addSystem(new Rotator([telegram], 50))


/////////////////////////
//  ETH symbols at entrance 

const ETHleft  = new Eth( new Vector3(-13.2, 2.9, 14.85) )
const ETHright  = new Eth( new Vector3(10.8,2.9, 14.85) )
const ETHside  = new Eth( new Vector3(19.8,2.9,-1), undefined, new Vector3(0.444,0.444,0.444) )

engine.addSystem(new Rotator([ETHleft, ETHright, ETHside], 30))



/////////////////////////
// PARRENTING
//  to main building to keep correct positions

const children =[discord,twitter,website,telegram,
                ETHleft,ETHright,ETHside]
children.forEach(child => {
    child.setParent(berlage)
});


/////////////////////////
// POAP

createDispenser(
    {
      position: new Vector3(8, 42, 41),
      scale: new Vector3(2,2,2), 
      rotation: Quaternion.Euler(0, 0, 0)
    },
    '3add5ac5-62f1-495e-9ab5-d14766324a83'
  )
  


