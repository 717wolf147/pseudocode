input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    music.playMelody("F A G A D F A C5 ", 185)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D A G B C5 A - B ", 120)
    music.playMelody("A E G F B D F - ", 120)
    music.playMelody("D C D - D - D C ", 153)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Butterfly)
    music.playMelody("D E F B C5 B A C5 ", 201)
})
