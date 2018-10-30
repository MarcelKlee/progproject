

var user = {
    name: "Víctor",
    surname: "Lluva",
    email: "vill18ab@student.cbs.dk",
    password: "manololluva",
    subscription: "Premium",
    phonenumber: "50172595",
}


document.getElementById("namesurname").innerHTML = "My name : " + user.name + " " + user.surname;
document.getElementById("myemail").innerHTML = "My email : " + user.email;
document.getElementById("myphonenumber").innerHTML = "My phone number : " + user.phonenumber;
document.getElementById("mypassword").innerHTML = "My password : " + user.password;
document.getElementById("mysubscription").innerHTML = "My current subscription : " + user.subscription;

function getUserPhone() {
    var phoneField = document.getElementById("phoneField").value;
    var resultphone = document.getElementById('resultphone');
    
    if (phoneField.length < 8) {
        resultphone.textContent = 'Phone number must be at least 8 digits long';
        //alert('Phone number must be at least 8 digits long');
    } else {
        resultphone.textContent = 'Your new phone number is: ' + phoneField;

        //alert(phoneField);
    }
}
// use an eventlistener for the event
var subButtonphone = document.getElementById('subButtonphone');
subButtonphone.addEventListener('click', getUserPhone, false);


localStorage.setItem("phoneField", phoneField.value);
var mynewphonenumber = localStorage.getItem("phoneField");

function getUserEmail() {
    var emailField = document.getElementById("emailField").value;
    var resultemail = document.getElementById('resultemail');
    
    if(emailField.length < 1) {
        resultemail.textContent = "Please enter a valid email";
    } else {
        resultemail.textContent = 'Your new email is: ' + emailField;
    }

}
// use an eventlistener for the event
var subButtonemail = document.getElementById('subButtonemail');
subButtonemail.addEventListener('click', getUserEmail, false);


localStorage.setItem("emailField", emailField.value);
var mynewemail = localStorage.getItem("emailField");


function getUserPassword() {
    var passwordField = document.getElementById("passwordField").value;
    var resulpassword = document.getElementById('resultpassword');
    
    if(passwordField.length < 1) {
        resultpassword.textContent = "Please enter a valid password";
    } else {
        resultpassword.textContent = 'Your new password is: ' + passwordField;
    }

}
// use an eventlistener for the event
var subButtonpassword = document.getElementById('subButtonpassword');
subButtonpassword.addEventListener('click', getUserPassword, false);


localStorage.setItem("passwordField", passwordField.value);
var mynewpassword = localStorage.getItem("passwordField");