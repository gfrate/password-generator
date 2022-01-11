English = () => {
    document.getElementById("lang_en").innerHTML = "English";
    document.getElementById("lang_it").innerHTML = "Italian";
    document.getElementById("head_title_lang").innerHTML = "Password Generator";
    document.getElementById("title_lang").innerHTML = "Password Generator";
    document.getElementById("length_lang").innerHTML = "Password Length:";
    document.getElementById("uppercase_lang").innerHTML = "Include Uppercase Letters:";
    document.getElementById("lowercase_lang").innerHTML = "Include Lowercase Letters:";
    document.getElementById("numbers_lang").innerHTML = "Include Numbers:";
    document.getElementById("special_lang").innerHTML = "Include Special Characters:";
    document.getElementById("btn_generate_lang").innerHTML = "Generate"
    document.getElementById("credits_lang").innerHTML = "Credits to:&nbsp;"
}

Italian = () => {
    document.getElementById("lang_en").innerHTML = "Inglese";
    document.getElementById("lang_it").innerHTML = "Italiano";
    document.getElementById("head_title_lang").innerHTML = "Generatore Password";
    document.getElementById("title_lang").innerHTML = "Generatore Password";
    document.getElementById("length_lang").innerHTML = "Lunghezza Password:";
    document.getElementById("uppercase_lang").innerHTML = "Includi Lettere Maiuscole:";
    document.getElementById("lowercase_lang").innerHTML = "Includi Lettere Minuscole:";
    document.getElementById("numbers_lang").innerHTML = "Includi Numeri:";
    document.getElementById("special_lang").innerHTML = "Includi Caratteri Speciali:";
    document.getElementById("btn_generate_lang").innerHTML = "Genera"
    document.getElementById("credits_lang").innerHTML = "Crediti:&nbsp;"
}

/*
 * EN: Feel free to add other languages too!
 * IT: Sentiti libero di aggiungere altre lingue!
*/

switchLanguage = () => {
    let lang = document.getElementById("language").value;
    if(lang == "English") {
        English();
    }
    else if(lang == "Italian") {
        Italian();
    }
}