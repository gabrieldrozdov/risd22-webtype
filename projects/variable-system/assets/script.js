/* Parallax */
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


/* Background color */
var t = new Date().getHours();
const daylightColors = ["#311f62","#422865","#523167","#633a6a","#74436d","#844c70","#955472","#a55d75","#b66678","#c76f7b","#d7787d","#e88180","#e88180","#d7787d","#c76f7b","#b66678","#a55d75","#955472","#844c70","#74436d","#633a6a","#523167","#422865","#311f62"];
for (let i = 0; i < 24; i++) {
    if (t == i) {
        document.body.style.backgroundColor = daylightColors[i];
        break;
    }    
}

var intervalId = window.setInterval(function(){
  /// call your function here
}, 2000);


/* Tick tock */

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var ticktock = true;
const tick = new Tone.Player("assets/tick.mp3").toDestination();
const tock = new Tone.Player("assets/tock.mp3").toDestination();

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (ticktock == true) {
        tick.restart();
        ticktock = false;
    } else {
        tock.restart();
        ticktock = true;
    }
}

setInterval(setTime, 1000);

setTime();

/* Hover sound */
const synth = new Tone.Synth().toDestination();

$(".big-grid div").mouseenter(function() {
  synth.triggerAttackRelease("C4", "8n");
});