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
    validate() {
        
    }
}
//Ask how to use this class?
//Is there easier way to validate other than if statements?
//Ask about how to make if statement for checkbox?

//Initialize an empty array
var cards = [];
//Fill it up with few cards
cards.push(new Card('Visa', 'Twinkle', 'Kahlon', '4571012301230123', '12', '2018', '123'));
cards.push(new Card('Mastercard', 'Victor', 'Lluva', '5571012301230123', '11', '2019', '321'));

//var submit = document.getElementById("submit");

//Create a function to validate the basic form
//It should prevent user from submitting empty form
var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

function validate() {
    //Bind the input fields and get the value
    var cardtype = document.getElementById('cardType');
    var cardholderName = document.getElementById('ccName');
    var cardnumber = document.getElementById('ccNum');
    var expm = document.getElementById('expm');
    var expy = document.getElementById('expy');
    var cvc = document.getElementById('cvc');
    var checkbox = document.getElementById('terms');

    //var card = cards[i];

    //Make if statement to declare what it should match the input with for each field
    //This will work, once user clicks on submit button
    //First if statement is checking, if selection's value is -1, then alert shall display
    if (document.myForm.cardType.value == "0") {
        alert("Please select a card");
        document.myForm.cardtype.focus();
        return false;
    }
    //If user selects Visa cardtype, check matching with regex for Visa -- NOT WORKING

    //If cardnumber field is empty, display alert

    if (document.myForm.ccNum.value == "") {
        alert("Please enter valid cardnumber");
        document.myForm.ccNum.focus();
        return false;
    }
    // //If expiry month field is empty, display alert
    if (document.myForm.expm.value == "") {
        alert("Numbers only, format MM");
        document.myForm.expm.focus();
        return false;
    }
    // //If expiry year is empty, display alert
    if (document.myForm.expy.value == "") {
        alert("Please enter valid year");
        document.myForm.expy.focus();
        return false;
    }
    // //if CVC field is empty, display alert
    if (document.myForm.cvc.value == "") {
        alert("Please enter valid CVC");
        document.myForm.cvc.focus();
        return false;
    }
    //    //If firstname text field is empty, display alert
    if (document.myForm.ccName.value == "") {
        alert("Please enter name as mentioned on the card");
        document.myForm.ccName.focus();
        return false;
    }
    //To do: If statement for checkbox is checked or not 
    return true;
}
//This code works

//To do: Specify using regex what type of data each field will accept
//If user enters something different, then error should display
//Important fields to validate: cardnumber, expiry month/year, cvc

//This validates user can only input alphabets in name with no spaces, no other characters or numbers
function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}

//Add mouseover function to CVC field - TO do 
//Add image of card
function displayMessage (input){
document.getElementById('cvc')="Number on back";
}