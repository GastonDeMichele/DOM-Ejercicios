const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage);
    console.log(e.keyCode)


    switch (e.keyCode) {
        case 37:
            //move("left")
            x--;
            break;
        case 38:
            //move("up")
            y--;
            break;
        case 39:
            //move("right")
            x++;
            break;
        case 40:
            //move("down")
            y++;
            break;
        default:

    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}














export function shortCuts(e) {/*
    console.log('Tipo de evento:', e.type);
    console.log('Tecla:', e.key);
    console.log('Código de tecla:', e.keyCode);
    console.log('ctrl:', e.ctrlKey);
    console.log('alt:', e.altKey);
    console.log('shift:', e.shiftKey);
    console.log(e);*/

    if (e.key === "a" && e.altKey) {
        alert("haz lanzado una alerta con el teclado")
    }

    if (e.key === "c" && e.altKey) {
        confirm("haz lanzado una Confirmacion con el teclado")
    }

    if (e.key === "p" && e.altKey) {
        alert("haz lanzado un Prompt con el teclado")
    }
}

