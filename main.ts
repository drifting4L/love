input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 3368, 5000, 0, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
})
loops.everyInterval(1000, function () {
    music.setVolume(50)
    music.playMelody("E D G F B A C5 B ", 150)
    music.rest(music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("Hi!")
    basic.clearScreen()
    basic.pause(200)
})
