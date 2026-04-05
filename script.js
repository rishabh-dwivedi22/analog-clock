let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


let digitalTime = document.getElementById('digital-time');
let dateDisplay = document.getElementById('date-display');

function displaytime() {
    let date = new Date();


    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();


    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm + (0.1 * ss);

    let sRotation = 6 * ss + (6 * ms / 1000);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


    if (digitalTime) {
        let h = hh;
        let ampm = h >= 12 ? 'PM' : 'AM';

        h = h % 12;
        h = h ? h : 12;


        let mStr = mm < 10 ? '0' + mm : mm;
        let sStr = ss < 10 ? '0' + ss : ss;

        digitalTime.innerHTML = `${h}:${mStr}:${sStr} <span style="font-size: 0.6em;">${ampm}</span>`;
    }


    if (dateDisplay) {
        const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

        dateDisplay.innerText = date.toLocaleDateString('en-IN', dateOptions);
    }


    requestAnimationFrame(displaytime);
}


displaytime();