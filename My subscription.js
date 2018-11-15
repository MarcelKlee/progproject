function getUserSubscription() {
    var subscriptionField = document.getElementById("subscriptionField").value;
    var resultsubscription = document.getElementById('resultsubscription');   
        
    resultsubscription.textContent = 'Your new subscription is: ' + subscriptionField;
    alert ("You will now be redirected to the confirmation page.")
    window.location = "Subscription Confirmation.html"
}
// use an eventlistener for the event
var subButtonsubscription = document.getElementById('subButtonsubscription');
subButtonsubscription.addEventListener('click', getUserSubscription, false);

//save value into local storage so that it doesn't go away when we refresh the page. 
localStorage.setItem("subscriptionField", subscriptionField.value);
var mynewsubscription = localStorage.getItem("subscriptionField");
localStorage.setItem("mynewsubscription", mynewsubscription);
