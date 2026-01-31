let hr = document.getElementById('hour');
let min = document.getElementById('min'); // Make sure HTML mein ID 'min' hai
let sec = document.getElementById('sec');

function displaytime() {
    let date = new Date();

    // Time calculations
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Date and Day Logic (Merging here)
    let day = date.getDate();
    let dayIndex = date.getDay();
    let daysArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    document.getElementById("day-name").innerHTML = daysArray[dayIndex];
    document.getElementById("day-number").innerHTML = day;
}

setInterval(displaytime, 1000);