input.onButtonPressed(Button.A, function () {
    count = 1
    for (let index = 0; index < 6; index++) {
        basic.showNumber(count)
        basic.pause(1000)
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(1000)
        count += -1
    }
})
let count = 0
basic.showString("2D07 HAZEL")
