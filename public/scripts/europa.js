//Boton para quitar el texto -----------------------------------------------------------
const ButtonDelete = document.getElementById("delete");

ButtonDelete.addEventListener("click", event =>{
    document.getElementById("texto").style.visibility="hidden"
})
//fin de la funcion --------------------------------------------------------------------

const Albania = document.getElementById("Albania");
const Alemania = document.getElementById("Alemania");
const Andorra = document.getElementById("Andorra");
const Armenia = document.getElementById("Armenia");
const Austria = document.getElementById("Austria");
const Azerbaiyan = document.getElementById("Azerbaiyan");
const Belgica = document.getElementById("Belgica");
const Bielorrusia = document.getElementById("Bielorrusia");
const Bulgaria = document.getElementById("Bulgaria");
const Chipre = document.getElementById("Chipre");
const Croacia = document.getElementById("Croacia");
const Dinamarca = document.getElementById("Dinamarca");
const Eslovaquia = document.getElementById("Eslovaquia");
const Eslovenia = document.getElementById("Eslovenia");
const España = document.getElementById("España");
const Estonia = document.getElementById("Estonia");
const Finlandia = document.getElementById("Finlandia");
const Francia = document.getElementById("Francia");
const Georgia = document.getElementById("Georgia");
const Grecia = document.getElementById("Grecia");
const Holanda = document.getElementById("Holanda");
const Hungria = document.getElementById("Hungria");
const Irlanda = document.getElementById("Irlanda");
const Islandia = document.getElementById("Islandia");
const Italia = document.getElementById("Italia");
const Kosovo = document.getElementById("Kosovo");
const Letonia = document.getElementById("Letonia");
const Moldavia = document.getElementById("Moldavia");
const Liechtenstein = document.getElementById("Liechtenstein");
const Lituania = document.getElementById("Lituania");
const Luxemburgo = document.getElementById("Luxemburgo");
const Macedonia = document.getElementById("Macedonia");
const Malta = document.getElementById("Malta");
const Monaco = document.getElementById("Monaco");
const Montenegro = document.getElementById("Montenegro");
const Noruega = document.getElementById("Noruega");
const Polonia = document.getElementById("Polonia");
const Reino_Unido = document.getElementById("Reino_Unido");
const Republica_Checa = document.getElementById("Republica_Checa");
const Rumania = document.getElementById("Rumania");
const Rusia = document.getElementById("Rusia");
const San_Marino = document.getElementById("San_Marino");
const Serbia = document.getElementById("Serbia");
const Suecia = document.getElementById("Suecia");
const Suiza = document.getElementById("Suiza");
const Turquia = document.getElementById("Turquia");
const Ucrania = document.getElementById("Ucrania");
const Vaticano = document.getElementById("Vaticano");


var Presidente;
var Ministro;



Albania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Bajram Begaj <br> <br> <h2>Divisas</h2> <br> Lek albanés: 1 Lek albanés = 0.22 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Bajram.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Alemania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Frank-Walter Steinmeier <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.33 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/FrankW.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Andorra.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Xavier Espot Zamora <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.33 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/XavierE.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Armenia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Vahagn Jachaturián <br> <br> <h2>Divisas</h2> <br> Dram armenio: 1 Dram armenio = 0.050 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Vahagn.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Austria.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Alexander Van der Bellen <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.37 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/AlexanderV.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Azerbaiyan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ilham Alíyev <br> <br> <h2>Divisas</h2> <br> Manat Azerbaiyano: 1 Manat Azerbaiyano = 11.39 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Aliyev.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Belgica.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Alexander De Croo <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.37 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/DeCroo.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Bielorrusia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Aleksandr Lukashenko <br> <br> <h2>Divisas</h2> <br> Nuevo rublo bielorruso: 1 Nuevo Rublo Bielorruso = 5.91 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Lukas.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Bulgaria.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Rumen Radev <br> <br> <h2>Divisas</h2> <br> Lev bulgaro: 1 Lev bulgaro = 10.91 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Rumen.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Chipre.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Níkos Christodoulídis <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Nikos.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Croacia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Zoran Milanović <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Zoran.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Dinamarca.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Mette Frederiksen <br> <br> <h2>Divisas</h2> <br> Corona Danesa: 1 Corona Danesa = 2.86 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/Mette.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Eslovaquia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Peter Pellegrini <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Peter.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Eslovenia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Nataša Pirc Musar <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Natasa.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


España.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Pedro Sánchez  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Pedro.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Estonia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Alar Karis  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/AlarK.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Finlandia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Alexander Stubb  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Stubb.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Francia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Emmanuel Macron  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Macron.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Georgia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Salomé Zurabishvili  <br> <br> <h2>Divisas</h2> <br> Lari Georgiano: 1 Lari Georgiano = 7.09 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Salome.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Grecia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Katerína Sakellaropoúlou  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Katerina.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Holanda.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Dick Schoof  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/DickS.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Hungria.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Tamás Sulyok  <br> <br> <h2>Divisas</h2> <br> Forinto hungaro: 1 Forinto hungaro = 0.053 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Tamas.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Irlanda.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Michael D. Higgins  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Michael.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Islandia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Halla Tómasdóttir  <br> <br> <h2>Divisas</h2> <br> Corona islandesa: 1 Corona islandesa = 0.14 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Halla.jpeg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Italia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Sergio Mattarella  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Sergio.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Kosovo.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Vjosa Osmani  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Osmani.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Letonia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Edgars Rinkēvičs  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Edgar.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Moldavia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Maia Sandu  <br> <br> <h2>Divisas</h2> <br> Leu moldavo: 1 Leu moldavo = 1.11 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Maia.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Liechtenstein.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Juan Adán II de Liechtenstein  <br> <br> <h2>Divisas</h2> <br> Franco suizo: 1 Franco suizo = 22.74 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Juan2.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Lituania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Gitanas Nausėda  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Gitanas.png";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Luxemburgo.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Luc Frieden  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/Luc.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Macedonia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Gordana Silianovska-Davkova  <br> <br> <h2>Divisas</h2> <br> Denar macedonio: 1 Denar macedonio = 0.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Macedonia.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Malta.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Myriam Spiteri Debono  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Sp.jpeg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Monaco.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Alberto II de Mónaco  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Alberto.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Montenegro.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Jakov Milatović  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Jak.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Noruega.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Jonas Gahr Støre  <br> <br> <h2>Divisas</h2> <br> Corona noruega: 1 Corona noruega = 1.82 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/Jonas.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Polonia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Andrzej Duda  <br> <br> <h2>Divisas</h2> <br> Zloty: 1 Zloty = 4.95 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Duda.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Reino_Unido.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Keir Starmer  <br> <br> <h2>Divisas</h2> <br> libra estrlina: 1 Libra esterlina = 25.41 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/Keir.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Republica_Checa.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Petr Pavel  <br> <br> <h2>Divisas</h2> <br> Corona checa: 1 Corona checa = 0.84 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Pavel.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Rumania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Klaus Iohannis  <br> <br> <h2>Divisas</h2> <br> Leu rumano: 1 Leu rumano = 4.29 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Klaus.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Rusia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Vladímir Putin  <br> <br> <h2>Divisas</h2> <br> Rublo ruso: 1 Rublo ruso = 0.20 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Putin.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


San_Marino.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Giacomo Simoncini  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Giac.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Serbia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Aleksandar Vučić  <br> <br> <h2>Divisas</h2> <br> Dinar serbio: 1 Dinar serbio = 0.18 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Alek.png";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Suecia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Ulf Kristersson  <br> <br> <h2>Divisas</h2> <br> Corona sueca: 1 Corona sueca = 1.88 Peso mexicano";
    Presidente = "";
    Ministro = "/public/img/Presidentes-ministros/Uif.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Suiza.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Viola Amherd  <br> <br> <h2>Divisas</h2> <br> Franco suizo: 1 Franco suizo = 22.74 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Viola.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Turquia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Recep Tayyip Erdoğan  <br> <br> <h2>Divisas</h2> <br> Lira turca: 1 Lira turca = 0.57 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Recep.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Ucrania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Volodímir Zelenski  <br> <br> <h2>Divisas</h2> <br> Grivna: 1 Grivna = 0.47 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Zelenski.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Vaticano.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Fernando Vérgez Alzaga  <br> <br> <h2>Divisas</h2> <br> Euro: 1 Euro = 21.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Fernando.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});