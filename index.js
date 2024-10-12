// retrieve score models
let homeScore = document.getElementById('home-score')
let gamePeriod = document.getElementById('game-period')
let awayScore = document.getElementById('away-score')
let homeFoul = document.getElementById('home-foul')
let awayFoul = document.getElementById('away-foul')

let homeScoreCount = 0
let awayScoreCount = 0
let gamePeriodCount = 0
let homeFoulCount = 0
let awayFoulCount = 0

// handle periods
function addGamePeriod() {
    gamePeriodCount += 1
    gamePeriod.textContent = gamePeriodCount
}


// handle score
function incrementHomeThree() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function incrementAwayThree() {
    awayScoreCount += 3
    awayScore.textContent = awayScoreCount
}

function incrementHomeTwo() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function incrementAwayTwo() {
    awayScoreCount += 2
    awayScore.textContent = awayScoreCount
}



// handle fouls
function incrementHomeFouls() {
    homeFoulCount += 1
    homeFoul.textContent = homeFoulCount

}

function incrementAwayFouls() {
    awayFoulCount += 1
    awayFoul.textContent = awayFoulCount
}

// reset fouls
function resetHomeFouls() {
    homeFoulCount = 0
    homeFoul.textContent = homeFoulCount
}

function resetAwayFouls() {
    awayFoulCount = 0
    awayFoul.textContent = awayFoulCount
}