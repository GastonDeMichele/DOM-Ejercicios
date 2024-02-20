const d = document;

export default function searchFilters(input, selector) {
d.addEventListener("keyup", (e)=>{
    if (e.target.matches(input)) {
        //console.log(key)
        //console.log(e.target.value)
        const valueInput = e.target.value.toLowerCase();

        d.querySelectorAll(selector).forEach((el)=>
         el.textContent.toLowerCase().includes(valueInput)
         ?el.classList.remove("filter")
         :el.classList.add("filter")
        )
    }
});
}


/*otra forma de agregar o quitar la clase es usando toggle

d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
        d.querySelectorAll(selector).forEach((el) => {
            const textContentLowerCase = el.textContent.toLowerCase();
            const searchTermLowerCase = e.target.value.toLowerCase();
            
            el.classList.toggle("filter", !textContentLowerCase.includes(searchTermLowerCase));
        });
    }
});

*/