basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        images.createBigImage(`
            . # . . # # . . . #
            # . # . # . # . # .
            # # # . # . # . # #
            # . # . # . # . # .
            # . # . # # . . # .
            `).scrollImage(0, 150)
        images.createBigImage(`
            . . # . # . # . # .
            # . # # # . # . # .
            # . # . # . # # . .
            # . # . # . # . # .
            # . # . # . # . # .
            `).scrollImage(0, 150)
        images.createBigImage(`
            . # . . . # # . # #
            # . # . . # # . # #
            # . # . . . . # . .
            # . # . . # . . . #
            . # . . . . # # # .
            `).scrollImage(0, 150)
    }
    if (input.buttonIsPressed(Button.B)) {
        images.createBigImage(`
            # # . # . # . . # .
            # . . # . # . . # .
            # # . # . # . . # .
            # . . # . # . . # .
            # . . # . # # . # .
            `).scrollImage(0, 150)
        images.createBigImage(`
            # # . . # . # . . #
            # . # . # . # . # .
            # # . . # # . . # .
            # . . . # . # . # .
            # . . . # . # . . #
            `).scrollImage(0, 150)
        images.createBigImage(`
            . . . . . # # . # #
            # . . . . # # . # #
            # . . . . . . # . .
            # . . . . # . . . #
            . . . . . . # # # .
            `).scrollImage(0, 150)
    }
    basic.pause(1000)
    basic.clearScreen()
})
