
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
kaboom();
loadSprite("kartka","domek.png")
loadSprite("balwan","balwan.png")
loadSound("muzyka","muzyka2.mp3")
add([
    sprite("kartka")
])
const balwan = add([
    sprite("balwan"),
    pos(0,150)
])

let wprawo = true

balwan.onUpdate(()=>{
    if(wprawo && balwan.pos.x< 550)
    balwan.pos.x +=1
    else if (!wprawo && balwan.pos.x> 50)
    balwan.pos.x-= 1
    else wprawo ^= true
})
onMouseRelease(()=>play("muzyka"))