enum RadioMessage {
    message1 = 49434,
    forward = 16348,
    stop = 61268,
    backwards = 56537,
    left = 14947,
    right = 32391
}
radio.onReceivedMessage(RadioMessage.backwards, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -255,
    robotbit.Motors.M1B,
    -255
    )
})
input.onButtonPressed(Button.A, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
    basic.pause(2000)
    robotbit.MotorRun(robotbit.Motors.M1A, 0)
})
radio.onReceivedMessage(RadioMessage.left, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    100,
    robotbit.Motors.M1B,
    255
    )
})
radio.onReceivedMessage(RadioMessage.forward, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M1B,
    255
    )
})
radio.onReceivedMessage(RadioMessage.stop, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    0
    )
})
radio.onReceivedMessage(RadioMessage.right, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M1B,
    100
    )
})
radio.setGroup(9)
basic.showNumber(9)
basic.forever(function () {
	
})
