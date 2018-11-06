

var user = {
    name: "Víctor",
    surname: "Lluva",
}

// Display variables in screen
document.getElementById("myname").innerHTML = "My name : " + mynewname;
document.getElementById("mysurname").innerHTML = "My surname : " + mynewsurname;
document.getElementById("myemail").innerHTML = "My email : " + mynewemail;
document.getElementById("myphonenumber").innerHTML = "My phone number : " + mynewphonenumber;
document.getElementById("mypassword").innerHTML = "My password : " + mynewpassword;
document.getElementById("mysubscription").innerHTML = "My current subscription : " + user.subscription;

// get phone number from what the user has written
function getUserPhone() {
    var phoneField = document.getElementById("phoneField").value;
    var resultphone = document.getElementById('resultphone');
    // the input should contain only 8 characters (only digits)
    var phoneexpression = /^([0-9]{8})$/;
// if the input complies with the expression, then return true, otherwise return false.    
    if (phoneexpression.test(phoneField)===true) {
        resultphone.textContent = 'Your new phone number is: ' + phoneField;
    } else {
        resultphone.textContent = "Please enter a valid phone number that is 8 digits long";
    }
}
// use an eventlistener to show the result without having to refresh the page.
var subButtonphone = document.getElementById('subButtonphone');
subButtonphone.addEventListener('click', getUserPhone, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("phoneField", phoneField.value);
var mynewphonenumber = localStorage.getItem("phoneField");

//get email from what the user has written
function getUserEmail() {
    var emailField = document.getElementById("emailField").value;
    var resultemail = document.getElementById('resultemail');
   //to check that the address entered contains something, then an @ symbol, and then something else.
    var emailexpression = /\S+@\S+/
// if the input complies with the expression, then return true, otherwise return false.    
    if(emailexpression.test(emailField)===true) {

        resultemail.textContent = 'Your new email is: ' + emailField;

    } else {
        resultemail.textContent = "Please enter a valid email";
    }

}
// use an eventlistener for the event
var subButtonemail = document.getElementById('subButtonemail');
subButtonemail.addEventListener('click', getUserEmail, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("emailField", emailField.value);
var mynewemail = localStorage.getItem("emailField");

//get password from what the user has written
function getUserPassword() {
    var passwordField = document.getElementById("passwordField").value;
    var resultpassword = document.getElementById('resultpassword');
    var passwordexpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
// the password should contain at least one digit, one lower case, one higher case, and at least 8 from the mentioned characters.
    if (passwordexpression.test(passwordField)===true) {
        resultpassword.textContent = 'Your new password is: ' + passwordField;
    } else {
        resultpassword.textContent = "Please enter a valid password: at least 8 characters, including one digit, one lower case and one higher case";
    }
}
// use an eventlistener for the event
var subButtonpassword = document.getElementById('subButtonpassword');
subButtonpassword.addEventListener('click', getUserPassword, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("passwordField", passwordField.value);
var mynewpassword = localStorage.getItem("passwordField");

//get name from what the user has written
function getUserName() {
    var nameField = document.getElementById("nameField").value;
    var resultname = document.getElementById('resultname');
    var nameexpression = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    //https://www.regextester.com/93648
// if the input complies with the expression, then return true, otherwise return false.    
    if (nameexpression.test(nameField)===true) {
        resultname.textContent = 'Your new name is: ' + nameField;
    } else {
        resultname.textContent = "Please enter a valid name";
    }
}
// use an eventlistener for the event
var subButtonname = document.getElementById('subButtonname');
subButtonname.addEventListener('click', getUserName, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("nameField", nameField.value);
var mynewname = localStorage.getItem("nameField");

//get Surname from what the user has written
function getUserSurname() {
    var surnameField = document.getElementById("surnameField").value;
    var resultsurname = document.getElementById('resultsurname');
    var surnameexpression = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    //https://www.regextester.com/93648
// if the input complies with the expression, then return true, otherwise return false.    
    if (surnameexpression.test(surnameField)===true) {
        resultsurname.textContent = 'Your new surname is: ' + surnameField;
    } else {
        resultsurname.textContent = "Please enter a valid surname";
    }
}
// use an eventlistener for the event
var subButtonsurname = document.getElementById('subButtonsurname');
subButtonsurname.addEventListener('click', getUserSurname, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("surnameField", surnameField.value);
var mynewsurname = localStorage.getItem("surnameField");