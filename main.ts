let freqout = 1500
let loopNum = 0
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
    if (input.buttonIsPressed(Button.A)) {
        while (loopNum <= 4) {
            serial.writeValue("Frequency", freqout)
            serial.writeValue("Loop#", loopNum)
            music.playTone(freqout, 100)
            freqout += 500
            loopNum += 1
        }
    } else {
        loopNum = 0
        freqout = 1500
    }
})
