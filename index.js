let homeEl = document.getElementById("home-disp")
let guestEl = document.getElementById("guest-disp")
let homeTeamEl = document.getElementById("home-title")
let guestTeamEl = document.getElementById("guest-title")
let scoreHome = 0
let scoreGuest = 0


function homePlusOne() {
    scoreHome += 1
    homeEl.textContent = scoreHome;
    updateHighlights()
}

function homePlusTwo() {
    scoreHome += 2
    homeEl.textContent = scoreHome;
    updateHighlights()
}

function homePlusThree() {
    scoreHome += 3
    homeEl.textContent = scoreHome;
    updateHighlights()
}

function guestPlusOne() {
    scoreGuest += 1
    guestEl.textContent = scoreGuest;
    updateHighlights()
}

function guestPlusTwo() {
    scoreGuest += 2
    guestEl.textContent = scoreGuest;
    updateHighlights()
}

function guestPlusThree() {
    scoreGuest += 3
    guestEl.textContent = scoreGuest;
    updateHighlights()
}

function resetHome() {
    homeEl.textContent = 0
    scoreHome = 0
    updateHighlights()
}

function resetGuest() {
    guestEl.textContent = 0
    scoreGuest = 0
    updateHighlights()
}

function updateHighlights() {
    
if (scoreHome > scoreGuest) {
    homeEl.classList.add('highlight')
    guestEl.classList.remove('highlight')
    homeTeamEl.classList.add('highlight')
    homeTeamEl.classList.add('team-highlight')
    guestTeamEl.classList.remove('highlight')
    
} else if (scoreGuest > scoreHome) {
    guestEl.classList.add('highlight')
    homeEl.classList.remove('highlight')
    homeTeamEl.classList.remove('highlight')
    guestTeamEl.classList.add('highlight')
    guestTeamEl.classList.add('team-highlight')
} else {
    homeEl.classList.remove('highlight')
    guestEl.classList.remove('highlight')
    homeTeamEl.classList.remove('highlight')
    guestTeamEl.classList.remove('highlight')
    homeTeamEl.classList.remove('team-highlight')
    guestTeamEl.classList.remove('team-highlight')
}
}