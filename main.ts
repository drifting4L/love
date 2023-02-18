input.onButtonPressed(Button.A, function () {
    while (true) {
        led.stopAnimation()
        music.stopAllSounds()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 3368, 5000, 0, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("Alert!")
    basic.clearScreen()
    basic.pause(200)
})
loops.everyInterval(200, function () {
    music.setVolume(50)
    music.playMelody("E D G F B A C5 B ", 110)
    music.rest(music.beat(BeatFraction.Breve))
})
