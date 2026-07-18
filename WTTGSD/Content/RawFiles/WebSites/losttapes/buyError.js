function errorMSG(){
    const errorLabel = "Hubo un problema al procesar tu pago, inténtalo de nuevo.";
    const buyLabel1 = document.getElementById("buyLabel1");
    const buyLabel2 = document.getElementById("buyLabel2");

    buyLabel1.classList.add("textBold");
    buyLabel1.innerHTML = errorLabel;
    buyLabel2.style.visibility = "hidden";
}