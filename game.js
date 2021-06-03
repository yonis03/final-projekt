function togglePassword(content) {
    var x = document.getElementById(content);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function disabledButton(btn){
    var button = document.getElementById(btn);
    var username = document.getElementById("usernameinput");
    var password = document.getElementById("passwordinput");
    if ((username.value != "")&&(password.value != "")) {
        button.removeAttribute('disabled');
        button.setAttribute('enabled', 'enabled');
    } else {
        button.setAttribute('disabled', 'disabled');
        button.removeAttribute('enabled');
    }
}
function disabledButton1(input,btn){
    var button = document.getElementById(btn);
    var input = document.getElementById(input);
    if (input.value != "") {
        button.removeAttribute('disabled');
        button.setAttribute('enabled', 'enabled');
    } else {
        button.setAttribute('disabled', 'disabled');
        button.removeAttribute('enabled');
    }
}

function disabledButton2(btn){
    var button = document.getElementById(btn);
    var username = document.getElementById("usernameinput").value;
    var email = document.getElementById("emailinput").value;
    var password = document.getElementById("passwordinput").value;
    var valid = 0;
    if ((username.length > 5)&&(password.length > 5)&&(validateEmail(email))) {
        valid = 0;
    }else{
        valid++;
    }
    if (valid==0) {
        button.removeAttribute('disabled');
        button.setAttribute('enabled', 'enabled');
    } else {
        button.setAttribute('disabled', 'disabled');
        button.removeAttribute('enabled');
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

function toggleNav(){
    var nav = document.getElementById("navUL");
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }
}
