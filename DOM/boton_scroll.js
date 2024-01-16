const d = document,
w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn)

    w.addEventListener("scroll", e =>{
     let scrollTop = w.pageYOffset || d.documentElement.scrollTop
     
     if (condition) {
        
     }
     console.log(w.pageYOffset, d.documentElement.scrollTop)
    })

    d.addEventListener("click", e =>{

    })
}