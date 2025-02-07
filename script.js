const tastatur = document.querySelector(".tastatur")

const tast = document.createElement("div")



const svar = "HANGMAN"

document.addEventListener("keypress", klikk)


function klikk(event) {
    console.log("Du skrev:", event.key)
    const bokstav = event.key.toUpperCase()
    if (svar.includes(bokstav)) {
        console.log("Ordet inneholder", bokstav)

        for (let i = 0; i < svar.length; i++) {
            if (svar.charAt(i) == bokstav) {
                console.log("Bokstaven finnes på posisjon nr", i)
            }
            
        }
    }
}