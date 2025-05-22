

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

function homeAddOne() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function homeAddTwo() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function homeAddThree() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function guestAddOne() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function guestAddTwo() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function guestAddThree() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}