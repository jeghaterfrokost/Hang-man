const ord = ["test", "hangman", "er", "tok"]

let gjettBok = [];

let feilBok = [];

const valgtOrd = ord[Math.floor(Math.random() * ord.length)];

document.addEventListener("keypress", klikk)

let brukteLiv = 0

const canvas = document.getElementById("man")

const ctx = canvas.getContext("2d");

const feilContainer = document.getElementById("feilBok")


function klikk(event) {
    console.log("Du skrev:", event.key)
    const bokstav = event.key.toLowerCase()
    if (valgtOrd.includes(bokstav)) {
        console.log("Ordet inneholder", bokstav)
        gjettBok.push(bokstav)
        console.log("Riktige bokstaver", gjettBok)

        for (let i = 0; i < valgtOrd.length; i++) {
            if (valgtOrd.charAt(i) == bokstav) {
                console.log("Bokstaven finnes på posisjon nr", i)
            }
            
        }
    }
    else {
        console.log(bokstav, "finnes ikke i ordet")
        feilBok.push(bokstav)
        console.log("feil bokstaver", feilBok)
        brukteLiv++
        console.log(brukteLiv)
        feilContainer.innerHTML = feilBok
        tegnMann()
    }
}

