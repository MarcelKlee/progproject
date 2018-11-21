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