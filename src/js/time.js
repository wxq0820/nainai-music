export default function timeTool (time) {
    let minute = Math.floor(time / (60 * 1000))
    let second = Math.floor(time / 1000 % 60)
    second = second < 10 ? '0' + second : second
    minute = minute < 10 ? '0' + minute : minute
    return minute + ':' + second
}