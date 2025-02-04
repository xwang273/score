let homeCount = 0
let homeScore = document.getElementById("homescore")

let guestCount = 0
let guestScore = document.getElementById("guestscore")

function add1(){
    homeCount +=  1
    homeScore.innerText = homeCount 
    }

function add1g(){
    guestCount += 1
    guestScore.innerText = guestCount
    }

function add2(){
    homeCount +=  2
    homeScore.innerText = homeCount
    }

function add2g(){
    guestCount += 2
    guestScore.innerText = guestCount
    }

function add3(){
    homeCount +=  3
    homeScore.innerText = homeCount 
    }

function add3g(){
    guestCount += 3
    guestScore.innerText = guestCount
    }