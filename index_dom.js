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
    "gmap",
    "(min-width: 1024px)",
   ` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.6550043595025!2d-60.30140812480622!3d-36.92251227221254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959446a6b2df54a9%3A0x2d03e960a9a721da!2sLas%20Margaritas%202099%2C%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1706017808790!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
   `<a href="https://maps.app.goo.gl/zh9TvMeHFFb59noU7" target ="_blank">Ver ubicacion Gmaps</a>`
    )

    responsiveTester("responsive-tester")

    userDeviceInfo("user-device")

    webCam("webcam")

    getGeolocation("geolocation")

    searchFilters(".card-filter", ".card")
})

darkTheme(".dark-theme-btn", "dark-mode")
detectRed()

//el teclado tiene 3 eventos, keyUp(cuando soltamos la tecla), keydown(cuando presionamos) y keyPress(cuando mantenemos presionado)

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage")
})