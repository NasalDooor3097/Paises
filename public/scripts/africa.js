//Boton para quitar el texto -----------------------------------------------------------
const ButtonDelete = document.getElementById("delete");

ButtonDelete.addEventListener("click", event =>{
    document.getElementById("texto").style.visibility="hidden"
})
//fin de la funcion --------------------------------------------------------------------
const Angola = document.getElementById("Angola");
const Argelia = document.getElementById("Argelia");
const Benin = document.getElementById("Benin");
const Botsuana = document.getElementById("Botsuana");
const Burkina_Faso = document.getElementById("Burkina_Faso");
const Burundi = document.getElementById("Burundi");
const Cabo_Verde = document.getElementById("Cabo_Verde");
const Camerun = document.getElementById("Camerun");
const Chad = document.getElementById("Chad");
const Comores = document.getElementById("Comores");
const Congo = document.getElementById("Congo");
const Costa_Marfil = document.getElementById("Costa_Marfil");
const Egipto = document.getElementById("Egipto");
const Eritrea = document.getElementById("Eritrea");
const Etiopia = document.getElementById("Etiopia");
const Guinea_Ecuatorial = document.getElementById("Guinea_Ecuatorial");
const Gabon = document.getElementById("Gabon");
const Gambia = document.getElementById("Gambia");
const Ghana = document.getElementById("Ghana");
const Guinea_Bissau = document.getElementById("Guinea_Bissau");
const Guinea = document.getElementById("Guinea");
const Isla_Mauricio = document.getElementById("Isla_Mauricio");
const Islas_Seychelles = document.getElementById("Islas_Seychelles");
const Kenia = document.getElementById("Kenia");
const Lesoto = document.getElementById("Lesoto");
const Liberia = document.getElementById("Liberia");
const Libia = document.getElementById("Libia");
const Madagascar = document.getElementById("Madagascar");
const Malawi = document.getElementById("Malawi");
const Mali = document.getElementById("Mali");
const Marruecos = document.getElementById("Marruecos");
const Mauritania = document.getElementById("Mauritania");
const Mozambique = document.getElementById("Mozambique");
const Namibia = document.getElementById("Namibia");
const Niger = document.getElementById("Niger");
const Nigeria = document.getElementById("Nigeria");
const Ruanda = document.getElementById("Ruanda");
const Senegal = document.getElementById("Senegal");
const Sierra_Leona = document.getElementById("Sierra_Leona");
const Somalia = document.getElementById("Somalia");
const Sudafrica = document.getElementById("Sudafrica");
const Sudan = document.getElementById("Sudan");
const Sudan_del_Sur = document.getElementById("Sudan_del_Sur");
const Tanzania = document.getElementById("Tanzania");
const Togo = document.getElementById("Togo");
const Tunez = document.getElementById("Tunez");
const Uganda = document.getElementById("Uganda");
const Zambia = document.getElementById("Zambia");
const Zimbabue = document.getElementById("Zimbabue");


var Presidente;
var Ministro;



Angola.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Joao Lourenço <br> Ministro: Manuel Domingos Augusto <br> <br> <h2>Divisas</h2> <br> Kwanza angoleño: 1 Kwanza = 0.036 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Joao Lourenço.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Manuel Domingos Augusto.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Argelia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Abdelmadjid Tebboune <br> Ministro: Sabri Boukadoum <br> <br> <h2>Divisas</h2> <br> Dinar argelino: 1 Dinar = 0.13 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Abdelmadjid Tebboune.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Sabri Boukadoum.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Benin.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Patrice Talon <br> Ministro: Aurélien Agbenonci <br> <br> <h2>Divisas</h2> <br> Franco CFA: 1 Franco CFA = 0.031 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Patrice Talon.jpeg";
    Ministro = "/public/img/Presidentes-ministros/Aurélien Agbenonci.jpeg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Botsuana.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mokgweetsi Masisi <br> Ministro: Eric Molale <br> <br> <h2>Divisas</h2> <br> Pula botsuana: 1 Pula = 1.43 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Mokgweetsi Masisi.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Eric Molale.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Burkina_Faso.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ibrahim Traoré <br> Ministro: Bassolma Bazié <br> <br> <h2>Divisas</h2> <br> Franco CFA: 1 Franco CFA = 0.031 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Ibrahim Traoré.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Bassolma Bazié.jpeg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Burundi.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Evariste Ndayishimiye <br> Ministro: Albert Shingiro <br> <br> <h2>Divisas</h2> <br> Franco burundés: 1 Franco burundés = 0.0087 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Evariste Ndayishimiye.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Albert Shingiro.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});


Cabo_Verde.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: José Maria Neves <br> Ministro: Rui Alberto de Figueiredo Soares <br> <br> <h2>Divisas</h2> <br> Escudo caboverdiano: 1 Escudo caboverdiano = 0.18 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/José Maria Neves.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Rui Alberto de Figueiredo Soares.jpeg";
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});
  
Camerun.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Paul Biya <br> Ministro: Joseph Dion Ngute <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Central: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Paul Biya.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Joseph Dion Ngute.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Chad.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mahamat Idriss Déby Itno <br> Ministro: Saleh Kebzabo <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Central: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Mahamat Idriss Déby Itno.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Saleh Kebzabo.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Comores.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Azali Assoumani <br> Ministro: Djaffar Ahmed Said Hassani <br> <br> <h2>Divisas</h2> <br> Franco comorense: 1 Franco comorense = 0.044 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Azali Assoumani.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Djaffar Ahmed Said Hassani.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Congo.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Denis Sassou Nguesso <br> Ministro: Anatole Collinet Makosso <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Central: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Denis Sassou Nguesso.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Anatole Collinet Makosso.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Costa_Marfil.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Alassane Ouattara <br> Ministro: Patrick Achi <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Alassane Ouattara.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Patrick Achi.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Egipto.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Abdel Fattah el-Sisi <br> Ministro: Mostafa Madbouly <br> <br> <h2>Divisas</h2> <br> Libra egipcia: 1 Libra egipcia = 0.58 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Abdel Fattah el-Sisi.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Mostafa Madbouly.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Eritrea.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Isaias Afwerki <br> Ministro: Osman Saleh <br> <br> <h2>Divisas</h2> <br> Nakfa eritreo: 1 Nakfa = 0.73 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Isaias Afwerki.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Osman Saleh.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Etiopia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Sahle-Work Zewde <br> Ministro: Abiy Ahmed <br> <br> <h2>Divisas</h2> <br> Birr etíope: 1 Birr = 0.30 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Sahle-Work Zewde.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Abiy Ahmed.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Guinea_Ecuatorial.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Teodoro Obiang Nguema Mbasogo <br> Ministro: Francisco Pascual Obama Asue <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Central: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Teodoro Obiang Nguema Mbasogo.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Francisco Pascual Obama Asue.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Gabon.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Ali Bongo Ondimba <br> Ministro: Rose Christiane Ossouka Raponda <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Central: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Ali Bongo Ondimba.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Rose Christiane Ossouka Raponda.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Gambia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Adama Barrow <br> Ministro: Dawda A. Jallow <br> <br> <h2>Divisas</h2> <br> Dalasi gambiano: 1 Dalasi = 0.31 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Adama Barrow.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Dawda A. Jallow.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Ghana.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Nana Akufo-Addo <br> Ministro: Osei Bonsu Amoah <br> <br> <h2>Divisas</h2> <br> Cedi ghanés: 1 Cedi = 2.10 Pesos mexicanos";
    Presidente = "/public/img/Presidentes-ministros/Nana Akufo-Addo.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Osei Bonsu Amoah.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Guinea_Bissau.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Umaro Sissoco Embaló <br> Ministro: Nuno Nabiam <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Umaro Sissoco Embaló.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Nuno Nabiam.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Guinea.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mamady Doumbouya <br> Ministro: Mohamed Béavogui <br> <br> <h2>Divisas</h2> <br> Franco guineano: 1 Franco guineano = 0.0023 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Mamady Doumbouya.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Mohamed Béavogui.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Isla_Mauricio.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Prithvirajsing Roopun <br> Ministro: Pravind Jugnauth <br> <br> <h2>Divisas</h2> <br> Rupia mauriciana: 1 Rupia = 0.42 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Prithvirajsing Roopun.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Pravind Jugnauth.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Islas_Seychelles.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Wavel Ramkalawan <br> Ministro: Jean-François Ferrari <br> <br> <h2>Divisas</h2> <br> Rupia seychellense: 1 Rupia = 1.45 Pesos mexicanos";
    Presidente = "/public/img/Presidentes-ministros/Wavel Ramkalawan.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Jean-François Ferrari.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Kenia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: William Ruto <br> Ministro: Rigathi Gachagua <br> <br> <h2>Divisas</h2> <br> Chelín keniano: 1 Chelín = 0.12 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/William Ruto.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Rigathi Gachagua.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Lesoto.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Rey: Letsie III <br> Ministro: Sam Matekane <br> <br> <h2>Divisas</h2> <br> Loti lesotense: 1 Loti = 0.91 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Letsie III.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Sam Matekane.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Liberia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: George Weah <br> Ministro: Nathaniel McGill <br> <br> <h2>Divisas</h2> <br> Dólar liberiano: 1 Dólar = 0.10 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/George Weah.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Nathaniel McGill.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Libia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed al-Menfi <br> Ministro: Abdul Hamid Dbeibah <br> <br> <h2>Divisas</h2> <br> Dinar libio: 1 Dinar = 3.74 Pesos mexicanos";
    Presidente = "/public/img/Presidentes-ministros/Mohamed al-Menfi.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Abdul Hamid Dbeibah.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Madagascar.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Andry Rajoelina <br> Ministro: Christian Ntsay <br> <br> <h2>Divisas</h2> <br> Ariary malgache: 1 Ariary = 0.0047 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Andry Rajoelina.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Christian Ntsay.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Malawi.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Lazarus Chakwera <br> Ministro: Saulos Chilima <br> <br> <h2>Divisas</h2> <br> Kwacha malauí: 1 Kwacha = 0.018 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Lazarus Chakwera.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Saulos Chilima.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Mali.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Assimi Goita <br> Ministro: Abdoulaye Diop <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Assimi Goita.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Abdoulaye Diop.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Marruecos.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Rey: Mohamed VI <br> Ministro: Aziz Akhannouch <br> <br> <h2>Divisas</h2> <br> Dírham marroquí: 1 Dírham = 2.18 Pesos mexicanos";
    Presidente = "/public/img/Presidentes-ministros/Mohamed VI.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Aziz Akhannouch.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Mauritania.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed Ould Ghazouani <br> Ministro: Mohamed Salem Ould Béchir <br> <br> <h2>Divisas</h2> <br> Uquiya mauritana: 1 Uquiya = 0.46 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Mohamed Ould Ghazouani.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Mohamed Salem Ould Béchir.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Mozambique.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Filipe Nyusi <br> Ministro: Adriano Maleiane <br> <br> <h2>Divisas</h2> <br> Metical mozambiqueño: 1 Metical = 0.29 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Filipe Nyusi.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Adriano Maleiane.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Namibia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Hage Geingob <br> Ministro: Netumbo Nandi-Ndaitwah <br> <br> <h2>Divisas</h2> <br> Dólar namibio: 1 Dólar = 0.91 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Hage Geingob.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Netumbo Nandi-Ndaitwah.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Niger.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Mohamed Bazoum <br> Ministro: Ouhoumoudou Mahamadou <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Mohamed Bazoum.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Ouhoumoudou Mahamadou.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Nigeria.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Bola Tinubu <br> Ministro: Kashim Shettima <br> <br> <h2>Divisas</h2> <br> Naira nigeriano: 1 Naira = 0.022 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Bola Tinubu.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Kashim Shettima.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Ruanda.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Paul Kagame <br> Ministro: Edouard Ngirente <br> <br> <h2>Divisas</h2> <br> Franco ruandés: 1 Franco = 0.017 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Paul Kagame.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Edouard Ngirente.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Senegal.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Macky Sall <br> Ministro: Amadou Ba <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Macky Sall.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Amadou Ba.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Sierra_Leona.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Julius Maada Bio <br> Ministro: Mohamed Juldeh Jalloh <br> <br> <h2>Divisas</h2> <br> Leone: 1 Leone = 0.00097 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Julius Maada Bio.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Mohamed Juldeh Jalloh.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Somalia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Hassan Sheikh Mohamud <br> Ministro: Hamza Abdi Barre <br> <br> <h2>Divisas</h2> <br> Chelín somalí: 1 Chelín = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Hassan Sheikh Mohamud.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Hamza Abdi Barre.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Sudafrica.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Cyril Ramaphosa <br> Ministro: David Mabuza <br> <br> <h2>Divisas</h2> <br> Rand sudafricano: 1 Rand = 0.91 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Cyril Ramaphosa.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/David Mabuza.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Sudan.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Abdel Fattah al-Burhan <br> Ministro: Osman Hussein <br> <br> <h2>Divisas</h2> <br> Libra sudanesa: 1 Libra = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Abdel Fattah al-Burhan.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Osman Hussein.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Sudan_del_Sur.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Salva Kiir Mayardit <br> Ministro: Riek Machar <br> <br> <h2>Divisas</h2> <br> Libra sursudanesa: 1 Libra = 0.16 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Salva Kiir Mayardit.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Riek Machar.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Tanzania.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Samia Suluhu Hassan <br> Ministro: Kassim Majaliwa <br> <br> <h2>Divisas</h2> <br> Chelín tanzano: 1 Chelín = 0.008 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Samia Suluhu Hassan.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Kassim Majaliwa.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Togo.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Faure Gnassingbé <br> Ministro: Gilbert Houngbo <br> <br> <h2>Divisas</h2> <br> Franco CFA de África Occidental: 1 Franco CFA = 0.032 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Faure Gnassingbé.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Gilbert Houngbo.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Tunez.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Kais Saied <br> Ministro: Najla Bouden <br> <br> <h2>Divisas</h2> <br> Dinar tunecino: 1 Dinar = 5.91 Pesos mexicanos";
    Presidente = "/public/img/Presidentes-ministros/Kais Saied.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Najla Bouden.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Uganda.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Yoweri Museveni <br> Ministro: Robinah Nabbanja <br> <br> <h2>Divisas</h2> <br> Chelín ugandés: 1 Chelín = 0.0048 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Yoweri Museveni.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Robinah Nabbanja.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Zambia.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Hakainde Hichilema <br> Ministro: Mutale Nalumango <br> <br> <h2>Divisas</h2> <br> Kwacha zambiano: 1 Kwacha = 0.97 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Hakainde Hichilema.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Mutale Nalumango.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});

Zimbabue.addEventListener("click", event =>{  
    document.getElementById("Textos").innerHTML = "<h2>Lideres</h2> <br> Presidente: Emmerson Mnangagwa <br> Ministro: Constantino Chiwenga <br> <br> <h2>Divisas</h2> <br> Dólar zimbabuense: 1 Dólar = 0.0028 Peso mexicano";
    Presidente = "/public/img/Presidentes-ministros/Emmerson Mnangagwa.jpeg"; 
    Ministro = "/public/img/Presidentes-ministros/Constantino Chiwenga.jpeg"; 
    document.getElementById("imgPresidente").src = Presidente;
    document.getElementById("imgMinistro").src = Ministro;
    document.getElementById("texto").style.visibility="visible";
});