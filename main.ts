input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(Var1)
    basic.showString("+")
    basic.showNumber(Var2)
    basic.showString("=")
    basic.showString("" + (Var1 + Var2))
})
input.onButtonPressed(Button.A, function () {
    Var1 += 1
    basic.showString("" + (Var1))
})
input.onButtonPressed(Button.AB, function () {
    Var1 = 0
    Var2 = 0
})
input.onButtonPressed(Button.B, function () {
    Var2 += 1
    basic.showString("" + (Var2))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Var1)
    basic.showIcon(IconNames.No)
    basic.showNumber(Var2)
    basic.showString("=")
    basic.showString("" + (Var1 * Var2))
})
let Var2 = 0
let Var1 = 0
Var1 = 0
Var2 = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
}
basic.showArrow(ArrowNames.North)
