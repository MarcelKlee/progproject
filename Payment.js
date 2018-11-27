//Create function to choose payment type
/*var cards={
   cardType:["Visa","Mastercard","American Express"],
   cardholderName:"Twinkle",
   cardNumber:"1234567890123456",
   expiry:"0112"
};

*/
//Submit function works
/*
function submit() {
    var i = document.getElementById("myPay");
    var strUser = i.options[i.selectedIndex].value;

    //var myPay = ["Visa", "Mastercard", "American Express"];
    //for(var i=0;i<myPay.length;i++){

    if (strUser == "None") {
        alert("Please choose a cardtype");
    } else if (strUser == "Visa") {
        alert("Visa selected");
    } else if (strUser=="Mastercard"){
        alert("Mastercard selected");
}else if (strUser=="AmericanExpress"){
    alert("American Express selected");
}else{
    alert ("Please choose a card type");
    return true;
}
}

var user1={
cardHolderName:"Twinkle",
cardNumber:"1234567890123456",
expiryMonth:"01",
expiryYear:"2018",
cvc:"123",
}

/*function checkReqFields(){
if(cardHolderName==""){
    alert ("Cardholder name required");
}else if(cardNumber==""){
    alert ("Card number required");
}else if (expiryMonth==""){
    alert ("Please fill expiry month");
}else if (expiryYear==""){
    alert ("Please fill expiry year");
}else if(cvc=""){
    alert("CVC required");
}
}
  function validate() {
        var ddl = document.getElementById("cardtype");
        var selectedValue = ddl.options[ddl.selectedIndex].value;
        if (selectedValue == "selectcard") {
            alert("Please select a card type");
        }
    }
    */
window.onload = init;
function init() {
    // Bind "onsubmit" event handler to the "submit" button
    document.getElementById("formTest").onsubmit = validateForm;
    // Set initial focus
    document.getElementById("selCard").focus();
}
    function validateForm(theForm) {
        with (theForm) {
            // return false would prevent default submission
            return (isSelected(selCard, "Please make a selection!", elmselcardtypeError)
            && isNotEmpty(cardHolderName, "Please enter your name!", elmcardHolderNameError)
                && isNumeric(cardNumber, "Please enter a valid card number!", elmcardNumberError)
                && isNumeric(expiryMonth, "Enter a valid month!", elmexpmError)
                && isNumeric(expiryYear, "Enter a valid year!", elmexpyError)
                && isNumeric(cvc, "Must be 3 digits", elmcvcError)
                && isChecked("I accept terms and conditions", "Please accept terms and conditions!", elmtermsError)
            );
        }
    }

    /*function postValidate(isValid, errMsg, errElm, inputElm) {
        if (!isValid) {
           // Show errMsg on errElm, if provided.
           if (errElm !== undefined && errElm !== null
                 && errMsg !== undefined && errMsg !== null) {
              errElm.innerHTML = errMsg;
           }
           // Set focus on Input Element for correcting error, if provided.
           if (inputElm !== undefined && inputElm !== null) {
              inputElm.classList.add("errorBox");  // Add class for styling
              inputElm.focus();
           }
        } else {
           // Clear previous error message on errElm, if provided.
           if (errElm !== undefined && errElm !== null) {
              errElm.innerHTML = "";
           }
           if (inputElm !== undefined && inputElm !== null) {
              inputElm.classList.remove("errorBox");
           }
        }
     }*/