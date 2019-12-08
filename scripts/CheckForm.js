
function hasLetter(str){
    var check = true;
    if(str === "") check = false;
    for (var c in str){
        if (str[c] >= "А" && str[c] <= "Я" ||
            str[c] >= "а" && str[c] <= "я" || 
            str[c] === "і" || str[c] === "є" || str[c] === "ї") check = true;
        else {
            check = false;
            break;
        }
    }
    return check;
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkForm() {
    var result = true;
    var nameData = document.myform.name.value;
    var surnameData = document.myform.surname.value;
    var emailData = document.myform.email.value;
    var agreeWithTerms = document.myform.terms;
    var incorrectName = document.getElementById('incName');
    var incorrectSurname = document.getElementById('incSurname');
    var incorrectEmail = document.getElementById('incEmail');

    if(!hasLetter(nameData)){
        result = false;
        incorrectName.style = 'display: inline-block';
    }
    
    if(!hasLetter(surnameData)){
        result = false;
        incorrectSurname.style = 'display: inline-block';
    }

    if(!validateEmail(emailData)){
        result = false;
        incorrectEmail.style = 'display: inline-block';
    }
    
    if(!agreeWithTerms.checked){
        result = false;
        alert("Необхідно погодитися з правилами користування!");
    }

    return result;
}

