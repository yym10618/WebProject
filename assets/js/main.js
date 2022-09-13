import { bs } from './modules/bsComponents.js'
import {shadow} from './modules/shadow.js'
import {wowAnimate} from './modules/wowAnimate.js'

bs()
if(document.querySelector('#shadow-box')){
    shadow()
}

if(document.querySelector('.wow')){
    wowAnimate()
}