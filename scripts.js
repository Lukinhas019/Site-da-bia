const button = document.querySelector(".my-button");
button.style.backgroundColor = "red";

button.onclick = function () {
    alert("NÃO É ESSE BOTÃO! TENTE OUTRO!");
}





const button2 = document.getElementById("my-button2");
const frase = document.getElementById("frase");
const img = document.getElementById("nossa-img");
button2.addEventListener("click", mostrarFrase);
function mostrarFrase() {
    frase.style.display = "block";
    img.style.display = "block";
}






