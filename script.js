function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    const date = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const time = `${hours}:${minutes}:${seconds}`;
    const dateStr = `${day}, ${date}`;

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = dateStr;
}

setInterval(updateTime, 1000);
