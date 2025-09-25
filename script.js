const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const currentRole = document.getElementById('currentRole');
const recommendation = document.getElementById('recommendation');
const favoriteFeature = document.getElementById('favoriteFeature');
const improvement = document.getElementById('improvement');
const comment = document.getElementById('comment');
const submit = document.getElementById('submit');

function checkName(name) {
    let message = "";
    if(name.length == "") {
        message = "There is no name on field";
    }
}

function checkEmail(email) {
    let message = "";
    if(email.length == "") {
        message = "There is no email on field";
    }
}

function checkAge(age) {
    let message = "";
    if(age == "") {
        message = "There is no age on field";
    }

    if(isNum) {
        message += "It is not a number";
    }
}

const isNum = n =>
    typeof n === 'number' && !isNaN(n);


function checkCurrentRole(currentRole) {
    let message = "";
    if(currentRole == "") {
        message = "There is no current role selected";
    }
}

function checkRecommendation(recommendation) {
    let message = "";
    if(recommendation == "") {
        message = "There is no recommendation selected";
    }
}

function checkFavoriteFeature(favoriteFeature) {
    let message = "";
    if(favoriteFeature == "") {
        message = "There is no favorite feature selected";
    }
}

function checkImprovement(improvement) {
    let message = "";
    if(improvement) {
        message = "There is no improvement option selected";
    }
}

function checkComment(comment) {
    let message = "";
    if(comment == "") {
        message = "There is no comment selected";
    }
    return message;
}

function reviewForm() {
    let messageName = checkName();
    let messageEmail = checkEmail();
    let messageAge = checkAge();
    let messageCurrentRole = checkCurrentRole();
    let messageRecommendation = checkRecommendation();
    let messageFavoriteFeature = checkFavoriteFeature();
    let messageImprovement = checkImprovement();
    let messageComment = checkComment();
}

// Agregar una clase a los fields que esten mal como por ejemplo a los de form-item

submit.addEventListener('click', function (e) {
    
});