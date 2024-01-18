const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themebtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]")

  let moon = "🌙",
    sun = "☀️";



  const darktMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themebtn.textContent = sun;
    ls.setItem("theme", "dark")
  }

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themebtn.textContent = moon;
    ls.setItem("theme","light")
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themebtn.textContent === moon) {
        darktMode()
      } else {
        lightMode()
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light")
    }
        if (ls.getItem("theme") === "dark") {
      darktMode()
    }
        if (ls.getItem("theme") === "light") {
         lightMode() 
        }
  })
}''