const audios = document.querySelectorAll('.audios')
document.onkeypress = logKey

const snare = audios[0]
const kick = audios[1]
const tomHigh = audios[2]
const tomMid = audios[3]
const tomLow = audios[4]
const crash = audios[5]
const ride = audios[6]
const hiHatOpen = audios[7]
const hiHatClose = audios[8]

drumsSound()


function logKey(e) {
    switch(e.code) {
        case "KeyE":
            drumsSound('crash')
            break;

        case "KeyR":
            drumsSound('ride')
            break;

        case "KeyF":
            drumsSound('tomLow')
            break;

        case "KeyG":
            drumsSound('tomMid')
            break;

        case "KeyH":
            drumsSound('tomHigh')
            break;

        case "KeyV":
            drumsSound('kick')
            break;

        case "KeyB":
            drumsSound('kick')
            break;

        case "KeyJ":
            drumsSound('snare')
            break;

        case "KeyI":
            drumsSound('hiHatOpen')
            break;

        case "KeyK":
            drumsSound('hiHatClose')
            break;
    }

}

function drumsSound(sound) {
    switch(sound) {
        case "snare":
            snare.currentTime = 0
            snare.play()
            break;

        case "kick":
            kick.currentTime = 0
            kick.play()
            break;

        case "tomHigh":
            tomHigh.currentTime = 0
            tomHigh.play()
            break;

        case "tomMid":
            tomMid.currentTime = 0
            tomMid.play()
            break;

        case "tomLow":
            tomLow.currentTime = 0
            tomLow.play()
            break;

        case "crash":
            crash.currentTime = 0
            crash.play()
            break;

        case "ride":
            ride.currentTime = 0
            ride.play()
            break;

        case "hiHatOpen":
            hiHatOpen.currentTime = 0
            hiHatOpen.play()
            break;

        case "hiHatClose":
            hiHatClose.currentTime = 0
            hiHatClose.play()
            break;
    
    }

}