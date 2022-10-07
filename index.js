const startStopBtn = document.getElementById("startStopBtn")
const resetBtn = document.getElementById("resetBtn")
const timer = document.getElementById("timer")

let seconds = 0, minutes = 0, hours = 0, displaySeconds = 0, displayMinutes = 0, displayHours = 0
let timerInterval = null, timerStatus = "stopped"

function stopWatch() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0
        minutes++
        if (minutes / 60 === 1) {
            minutes = 0
            hours++
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds
    } else {
        displaySeconds = seconds
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes
    } else {
        displayMinutes = minutes
    }

    if (hours < 10) {
        displayHours = "0" + hours
    } else {
        displayHours = hours
    }

    timer.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds
}

startStopBtn.addEventListener("click", function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000)
        timerStatus = "started"
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
    } else {
        window.clearInterval(timerInterval)
        timerStatus = "stopped"
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    }
})

resetBtn.addEventListener("click", function() {
    window.clearInterval(timerInterval)
    seconds = 0
    hours = 0
    minutes = 0
    timer.textContent = "00:00:00"
    if (timerStatus === "started") {
        {
            window.clearInterval(timerInterval)
            timerStatus = "stopped"
            startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        }
    }
})