//authentification functions

//TODO: have a connection to the database

function signin(email, password) {
    return new Promise((resolve, reject) => {
        //TODO: check if email exists in the database and if it is the right password (with possibly bcrypt)
        if (email === "signin@test" && password === "test") {
            resolve({
                "email": email,
            });
        }
        else {
            reject("Wrong email or password");
        }
    });
}

function signup(email, password) {
    return new Promise((resolve, reject) => {
        //TODO: check if email already exists in the database
        if (email === "signup@test" && password === "test") {
            resolve({
                "email": email,
            });
        }
        else {
            reject("Email already exists");
        }
    });
}

module.exports = {
    signin,
    signup
};