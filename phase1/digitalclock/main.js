const time = document.getElementById("time");


function getTimeInFormat() {
    var timeText = ""; 
    const pTime = new Date();
    timeText = (pTime.getHours())
    timeText = timeText + ":" +(pTime.getMinutes())
    timeText = timeText + ":"+(pTime.getSeconds())
    time.innerText = timeText; 
}

getTimeInFormat();

setInterval(() => {
   getTimeInFormat(); 
}, 1000);

for(let i = 0; i < 100; i++){

}

console.log("asdf");
