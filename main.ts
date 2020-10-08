radio.onReceivedNumberDeprecated(function (receivedNumber) {
    for (let index = 0; index <= 4; index++) {
        led.plot(receivedNumber, index)
        basic.pause(100)
        led.unplot(receivedNumber, index)
    }
    led.plot(x, y)
    if (receivedNumber == x) {
        if (liv == 0) {
            basic.showIcon(IconNames.Skull)
            while (true) {
                basic.pause(100)
            }
            liv += -1
        } else {
            liv += -1
            for (let index = 0; index <= 1; index++) {
                for (let i = 0; i <= 4; i++) {
                    led.plot(i, i)
                    led.plot(4 - i, i)
                }
                basic.pause(100)
                basic.clearScreen()
                basic.pause(100)
            }
            led.plot(x, y)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (liv > 0) {
        if (x > 0) {
            led.toggle(x, y)
            x += -1
            led.toggle(x, y)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (liv > 0) {
        ball_x = x
        led.plot(x, y)
        for (let index = 0; index <= 3; index++) {
            led.plot(ball_x, 3 - index)
            basic.pause(100)
            led.unplot(ball_x, 3 - index)
        }
        radio.sendNumber(ball_x)
    }
})
input.onButtonPressed(Button.B, function () {
    if (liv > 0) {
        if (x < 4) {
            led.toggle(x, y)
            x += 1
            led.toggle(x, y)
        }
    }
})
let ball_x = 0
let liv = 0
let y = 0
let x = 0
x = 2
y = 4
led.plot(x, y)
liv = 3
