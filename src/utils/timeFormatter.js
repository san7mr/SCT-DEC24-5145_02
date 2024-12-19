export function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${padNumber(centiseconds)}`;
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}