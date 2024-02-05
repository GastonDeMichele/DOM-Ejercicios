const d = document,
w = window,
n = navigator;

export default function detectRed() {
const isOnLine = ()=>{
    $div = d.createElement("div")
   if (n.OnLine) {
     $div.textContent = `Conexion reestablecida`
     $div.classList.add("online")
     $div.classList.remove("offline")
   } else {
     $div.textContent = `Conexion reestablcida`
     $div.classList.add("online")
     $div.classList.remove("offline")
   }
   d.body.insertAdjacentElement("afterbegin", $div) 
   setTimeout(()=>d.body.removeChild($div),2000)
}
w.addEventListener("online",(e)=> isOnLine()) 
w.addEventListener("offline",(e)=>isOnLine())
 }