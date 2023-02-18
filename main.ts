input.onButtonPressed(Button.A, function () {
    while (true) {
        led.stopAnimation()
        music.stopAllSounds()
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (true) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Alert!")
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    music.setVolume(50)
    while (true) {
        music.playMelody("E D G F B A C5 B ", 110)
        music.rest(music.beat(BeatFraction.Whole))
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 3368, 5000, 0, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
})
