import { Berlage } from "./entities/berlage"
import { Teleporter } from "./entities/teleporter"


let berlage = new Berlage()
let teleporter = new Teleporter()

teleporter.setParent(berlage)