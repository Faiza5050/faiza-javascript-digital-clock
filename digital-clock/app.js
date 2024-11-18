function digitalClock() {
    let date = new Date();
    let day = date.getDay();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let newFormat = "AM";

    newFormat = hrs >= 12 ? "PM" : "AM"

    hrs = hrs == 0 ? 12 : hrs
    hrs = hrs > 12 ? hrs - 12 : hrs
    hrs = hrs < 10 ? "0" + hrs : hrs
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    document.querySelector(".hrs").innerHTML = hrs;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
    document.querySelector(".format").innerHTML = newFormat;

    let todayDay = document.querySelector(`.days :nth-child(${day})`);
    todayDay.classList.add('active')
}
setInterval(digitalClock, 1000);
