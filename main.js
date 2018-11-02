/*
    ######################################################
    ##### Login and registration using simple ARRAY #####
    ######################################################
*/

// Create a class describing all users
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

// Create different users
var user0 = new User("max@gmail.com", "12345");
var user1 = new User("lisa@gmail.com", "1234");

// Store all users in an Array
var users = [user0, user1];

// Saves the input of the Login form in variables
// - forwards an existing user to the profile page
// - denies a non existing user
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (validate(users, email, password) == true) {
        alert("Login successfully");
        window.location = "profile.html";
    }
    else {
        alert("Denied");
    }
}

// Searchs for a combination of "email" and "password" in the existing database "users"
// - returns "true" for an existing user
// - returns "false" for a non existing user
function validate(users, email, password) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].email == email && users[index].password == password) {
            alert("It is user " + index + " who matches.")
            return true;
        }
    }
    return false;
}

function register() {
    var email = document.getElementById("suemail").value;

    if (userRegistered(email)) {
        alert("User is already registered.");
    }
    else {
        var user2 = new User(document.getElementById("suemail").value, document.getElementById("supassword").value);
        users.push(user2);
        alert("User has been registered");
    }
}

function userRegistered(email) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].email == email) {
            alert("It is user " + index + " who matches.")
            return true;
        }
    }
    return false;
}

/*
    ######################################################
    ##### Login and registration using LOCAL STORAGE #####
    ######################################################
    - Attempt system is still missing
    - registration doesn't work
    - Function "lstInit" needs to be called once to make everything work (not so nice)
*/

// Clear and initialize Local Storage ("Database")
function lstInit() {
    localStorage.clear();

    myUser0 = { "email": "max@gmail.com", "password": 12345 };
    myUser1 = { "email": "lisa@gmail.com", "password": 1234 };

    var myUsers = [myUser0, myUser1];

    // Store JSON objects in LocalStorage
    localStorage.setItem("myUsers", JSON.stringify(myUsers));

    // "activeEmail" is used to identify a logged in user
    localStorage.setItem("activeEmail", "null");
}


// Login verification
function lstLogin() {
    // Get data from the login form
    var email = document.getElementById("emails").value;
    var password = document.getElementById("password").value;

    alert("Email: " + email + " and Password: " + password);

    activeEmail = localStorage.getItem("activeEmail");

    /*  
        IF -> User is registered and verified, forward to Profile
        ELSE -> Noone is logged in at the moment
    
        In future, the if-statement can identify if a user is already logged in and forward the user directly
        to the profile page. To add that function, just put "activeEmail == "null"" into the if-statement". 
        Function is deactivated for testing. 
    */
    if (true) {
        /*
            IF -> User is registered, active user is stored in Local Storage, user gets forwarded to profile
            ELSE -> User is not registered and gets denied
        */
        if (lstValidate(email, password) == true) {
            localStorage.setItem("activeEmail", email);
            alert("Login successfully");
            window.location = "profile.html";
        }
        else {
            alert("Denied");
        }
    }
    else {
        alert("User is already logged in and will be forwarded to the profile without validation.");
        window.location = "profile.html";
    }
}

// Searchs for a combination of "email" and "password" in the existing database "users"
// - returns "true" for an existing user
// - returns "false" for a non existing user
function lstValidate(email, password) {

    myUsers = JSON.parse(localStorage.getItem("myUsers"));

    for (let index = 0; index < myUsers.length; index++) {
        if (myUsers[index].email == email && myUsers[index].password == password) {
            return true;
        }
    }
    return false;
}

function lstRegister() {
    var email = document.getElementById("suemail").value;

    if (lstUserRegistered(email)) {
        alert("User is already registered.");
    }
    else {
        myUsers = JSON.parse(localStorage.getItem("myUsers"));

        var email = document.getElementById("suemail").value;
        var password = document.getElementById("supassword").value;

        myUser2 = { "email": email, "password": password };

        myUsers.push(myUser2);
        alert("User has been registered");

        localStorage.clear();
        localStorage.setItem("myUsers", JSON.stringify(myUsers));
    }
}

function lstUserRegistered(email) {

    myUsers = JSON.parse(localStorage.getItem("myUsers"));

    for (let index = 0; index < myUsers.length; index++) {
        if (myUsers[index].email == email) {
            alert("It is user " + index + " who matches.")
            return true;
        }
    }
    return false;
}