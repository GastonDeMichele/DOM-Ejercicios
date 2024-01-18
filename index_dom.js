import hamburguerMenu from "./DOM/menu_hamburguesa.js";/*cuando es una sola funcion se usa export default*/
import { digitalClock, alarm } from "./DOM/reloj.js";//cuandon son varias solo export y se llaman entre llaves.
import {moveBall, shortCuts} from "./DOM/teclado.js";
import countdown from '/DOM/cuenta_regresiva.js';
import scrollTopButton from '/DOM/boton_scroll.js';
import darkTheme from "/DOM/tema_oscuro.js";

const d = document;/*para simplificar el document lo asignamos a una variable d */

d.addEventListener("DOMContentLoaded", e => {/*llamamos la funcion dentro del evento DOMContentLoad para asegurar que primero cargue todo antes de ejecutar */
  hamburguerMenu(".panel-btn", ".panel", ".menu a")/*llamamos a la funcion y le asignamos los valores a los parametros */
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma")
  countdown(
    "countdown",
  "Aug 08, 2024 12:00:00",
  "Felicidades hoy es tu cumpleaños numero 29")
  scrollTopButton(".scroll-top-btn")

})
darkTheme(".dark-theme-btn","dark-mode")


//el teclado tiene 3 eventos, keyUp(cuando soltamos la tecla), keydown(cuando presionamos) y keyPress(cuando mantenemos presionado)

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e,".ball", ".stage")
})


