import hamburguerMenu from "./DOM/menu_hamburguesa.js"; /*cuando es una sola funcion se usa export default*/
import { digitalClock, alarm } from "./DOM/reloj.js"; //cuandon son varias solo export y se llaman entre llaves.
import { moveBall, shortCuts } from "./DOM/teclado.js";
import countdown from '/DOM/cuenta_regresiva.js';
import scrollTopButton from '/DOM/boton_scroll.js';
import darkTheme from "/DOM/tema_oscuro.js";
import responsiveResponsible from "/DOM/responsive_responsible.js";
import responsiveTester from "/DOM/responsive_tester.js";
import userDeviceInfo from "/DOM/deteccion_dispositivos.js";
import detectRed from "/DOM/deteccion_red.js";
import webCam from "/DOM/deteccion_webcam.js";
import getGeolocation from "./DOM/geolocalizacion.js";
import searchFilters from "./DOM/filtro_busquedas.js";
import draw from "./DOM/sorteo.js";



const d = document; /*para simplificar el document lo asignamos a una variable d */

d.addEventListener("DOMContentLoaded", e => {
  /*llamamos la funcion dentro del evento DOMContentLoad para asegurar que primero cargue lo antes de ejecutar */
  hamburguerMenu(".panel-btn", ".panel", ".menu a") /*llamamos a la funcion y le asignamos los valores a los parametros */
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")

  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma")

  countdown(
    "countdown",
    "Aug 08, 2024 12:00:00",
    "Felicidades hoy es tu cumpleaños numero 29")
  scrollTopButton(".scroll-top-btn")

  responsiveResponsible(
    "youtube",
    "(min-width: 1024px)",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=fijD6NttrZO-clVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<a href="https://youtu.be/6IwUl-4pAzc?si=yyu_YFz2U49L4FKt" target ="_blank">Ver video</a>`

    
    )
    responsiveResponsible(
    )

    responsiveTester("responsive-tester")

    userDeviceInfo("user-device")

    webCam("webcam")

    getGeolocation("geolocation")

    searchFilters(".card-filter", ".card")

    draw("#winner-btn", ".player")
})

darkTheme(".dark-theme-btn", "dark-mode")
detectRed()

//el teclado tiene 3 eventos, keyUp(cuando soltamos la tecla), keydown(cuando presionamos) y keyPress(cuando mantenemos presionado)

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage")
})