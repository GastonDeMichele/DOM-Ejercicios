const d = document,
w = window,
n = navigator;

export default function detectRed() {
const isOnLine = ()=>{
   const $div = d.createElement("div")
   if (n.onLine) {
     $div.textContent = `Conexion reestablecida`
     $div.classList.add("online")
     $div.classList.remove("offline")
   } else {
     $div.textContent = `Conexion perdida`
     $div.classList.add("offline")
     $div.classList.remove("online")
   }
   d.body.insertAdjacentElement("afterbegin", $div) 
   setTimeout(()=>d.body.removeChild($div),2000)
}
w.addEventListener("online",(e)=> isOnLine()) 
w.addEventListener("offline",(e)=>isOnLine())
 }