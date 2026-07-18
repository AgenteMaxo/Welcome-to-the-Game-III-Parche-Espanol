const typeMessage = setInterval(typing, 6000);

var b = 0;
var i = 0;
const txt = [
    "Hola Simon.",
    "Tu visita ha quedado registrada.",
    "Me alegra ver que sigues vivo.",
    "Nos encanta observarte.",
    "Sería una pena que murieras."];
var speed = 75;

function typing() {
    if (i < txt[b].length) {
        document.getElementById("contact").innerHTML += txt[b].charAt(i);
        i++;
        setTimeout(typing, speed);
    } else if (i == txt[b].length) {
        setTimeout(changeText, 3000);
    }
}

function changeText() {
    let text = document.getElementById("contact").innerHTML;
    document.getElementById("contact").innerHTML = text.replace(txt[b], '');
    b++;
    i = 0;

    if (b == 5) {
        clearInterval(typeMessage);
    }
}