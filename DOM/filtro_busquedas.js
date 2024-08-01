const d = document;

export default function searchFilters(input, selector) {
d.addEventListener("keyup", (e)=>{
    if (e.target.matches(input)) {
        //console.log()
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
