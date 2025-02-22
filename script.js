const ord = ["test", "hangman", "er", "tok"]

let gjettBok = [];

let feilBok = [];

const valgtOrd = ord[Math.floor(Math.random() * ord.length)];

document.addEventListener("keypress", klikk)

let brukteLiv = 0

const canvas = document.getElementById("man")

const ctx = canvas.getContext("2d");


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
        tegnMann()
    }
}

function tegnMann(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 240); ctx.lineTo(100, 240);
    ctx.moveTo(55, 240); ctx.lineTo(55, 20); 
    ctx.lineTo(140, 20); 
    ctx.lineTo(140, 40); 
    ctx.stroke();

    if (brukteLiv > 0) { ctx.beginPath(); ctx.arc(140, 55, 15, 0, Math.PI * 2); ctx.stroke(); }
    if (brukteLiv > 1) { ctx.moveTo(140, 70); ctx.lineTo(140, 120); ctx.stroke(); } 
    if (brukteLiv > 2) { ctx.moveTo(140, 85); ctx.lineTo(120, 110); ctx.stroke(); } 
    if (brukteLiv > 3) { ctx.moveTo(140, 85); ctx.lineTo(160, 110); ctx.stroke(); } 
    if (brukteLiv > 4) { ctx.moveTo(140, 120); ctx.lineTo(120, 150); ctx.stroke(); } 
    if (brukteLiv > 5) { ctx.moveTo(140, 120); ctx.lineTo(160, 150); ctx.stroke(); } 
}