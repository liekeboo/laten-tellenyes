let Tel = 0
function Tell () {
    if (Tel % 2 == 1) {
        led.plot(4, 0)
    } else {
        led.unplot(4, 0)
    }
    if (Tel >= 8) {
        led.plot(1, 0)
    } else {
        led.unplot(1, 0)
    }
    if (Tel >= 4 && Tel < 8 || Tel >= 12) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
    if (Tel >= 2 && Tel < 4 || ((Tel >= 14 || Tel >= 6) && Tel < 8 || Tel >= 10) && Tel < 12) {
        led.plot(3, 0)
    } else {
        led.unplot(3, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    Tel = 0
})
basic.forever(function () {
    basic.pause(1000)
    Tell()
    Tel += 1
    if (Tel > 15) {
        Tel = 0
    }
})
