def on_received_number_deprecated(receivedNumber):
    global liv
    for index in range(5):
        led.plot(receivedNumber, index)
        basic.pause(100)
        led.unplot(receivedNumber, index)
    led.plot(x, y)
    if receivedNumber == x:
        if liv == 0:
            basic.show_icon(IconNames.SKULL)
            while True:
                basic.pause(100)
            liv += -1
        else:
            liv += -1
            for index2 in range(2):
                for i in range(5):
                    led.plot(i, i)
                    led.plot(4 - i, i)
                basic.pause(100)
                basic.clear_screen()
                basic.pause(100)
            led.plot(x, y)
radio.on_received_number_deprecated(on_received_number_deprecated)

def on_button_pressed_a():
    global x
    if liv > 0:
        if x > 0:
            led.toggle(x, y)
            x += -1
            led.toggle(x, y)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global ball_x
    if liv > 0:
        ball_x = x
        led.plot(x, y)
        for index3 in range(4):
            led.plot(ball_x, 3 - index3)
            basic.pause(100)
            led.unplot(ball_x, 3 - index3)
        radio.send_number(ball_x)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global x
    if liv > 0:
        if x < 4:
            led.toggle(x, y)
            x += 1
            led.toggle(x, y)
input.on_button_pressed(Button.B, on_button_pressed_b)

ball_x = 0
liv = 0
y = 0
x = 0
x = 2
y = 4
led.plot(x, y)
liv = 3