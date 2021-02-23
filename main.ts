input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(count)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(count)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(count)
    basic.showString("Sent ")
    basic.showNumber(count)
})
input.onGesture(Gesture.LogoDown, function () {
    count += 1
})
let count = 0
count = 0
radio.setGroup(1)
