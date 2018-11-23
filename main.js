/*
    ######################################################
    ##### Login and registration using LOCAL STORAGE #####
    ######################################################
    - Attempt system is missing
    - Either an empty or pre-filled database needs to be created first to use the login and registration
*/

// Clear Local Storage, create an empty Database and reset current User state
function createEmptyDatabase() {
    localStorage.clear();

    var users = [];

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", "null");
}

// Clear Local Storage, create a pre-filled Database and reset current User state
function createPrefilledDatabase() {
    localStorage.clear();

    var users = [];

    user0 = {
        "firstname": "Michael",
        "lastname": "Jackson",
        "birthday": "1958-08-29",
        "gender": "Male",
        "address": {
            "streetname": "King of Pop Street",
            "streetnumber": "12",
            "zip": "1234",
            "city": "Copenhagen",
            "country": "Denmark"
        },
        "contact": {
            "phone": "0123456789",
            "email": "mjackson@gmail.com",
            "password": "12345"
        },
        "payment": {
            "ctype": "Visa",
            "cnumber": "1234123412341234",
            "cholder": "Michael Jackson",
            "cexpiry": "2020-01-01",
            "csecurity": "123"
        },
        "subscription": "4"
    }
    user1 = {
        "firstname": "Elvis",
        "lastname": "Presley",
        "birthday": "1935-01-08",
        "gender": "Male",
        "address": {
            "streetname": "King of Rock and Roll Street",
            "streetnumber": "12",
            "zip": "1234",
            "city": "Copenhagen",
            "country": "Denmark"
        },
        "contact": {
            "phone": "0123456789",
            "email": "epresley@gmail.com",
            "password": "12345"
        },
        "payment": {
            "ctype": "Visa",
            "cnumber": "1234123412341234",
            "cholder": "Elvis Presley",
            "cexpiry": "2020-01-01",
            "csecurity": "123"
        },
        "subscription": "4"
    }

    var users = [user0, user1];

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", "null");
}

/*
    ######################################################
    ### Active user can be kicked out if not used here ###
    ######################################################
*/
// Validate login data and forward user to profile page if successful
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    activeUser = localStorage.getItem("activeUser");

    // IF -> User is registered and verified, forward to Profile
    // ELSE -> Noone is logged in at the moment
    if (activeUser == "null") {

        // IF -> User is registered, active user is stored in Local Storage, user gets forwarded to profile
        // ELSE -> User is not registered and gets denied
        if (validate(email, password) == true) {

            // set current user state
            localStorage.setItem("activeUser", email);

            // forward user to profile
            window.location = "profile.html";
        }
    }
    else {
        alert("User is already logged in and will be forwarded to the profile without validation. Active User = " + activeUser);
        window.location = "profile.html";
    }
}

// Searchs for a combination of "email" and "password" in the existing database "users"
// - returns "true" for an existing user
// - returns "false" for a non existing user or a false email, password combination
function validate(email, password) {
    users = JSON.parse(localStorage.getItem("users"));

    for (let index = 0; index < users.length; index++) {
        if (users[index].contact.email == email) {
            if (users[index].contact.password == password) {
                alert("Login successfull.");
                return true;
            }
            else {
                alert("Wrong E-Mail or Password");
                return false;
            }
        }
    }
    alert("User not registered. Please sign up for one of our subscription plans.")
    return false;
}

/* signUp Function for the old registration
function signUp() {
    // Retrieve all data to register the new User
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var birthday = document.getElementById("birthday").value;
    var gender = $('input[name=gender]:checked').val();
    var streetname = document.getElementById("streetname").value;
    var streetnumber = document.getElementById("streetnumber").value;
    var zip = document.getElementById("zip").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ctype = $('input[name=ctype]:checked').val();
    var cnumber = document.getElementById("cnumber").value;
    var cholder = document.getElementById("cholder").value;
    var cexpiry = document.getElementById("cexpiry").value;
    var csecurity = document.getElementById("csecurity").value;
    var sub = JSON.parse(localStorage.getItem("sub"));
    if (userExists(email)) {
        alert("User is already registered. Please log in instead.");
        window.location = "index.html#login";
    }
    else {
        users = JSON.parse(localStorage.getItem("users"));
        newUser = {
            "firstname": firstname,
            "lastname": lastname,
            "birthday": birthday,
            "gender": gender,
            "address": {
                "streetname": streetname,
                "streetnumber": streetnumber,
                "zip": zip,
                "city": city,
                "country": country
            },
            "contact": {
                "phone": phone,
                "email": email,
                "password": password
            },
            "payment": {
                "ctype": ctype,
                "cnumber": cnumber,
                "cholder": cholder,
                "cexpiry": cexpiry,
                "csecurity": csecurity
            },
            "subscription": sub
        }
        users.push(newUser);
        alert("User has been registered");
        localStorage.setItem("users", JSON.stringify(users));
        window.location = "confirmation.html";
    }
}*/

/*############# REGISTRATION FORM VALIDATION ############### */
//Twinkle - My code starts here
//The validate function should be linked to Sign up button
function validateRegistration(registerForm) {
    //Declare variables for personal details section
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var streetname = document.getElementById('streetname').value;
    var streetnumber = document.getElementById('streetnumber').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').selectedIndex;
    var zip = document.getElementById('zip').value;
    var birthday = document.getElementById('birthday').value;
    var gender = document.getElementById('gender').value;

    //Declare variables for contact and login section
    var phonenumber = document.getElementById('phonenumber').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordcheck = document.getElementById('passwordcheck').value;

    //Declare variables for Payment section
    var cardtype = document.getElementById('ctype').selectedIndex;
    var cardholderName = document.getElementById('cholder').value;
    var cardnumber = document.getElementById('cnumber').value;
    var expm = document.getElementById('expm').value;
    var expy = document.getElementById('expy').value;
    var cvc = document.getElementById('csecurity').value;
    var checkbox = document.getElementById('checkbox').checked;


    //Declare regular expressions as variables
    var nameRegex = /^([a-zA-z\s]{4,32})$/
    var postcodeRegex = /^([0-9]{4})$/;
    var streetnameRegex = /^[a-zA-Z æøåÆØÅ]*$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
    var phoneRegex = /^[0-9]+$/;
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var nameRegex = /^([a-zA-z\s]{4,32})$/

    //If firstname field is empty or input does not match regular expression, display alert
    if (firstname.length == 0 || !nameRegex.test(firstname)) {
        alert("Please fill in your firstname");
        // firstnameError.textContent = "Please fill in your firstname!";
        // document.getElementById("firstname").style.borderColor = "red";
        document.getElementById("firstname").focus();
        return false;
    }
    //If lastname field is empty or input does not match regular expression or input value is same as firstname,display aler
    if (lastname.length == 0 || !nameRegex.test(lastname) || lastname === firstname) {
        alert("Please fill in the lastname");
        document.getElementById("lastname").focus();
        // document.getElementById("lastname").style.borderColor = "red";
        return false;
    }
    //If streetname field is empty or input does not match regular expression, display alert
    //Regular expression allows only alphabets and danish special characters
    if (streetname.length == 0 || !streetnameRegex.test(streetname)) {
        alert("Please fill in the street name");
        document.getElementById("streetname").focus();
        return false;
    }
    //If streetnumber field is empty, display alert
    if (streetnumber.length == 0) {
        alert("Please fill in the streetnumber");
        document.getElementById("streetnumber").focus();
        return false;
    }
    //If city is not chosen, display alert
    if (city == "") {
        alert("Please select in the city");
        document.getElementById("city").focus();
        return false;
    }
    //If country is not chosen display alert
    if (country == "0") {
        alert("Please select a country");
        document.getElementById("country").focus();
        return false;
    }
    //If input value is empty or doesn't match regular expression, display alert
    //Regular expression allows only 4 digits
    if (zip.length == 0 || !postcodeRegex.test(zip)) {
        alert("Please enter valid postal code");
        // document.getElementById("zip").style.borderColor = "red";
        document.getElementById("zip").focus();
        return false;
    }
    //NB!Only checks for empty field.Does not validate any minimum age
    if (birthday.length == 0) {
        alert("Please enter birthday. Only users above 18 can subscribe");
        document.getElementById("birthday").focus();
        return false;
    }
    //If gender is not selected, display alert
    if (gender == "0") {
        alert("Please select your gender");
        document.getElementById("gender").focus();
        return false;
    }
    //If phone number field is empty or phone number doesn't match regex, display alert
    if (phonenumber.length == 0 || !phoneRegex.test(phonenumber)) {
        alert("Please enter valid phone number");
        document.getElementById("phonenumber").focus();
        return false;
    }
    //If e-mail field is empty or input doesn't match regex, display alert
    if (email.length == 0 || !emailRegex.test(email)) {
        alert("Please enter valid e-mail");
        document.getElementById("email").focus();
        return false;
    }
    //If password field is empty or input doesn't match regex, display alert
    if (password.length == 0 || !passwordRegex.test(password)) {
        alert("Password field must not be empty");
        document.getElementById("password").focus();
        return false;
    }
    //Checks if repeat password field is not empty and matches first password
    if (passwordcheck.length == 0 || passwordcheck !== password) {
        alert("Please repeat the password");
        document.getElementById("passwordcheck").focus();
        return false;
    }
    //If selection's value is 0, then alert shall display
    if (cardtype == "0") {
        alert("Please select a card");
        document.getElementById("ctype").focus();
        return false;
    }
    // If cardnumber field is empty, display alert
    if (cardnumber.length == 0) {
        alert("Card no. field must not be empty");
        document.getElementById("cnumber").focus();
        return false;
    }
    //If Visa selected check if input in cardnumber field matches Visa regex
    if (cardtype == "1") {
        if (!visaRegEx.test(cardnumber)) {
            alert("Error: Please enter valid Visa card number");
            document.getElementById("cnumber").focus();
            return false;
        }
    }
    //If Mastercard selected, check if input in cardnumber field matches Mastercard regex
    if (cardtype == "2") {
        if (!mastercardRegEx.test(cardnumber)) {
            alert("Error: Please enter valid Mastercard number");
            document.getElementById("cardnumber").focus();
            return false;
        }
    }
    //If name text field is empty or input does NOT match name regex, display alert
    if (cardholderName.length == 0 || !nameRegex.test(cardholderName)) {
        alert("Please enter name as mentioned on the card");
        document.getElementById("cholder").focus();
        return false;
    }
    //If expiry month field is empty or value is greater than or equal to 13, display alert
    if (expm.length == 0 || expm >= 13) {
        alert("Enter a valid month");
        document.getElementById("expm").focus();
        return false;
    }
    // //If expiry year is empty or value is less than 2018 or greater than 2022, display alert
    if (expy.length == 0 || expy < 2018 || expy > 2022) {
        alert("Please enter valid year");
        document.getElementById("expy").focus();
        return false;
    }
    // //if CVC field is empty, display alert - Any combination of three digits is allowed
    if (cvc.length == 0 || cvc.length > 3) {
        alert("Please enter valid CVC");
        document.getElementById("csecurity").focus();
        return false;
    }

    //If checkbox is not checked, display alert
    if (checkbox == false) {
        alert("Please read and agree to the terms");
        document.getElementById("checkbox").focus();
        return false;
    }
    return true;
}

function signUp() {

    // Retrieve all data from the form to register the new User
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var birthday = document.getElementById("birthday").value;

    var e = document.getElementById("gender");
    var gender = e.options[e.selectedIndex].text;

    var streetname = document.getElementById("streetname").value;
    var streetnumber = document.getElementById("streetnumber").value;
    var zip = document.getElementById("zip").value;
    var city = document.getElementById("city").value;

    var e = document.getElementById("country");
    var country = e.options[e.selectedIndex].text;

    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var e = document.getElementById("ctype");
    var ctype = e.options[e.selectedIndex].text;

    var cnumber = document.getElementById("cnumber").value;
    var cholder = document.getElementById("cholder").value;
    var cexpiry = document.getElementById("cexpiry").value;
    var csecurity = document.getElementById("csecurity").value;
    var sub = JSON.parse(localStorage.getItem("sub"));

    if (userExists(email)) {

        alert("User is already registered. Please log in instead.");
        window.location = "index.html#login";
    }
    else {

        users = JSON.parse(localStorage.getItem("users"));

        newUser = {
            "firstname": firstname,
            "lastname": lastname,
            "birthday": birthday,
            "gender": gender,
            "address": {
                "streetname": streetname,
                "streetnumber": streetnumber,
                "zip": zip,
                "city": city,
                "country": country
            },
            "contact": {
                "phone": phone,
                "email": email,
                "password": password
            },
            "payment": {
                "ctype": ctype,
                "cnumber": cnumber,
                "cholder": cholder,
                "cexpiry": cexpiry,
                "csecurity": csecurity
            },
            "subscription": sub
        }

        users.push(newUser);
        alert("User has been registered and can now log in.");

        localStorage.setItem("users", JSON.stringify(users));

        window.location = "confirmation.html";
    }
}

// Checks if delivered email is already existent in the database
function userExists(email) {

    users = JSON.parse(localStorage.getItem("users"));

    for (let index = 0; index < users.length; index++) {
        if (users[index].contact.email == email) {
            alert("It is user " + index + " who matches.")
            return true;
        }
    }
    return false;
}

// Saves chosen subscription plan for registration to Local Storage
function sub(plan) {
    if (plan == 1) {
        localStorage.setItem("sub", JSON.stringify("1"));
    }
    else if (plan == 2) {
        localStorage.setItem("sub", JSON.stringify("2"));
    }
    else if (plan == 3) {
        localStorage.setItem("sub", JSON.stringify("3"));
    }
    else if (plan == 4) {
        localStorage.setItem("sub", JSON.stringify("4"));
    }
    else {
        alert("Please choose subscription plan on main page first.");
    }
}

function logout() {
    localStorage.setItem("activeUser", "null");
    alert("Active user set to 'null'");
    window.location = "index.html";
}