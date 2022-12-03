let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homeAddOnePoint() {
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function homeAddTwoPoints() {
    homeScore += 2
    homeScoreEl.textContent = homeScore 
}

function homeAddThreePoints() {
    homeScore += 3
    homeScoreEl.textContent = homeScore 
}


function guestAddOnePoint() {
    guestScore += 1
    guestScoreEl.textContent = guestScore 
}

function guestAddTwoPoints() {
    guestScore += 2
    guestScoreEl.textContent = guestScore 
}

function guestAddThreePoints() {
    guestScore += 3
    guestScoreEl.textContent = guestScore 
}