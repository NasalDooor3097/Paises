//document.getElementById("Textos").innerHTML =""

const Afganistan = document.getElementById("Afganistan");
const Arabia = document.getElementById("Arabia")

Afganistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ashraf Ghani Ahmadzai <br> Ministro: Asadullah Khalid <br> <br> <h2>Divisas</h2> <br> Afgani afgano: 1 Afgani afgano = 0.29 Peso mexicano";
    document.getElementById("Textos").style.visibility="visible"
});


Arabia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed bin Salman <br> Ministro: Mohamed bin Salman <br> <br> <h2>Divisas</h2> <br> 1 Riyal saudí = 5.24 Peso mexicano";
    document.getElementById("Textos").style.visibility="visible"
});