export function shortCuts(e) {
    console.log('Tipo de evento:', e.type);
    console.log('Tecla:', e.key);
    console.log('Código de tecla:', e.keyCode);
    console.log('ctrl:', e.ctrlKey);
    console.log('alt:', e.altKey);
    console.log('shift:', e.shiftKey);
    console.log(e);

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

