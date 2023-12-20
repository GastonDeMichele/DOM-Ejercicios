import hamburguerMenu from "./DOM/menu_hamburguesa.js";/*importamos la funcion hamburguerMenu*/

const d = document;/*para simplificar el document lo asignamos a una variable d */

d.addEventListener("DOMContentLoaded", e => {/*llamamos la funcion dentro del evento DOMContentLoad para asegurar que primero cargue todo antes de ejecutar */
    hamburguerMenu(".panel-btn", ".panel", ".menu a")/*llamamos a la funcion y le asignamos los valores a los parametros */
})

/*mediante el import podemos traer la funcion colocandola dentro de un evento y asignandole los valores desde aqui,
 solo necesitamos saber que el primer parametro es el boton que controla el panel, el segundo es el selector que es el que se va a ocultar y 
 el tercero el link que cierra una vez que seleccionamos la opcion del menu que querramos    */

