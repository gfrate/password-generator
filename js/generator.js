Generate = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const special = "!@#$%^&*()[]{}=<>/,.";
    let psw = "";
    let formula = "";
    let lang = document.getElementById("language").value;

    if(document.getElementById("uppercase").checked == true) {
        formula += uppercase;
    }
    if(document.getElementById("lowercase").checked == true) {
        formula += lowercase;
    }
    if(document.getElementById("numbers").checked == true) {
        formula += numbers;
    }
    if(document.getElementById("special").checked == true) {
        formula += special;
    }
    if(document.getElementById("uppercase").checked == false && document.getElementById("lowercase").checked == false && document.getElementById("numbers").checked == false && document.getElementById("special").checked == false) {
        if(lang == "English") {
            alert("You must choose an option");
        }
        else if(lang == "Italian") {
            alert("Devi scegliere almeno un'opzione");
        }
    }
    
    let psw_length = document.getElementById("length").value;
    for(let i = 0; i<psw_length; i++) {
        psw += formula.charAt(Math.floor(Math.random() * formula.length));
    }
    psw_result.innerHTML = psw;
}

Copy = () => {
    var copyPsw = document.getElementById("psw_result");
    copyPsw.select();
    copyPsw.setSelectionRange(0, 99999);
    document.execCommand("copy");
}