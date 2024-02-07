const d = document 

export default function draw(btn,selector) {
    const getWinners = (selector)=>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

        console.log($players, random, winner)

        return `el ganador es: ${winner.textContent}`
    }

    d.addEventListener("click",(e)=>{
        if (e.target.matches(btn)) {
        let result = getWinners(selector);
        alert(result);
        console.log(result);                     
        }
    })
}
