//Boton para quitar el texto -----------------------------------------------------------
const ButtonDelete = document.getElementById("delete");

ButtonDelete.addEventListener("click", event =>{
    document.getElementById("texto").style.visibility="hidden"
})
//fin de la funcion --------------------------------------------------------------------

const Afganistan = document.getElementById("Afganistan");
const Arabia = document.getElementById("Arabia");
const Bahrain = document.getElementById("Bahrain");
const Bangladesh = document.getElementById("Bangladesh");
const Brunei = document.getElementById("Brunei");
const Butan = document.getElementById("Butan");
const Camboya = document.getElementById("Camboya");
const China = document.getElementById("China");
const Corea_Norte = document.getElementById("Corea_Norte");
const Corea_Sur = document.getElementById("Corea_Sur");
const Filipinas = document.getElementById("Filipinas");
const India = document.getElementById("India");
const Indonesia = document.getElementById("Indonesia");
const Irak = document.getElementById("Irak");
const Iran = document.getElementById("Iran");
const Isla_Maldivas = document.getElementById("Isla_Maldivas");
const Israel = document.getElementById("Israel");
const Japon = document.getElementById("Japon");
const Jordania = document.getElementById("Jordania");
const Kazajstan = document.getElementById("Kazajstan");
const Kirguistan = document.getElementById("Kirguistan");
const Kuwait = document.getElementById("Kuwait");
const Laos = document.getElementById("Laos");
const Libano = document.getElementById("Libano");
const Malasia = document.getElementById("Malasia");
const Mongolia = document.getElementById("Mongolia");
const Myanmar = document.getElementById("Myanmar");
const Nepal = document.getElementById("Nepal");
const Oman = document.getElementById("Oman");
const Pakistan = document.getElementById("Pakistan");
const Palestina = document.getElementById("Palestina");
const Qatar = document.getElementById("Qatar");
const Singapur = document.getElementById("Singapur");
const Siria = document.getElementById("Siria");
const SriLanka = document.getElementById("SriLanka");
const Taiwan = document.getElementById("Taiwan");
const Tayikistan = document.getElementById("Tayikistan");
const Tailandia = document.getElementById("Tailandia");
const Timor = document.getElementById("Timor");
const Uzbekistan = document.getElementById("Uzbekistan");
const Turkmenistan = document.getElementById("Turkmenistan");
const Union_Emiratos = document.getElementById("Union_Emiratos");
const Vietnam = document.getElementById("Vietnam");
const Yemen = document.getElementById("Yemen");

//Variables de las imagenes de presidentes y ministros-----------------------------------------------------------------------------
var Presidente;
var Ministro;

Afganistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Salmán bin Abdulaziz <br> Ministro: Asadullah Khalid <br> <br> <h2>Divisas</h2> <br> Afgani afgano: 1 Afgani afgano = 0.29 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/ashraf.png";
    Ministro = "/public/img/Presidentes-ministros/ministroAfgano.png"
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Arabia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed bin Salman <br><br> <h2>Divisas</h2> <br> 1 Riyal saudí = 5.24 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiArabia.jpg";
    Ministro = ""
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Bahrain.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Isa ibn-Sulman Al-Jalifa <br> Ministro: Salman bin Hamad bin Isa Al Jalifa <br> <br> <h2>Divisas</h2> <br> Dinar bareiní: 1 Dinar bareiní = 51.57 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiIsaibn.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinistroBahrain.jpg"
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Bangladesh.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Shahabuddin Chuppu <br> Ministro: Muhammad Yunus <br> <br> <h2>Divisas</h2> <br> BDT: 1 BDT = 0.16 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiBangladesh.jpg";
    Ministro = "/public/img/Presidentes-ministros/Ministrobanglades.jpg"
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Brunei.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Haji Hassanal Bolkiah Mu'izzaddin Waddaulah <br> <br> <h2>Divisas</h2> <br> Dolar de Brunéi: 1 Dolar de Brunéi = 15.08 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiBrunei.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Butan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Jigme Khesar Namgyel Wangchuck <br> Ministro: Tshering Tobgay <br> <br> <h2>Divisas</h2> <br> BTN: 1 BTN = 0.23 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiButan.jpg";
    Ministro = "/public/img/Presidentes-ministros/Ministrobutan.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Camboya.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Norodom Sihamoní <br> Ministro: Aun Porn Moniroth <br> <br> <h2>Divisas</h2> <br> Riel Camboyano: 1 Riel Camboyano = 0.0048 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiCamboya.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinistroCamboya.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


China.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Xi Jinping <br> Ministro: Li Qiang <br> <br> <h2>Divisas</h2> <br> Yuan Chino: 1 Yuan Chino = 2.76 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/PresiChina.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinistroChina.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Corea_Norte.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Kim Jong-un <br> Ministro: Kim Tok-hun <br> <br> <h2>Divisas</h2> <br> Won Norcoreano: 1 Won Norcoreano = 0.0215814 Peso mexicano";



    Presidente = "/public/img/Presidentes-ministros/PreciNortCorea.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinistroNortCorea.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Corea_Sur.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Yoon Suk-yeol <br> Ministro: Han Duck-soo <br> <br> <h2>Divisas</h2> <br> Won Surcoreano: 1 Won Surcoreano = 0.015 Peso mexicano";


    Presidente = "/public/img/Presidentes-ministros/PresiSurCorea.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinistroSurCorea.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Filipinas.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ferdinand Marcos Jr. <br> <br> <h2>Divisas</h2> <br> Peso Filipino: 1 Peso Filipino = 0.35 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/FilipinasPresi.jpg";
    Ministro = "";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


India.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidenta: Draupadi Murmu <br> Ministro: Narendra Modi <br> <br> <h2>Divisas</h2> <br> Rupia India: 1 Rupia India = 0.23 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/IndiaPresi.jpg";
    Ministro = "/public/img/Presidentes-ministros/MinisIndia.jpg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible"
});


Indonesia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Joko Widodo <br> <br> <h2>Divisas</h2> <br> Rupia Indonesia: 1 Rupia Indonesia = 0.0013 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Irak.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Abdul Latif Rashid <br> Ministro: Mohammed Shia' Al Sudani <br> <br> <h2>Divisas</h2> <br> Dinar Iraquí: 1 Dinar Iraquí = 0.015 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Iran.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Masoud Pezeshkian <br> <br> <h2>Divisas</h2> <br> Rial Iraní: 1 Rial Iraní = 0.00046 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Isla_Maldivas.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Dr. Mohamed Muizzu <br> <br> <h2>Divisas</h2> <br> Rupia de Maldivas: 1 MVR = 1.26 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Israel.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Isaac Herzog <br> Ministro: Benjamín Netanyahu <br> <br> <h2>Divisas</h2> <br> Nuevo Séquel: 1 Nuevo Séquel = 5.13 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Japon.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Shigeru Ishiba <br> <br> <h2>Divisas</h2> <br> Yen Japonés: 1 Yen Japonés = 0.13 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Jordania.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Abdalá II Rey Abdalá <br> Ministro: Jafar Hassan <br> <br> <h2>Divisas</h2> <br> Dinar Jordano: 1 Dinar Jordano = 27.39 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Kazajstan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Kasim-Yomart Tokáev <br> <br> <h2>Divisas</h2> <br> Tenge Kazajo: 1 Tenge Kazajo = 0.040 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Kirguistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Sadyr Zhaparov <br> Ministro: Akylbek Japarov <br> <br> <h2>Divisas</h2> <br> Som Kirguiso: 1 Som Kirguiso = 0.23 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Kuwait.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br>  Ministro: Ahmad Nawaf Al-Ahmad Al-Sabah <br> <br> <h2>Divisas</h2> <br> Dinar Kuwaití: 1 Dinar Kuwaití = 63.48 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Laos.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Thongloun Sisoulith <br> <br> <h2>Divisas</h2> <br> Kip laosiano: 1 Kip laosiano = 0.00088 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Libano.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Najib Mikati <br> <br> <h2>Divisas</h2> <br> Libra libanesa: 1 Libra libanesa = 0.00022 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Malasia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Ministro: Anwar Ibrahim <br> <br> <h2>Divisas</h2> <br> Ringgit Malayo: 1 Ringgit Malayo = 4.66 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Mongolia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ukhnaagiin Khürelsükh <br> <br> <h2>Divisas</h2> <br> Tugrik Mongol: 1 Tugrik Mongol = 0.01 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Myanmar.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Myint Swe <br> <br> <h2>Divisas</h2> <br> Kyat Birmano: 1 Kyat Birmano =0.0092530524 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Nepal.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ram Chandra Poudel <br> Ministro: Khadga Prasad Oli <br> <br> <h2>Divisas</h2> <br> Rupia Nepalí: 1 Rupia Nepalí = 0.14 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Oman.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br>  Ministro: Qabus ibn Said Oli <br> <br> <h2>Divisas</h2> <br> Rial: 1 Rial = 50.51 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Pakistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Asif Ali Zardari <br> Ministro: Shehbaz Sharif Oli <br> <br> <h2>Divisas</h2> <br> Rupia Pakistaní: 1 Rupia Pakistaní = 0.070 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Palestina.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mahmud Abás <br> Ministro: Mohammad Mustafa <br> <br> <h2>Divisas</h2> <br> Dinar jordano: 1 Dinar jordano = 27.45 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Qatar.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Hamad bin Jalifa Al Thani <br> Ministro: Mohammed bin Abdulrahman Al Thani <br> <br> <h2>Divisas</h2> <br> Riyal Catarí: 1 Riyal Catarí = 5.35 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Singapur.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br>  Ministro: Lawrence Wong <br> <br> <h2>Divisas</h2> <br> Dólar de Singapur: 1 Dólar de Singapur = 15.04 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Siria.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Bashar al-Ásad <br> Ministro: Hussein Arnous <br> <br> <h2>Divisas</h2> <br> Libra siria: 1 Libra siria = 0.0014967003 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


SriLanka.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Anura Kumara Dissanayake <br> Ministro: Harini Amarasuriya <br> <br> <h2>Divisas</h2> <br> Rupia de Sri Lanka: 1 Rupia de Sri Lanka = 0.066 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Taiwan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Lai Ching-te <br> <br> <h2>Divisas</h2> <br> Nuevo dolar taiwanes: 1 Nuevo dolar taiwanes = 0.60 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Tayikistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Emomali Rahmon <br> Ministro: Kokhir Rasulzoda <br> <br> <h2>Divisas</h2> <br> Somoni Tayiko: 1 Somoni Tayiko = 1.82 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Tailandia.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br>  Ministro: Paethongtarn Shinawatra <br> <br> <h2>Divisas</h2> <br> Baht tailandes: 1 Baht tailandes = 0.58 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Timor.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: José Ramos-Horta <br> Ministro: Longuinhos dos Santos <br> <br> <h2>Divisas</h2> <br> Dolar estadounidense: 1 Dolar estadounidense = 19.36 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Uzbekistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Shavkat Mirziyoyev  <br> <br> <h2>Divisas</h2> <br> Som uzbeko: 1 Som uzbeko = 0.0015 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Turkmenistan.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Serdar Berdimuhamedow  <br> <br> <h2>Divisas</h2> <br> Manat turcomano: 1 Manat turcomano = 5.54 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Union_Emiratos.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed bin Zayed Al Nahayan  <br> <br> <h2>Divisas</h2> <br> Dirham de los emiratos arabes unidos: 1 Dirham de los emiratos arabes unidos = 5.27 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Vietnam.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Tô Lâm  <br> <br> <h2>Divisas</h2> <br> Dong Vietnamita: 1 Dong Vietnamita = 0.00078 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


Yemen.addEventListener("click", event =>{
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Rashad al-Alimi  <br> <br> <h2>Divisas</h2> <br> Rial yemení: 1 Rial yemení = 0.077 Peso mexicano";
    document.getElementById("texto").style.visibility="visible"
});


