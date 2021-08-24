function countdown(){
    var now = new Date();

    var eventDate = new Date("August 27 2021");
    var eventTime =  eventDate.getTime();

    var currentTime = now.getTime();
    var remTime = eventTime - currentTime;


    if(remTime < 0){
        clearInterval(interval);
    }
    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h<10) ? "0" + h : h;
    m = (m< 10) ? "0" +m : m;
    s = (s<10) ? "0" +s : s;
    d=(d<10)?"0"+d:d;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

}

var interval=setInterval(countdown, 1000)
