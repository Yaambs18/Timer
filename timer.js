function countdown(){
    var now = new Date();

    var eventDate = new Date("Aug 26 2021 21:37:0");
    var eventTime =  eventDate.getTime();
    console.log(eventTime)

    var currentTime = now.getTime();
    var remTime = eventTime - currentTime;
    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);
    var days = document.getElementById("days") 
    var hours = document.getElementById("hours")
    var min = document.getElementById("minutes")
    var sec = document.getElementById("seconds")
    

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h<10) ? "0" + h : h;
    m = (m< 10) ? "0" +m : m;
    s = (s<10) ? "0" +s : s;
    d=(d<10)?"0"+d:d;


    if(remTime <=0){
        clearInterval(interval);
        console.log("khtm") 
    }else{
        days.textContent=d
        rotate(d,days)
        hours.textContent=h
        rotate(h,hours)
        min.textContent=m
        rotate(m,min)
        sec.textContent=s
        rotate(s,sec)
    
    }

    

}
 var interval=setInterval(countdown, 1000)   

function rotate(n,card)
{
    card.style.transformStyle ="preserve-3d";
    card.style.transition="transform 0.8s";
    if(n%2==0)
    {
        card.style.transform ="rotateX(360deg)";
    }
    else{
        card.style.transform ="rotateX(0deg)"
    }
}