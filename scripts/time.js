function timeDisplay() {
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let dayOfWeek = date.getDay();
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    let unixtime = Math.floor(date.getTime() / 1000);
    document.getElementById('y').textContent = year;
    document.getElementById('m').textContent = month;
    document.getElementById('d').textContent = day;

    let week = [0, 0, 0, 0, 0, 0, 0];
    week.splice(dayOfWeek, 1, 1);
    let documentIds = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    for (i = 0; i < 7; i++) {
        if (week[i] == 1) {
            document.getElementById(documentIds[i]).style.display = 'inline';
        } else {
            document.getElementById(documentIds[i]).style.display = 'none';
        }
    }

    document.getElementById('h').textContent = hour;
    document.getElementById('mi').textContent = minute;
    document.getElementById('s').textContent = second;
    document.getElementById('unixtime').textContent = unixtime;
};

setInterval(() => {
    timeDisplay();
}, 1);
