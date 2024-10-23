input.onPinPressed(TouchPin.P0, function () {
    max7219_matrix.scrollText(
    "Touch",
    75,
    500
    )
})
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
