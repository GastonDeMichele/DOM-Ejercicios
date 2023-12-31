import hamburguerMenu from "./DOM/menu_hamburguesa.js";/*cuando es una sola funcion se usa export default*/
import { digitalClock, alarm } from "./DOM/reloj.js";//cuandon son varias solo export y se llaman entre llaves.
import { shortCuts } from "./DOM/teclado.js";



const d = document;/*para simplificar el document lo asignamos a una variable d */

d.addEventListener("DOMContentLoaded", e => {/*llamamos la funcion dentro del evento DOMContentLoad para asegurar que primero cargue todo antes de ejecutar */
  hamburguerMenu(".panel-btn", ".panel", ".menu a")/*llamamos a la funcion y le asignamos los valores a los parametros */
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma")
})



//el teclado tiene 3 eventos, keyUp(cuando soltamos la tecla), keydown(cuando presionamos) y keyPress(cuando mantenemos presionado)

d.addEventListener("keydown", (e) => {
  shortCuts(e);
})


