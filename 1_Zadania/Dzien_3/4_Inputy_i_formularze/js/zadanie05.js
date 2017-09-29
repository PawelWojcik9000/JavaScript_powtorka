/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var password = document.getElementById("pass1");
    var retypePassword = document.getElementById("pass2");
    var checkbox = document.getElementById("agree");
    var submitBtn = document.querySelector(".btn");
    var message = document.createElement("span");
    
    var isValid = false;

    submitBtn.addEventListener("click", function(e) {
        if((email.value.includes("@")) && (name.value.length > 5) && (surname.value.length > 5) && 
        (password.value === retypePassword.value) && (password.value.length > 4) && (retypePassword.value.length > 4) &&
        (checkbox.checked)) isValid = true;
        else isValid = false;
        
        if(!isValid) {
            e.preventDefault();
            message.innerHTML = "zle wypelniony formularz";
            this.parentElement.appendChild(message);
        }
    })

});



