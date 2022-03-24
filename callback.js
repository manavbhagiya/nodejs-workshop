//Function
function greet(name, callback) {
    console.log("Hi" + " " + name);
    callback();
}

//Callback Function
function callMe() {
    console.log("I Am Callback Function.")
}

//Passing Function As An Argument
greet("Manav", callMe);