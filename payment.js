//Create a class for card
//Classes are used to encapsulate data and functionality in one place
class Card {
    //declare constructer, it describes the setup, what constitutes card class
    constructor(cardType, ccName, ccNum, expm, expy, cvc) {
        this.cardType = cardType;
        this.ccName = ccName;
        this.ccNum = ccNum;
        this.expm = expm;
        this.expy = expy;
        this.cvc = cvc;
    }
}

//Declare function to validate my form and declare variables
function validate(myForm) {
    //Bind the input fields and get the value
    var cardType = document.getElementById('cardType');
    var cardholderName = document.getElementById('ccName');
    var cardnumber = document.getElementById('ccNum');
    var expm = document.getElementById('expm');
    var expy = document.getElementById('expy');
    var cvc = document.getElementById('cvc');
    var checkbox = document.getElementById('terms');
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var nameRegex = /^([a-zA-z\s]{4,32})$/

    //Make if statement to declare what it should match the input with for each field
    //This will work, once user clicks on SUBMIT button or presses Enter
    //If selection's value is 0, then alert shall display
    if (document.myForm.cardType.selectedIndex == "0") {
        alert("Please select a card");
        document.myForm.cardType.focus();
        return false;
    }
    // If cardnumber field is empty, display alert
    if (document.myForm.ccNum.value == "") {
        alert("Card no. field must not be empty");
        document.myForm.ccNum.focus();
        return false;
    }
    //If Visa selected check if input in cardnumber field matches Visa regex
    if (document.myForm.cardType.selectedIndex == "1") {
        if (!visaRegEx.test(myForm.ccNum.value)) {
            alert("Error: Please enter valid Visa card number");
        }
    }
    //If Mastercard selected, check if input in cardnumber field matches Mastercard regex
    if (document.myForm.cardType.selectedIndex == "2") {
        if (!mastercardRegEx.test(myForm.ccNum.value)) {
            alert("Error: Please enter valid Mastercard number");
        }
    }
    //If expiry month field is empty or value is greater than or equal to 13, display alert
    if (document.myForm.expm.value == "" || document.myForm.expm.value >= 13) {
        alert("Enter a valid month");
        document.myForm.expm.focus();
        return false;
    }
    // //If expiry year is empty or value is less than 2018 or greater than 2022, display alert
    if (document.myForm.expy.value == "" || document.myForm.expy.value < 2018 || document.myForm.expy.value>2022) {
        alert("Please enter valid year");
        document.myForm.expy.focus();
        return false;
    }
    // //if CVC field is empty, display alert - Any combination of three digits is allowed
    if (document.myForm.cvc.value == "") {
        alert("Please enter valid CVC");
        document.myForm.cvc.focus();
        return false;
    }
    //If name text field is empty or input does NOT match name regex, display alert
    if (document.myForm.ccName.value == "" || !nameRegex.test(myForm.ccName.value)) {
        alert("Please enter name as mentioned on the card");
        document.myForm.ccName.focus();
        return false;
    }
    //If checkbox is not checked, display alert
    if (document.myForm.terms.checked == false) {
        alert("Please read and agree to the terms");
        document.myForm.terms.focus();
        return false;
    }
    return true;
}

