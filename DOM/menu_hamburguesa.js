export default function hamburguerMenu(panelBtn, panel, menuLink) {

   const d = document;

    d.addEventListener("click", (e) => {/*asignamos el evento click al document para no usar stoppPropagation. */
        if (e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`))/*valida si hacemos click sobre el borde del panelbtn o sobre el contenido gracias al "*" */ {
            d.querySelector(panel).classList.toggle("is-active");/*modificamos la clase del panel mediante classlist y le aplicamos el toggle para que haga de "interruptor" */
            d.querySelector(panelBtn).classList.toggle("is-active");/*le agregamos la clase is-active al panelbtn(el boton) para que haga el efecto de la cruz. */
        }

        if (e.target.matches(menuLink)){/*valida si hacemos click sobre el borde del panelbtn o sobre el contenido gracias al "*" */ 
            d.querySelector(panel).classList.remove("is-active");/*modificamos la clase del panel mediante classlist y le aplicamos el toggle para que haga de "interruptor" */
            d.querySelector(panelBtn).classList.remove("is-active");/*removemos el efecto del boton */
        }
    });
}

/*usando el export lo que hacemos es que en cualquier otro proyecto mediante un import podemos reutilizar este codigo */