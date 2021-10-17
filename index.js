
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

function getDetails() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var eMail = document.getElementById("eMail").value;
    var passowrd = document.getElementById("password").value;
    
    if (fName.length === 0) {
        document.querySelector("#fName").style.border = "1px hsl(0, 100%, 74%) solid";
        document.querySelector("#fName").removeAttribute("placeholder");
        document.querySelector("#fName").setAttribute("class", "error");
        document.querySelector(".error-fname").style.display = "block";
    }
    if (lName.length === 0) {
        document.querySelector("#lName").style.border = "1px hsl(0, 100%, 74%) solid";
        document.querySelector("#lName").removeAttribute("placeholder");
        document.querySelector("#lName").setAttribute("class", "error");
        document.querySelector(".error-lname").style.display = "block";
    }
    if (!(ValidateEmail(eMail))) {
        document.querySelector("#eMail").style.border = "1px hsl(0, 100%, 74%) solid";
        document.querySelector("#eMail").removeAttribute("placeholder");
        document.querySelector("#eMail").setAttribute("class", "error");
        document.querySelector(".error-email").style.display = "block";
    }

    if (passowrd.length === 0) {
        var passVal = document.querySelector("#password");

        passVal.style.border = "1px hsl(0, 100%, 74%) solid";
        passVal.removeAttribute("placeholder");
        passVal.setAttribute("class", "error");
        document.querySelector(".error-password").style.display = "block";
    }



    if (fName.length != 0) {
        document.querySelector("#fName").style.border = "0.1px solid hsl(246, 25%, 77%)";
        document.querySelector("#fName").removeAttribute("class", "error");
        document.querySelector(".error-fname").style.display = "none";
    }
    if (lName.length != 0) {
        document.querySelector("#lName").style.border = "0.1px solid hsl(246, 25%, 77%)";
        document.querySelector("#lName").removeAttribute("class", "error");
        document.querySelector(".error-lname").style.display = "none";
    }
    if ((ValidateEmail(eMail))) {
        document.querySelector("#eMail").style.border = "0.1px solid hsl(246, 25%, 77%)";
        document.querySelector("#eMail").removeAttribute("class", "error");
        document.querySelector(".error-email").style.display = "none";
    }

    if (passowrd.length != 0) {
        var passVal = document.querySelector("#password");
        passVal.style.border = "0.1px solid hsl(246, 25%, 77%)";
        passVal.removeAttribute("placeholder");
        passVal.removeAttribute("class", "error");
        document.querySelector(".error-password").style.display = "none";
    }
    if (fName.length != 0 && lName.length != 0 && passowrd.length != 0 && ValidateEmail(eMail) === true) {
        document.querySelector(".btn-claim").setAttribute("type", "submit");
    }
    
}

document.querySelector(".btn-claim").addEventListener("click", getDetails);
