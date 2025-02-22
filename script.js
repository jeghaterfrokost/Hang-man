
const ord = ["test", "hangman", "er", "tok"]


let gjettBok = [];

let feilBok = [];

const valgtOrd = ord[Math.floor(Math.random() * ord.length)];




document.addEventListener("keypress", klikk)





function klikk(event) {
    console.log("Du skrev:", event.key)
    const bokstav = event.key.toLowerCase()
    if (valgtOrd.includes(bokstav)) {
        console.log("Ordet inneholder", bokstav)

        for (let i = 0; i < valgtOrd.length; i++) {
            if (valgtOrd.charAt(i) == bokstav) {
                console.log("Bokstaven finnes på posisjon nr", i)
            }
            
        }
    }
}


