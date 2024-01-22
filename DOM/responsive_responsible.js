const d = document,
  w = window;

export default function responsiveResponsible(id, mq, desktopContent, mobileContent) {
  let breakPoint = w.matchMedia(mq)
  const responsive = (e) => {
    const element = d.getElementById(id);
    if (element) {
      if (e.matches) {
        element.innerHTML = desktopContent;
      } else {
        element.innerHTML = mobileContent;
      }
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  }


  breakPoint.addEventListener("change", responsive);

  responsive(breakPoint)//para que se imprima de primer momento sin hacer ninguna modificacion de ancho
}
