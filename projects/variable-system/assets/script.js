/* Background color */
var t = new Date().getHours();
const daylightColors = ["#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22","#ffca22"];
for (let i = 0; i < 24; i++) {
    if (t == i) {
        document.body.style.backgroundColor = daylightColors[i];
        break;
    }    
}

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

/* Generate spaces */
function addCode() {
    var depth = (Math.random() * (0.5 - 7.0) + 7.0).toFixed(2);
    var transX = String(Math.random() * 300 * (Math.round(Math.random()) ? 1 : -1));
    var transY = String(Math.random() * 200 * (Math.round(Math.random()) ? 1 : -1));
    document.getElementById("scene").innerHTML += 
      "<div class='space' data-depth="+depth+"><a href='#''><div class='space-position' style='transform:translate("+transX+"vw,"+transY+"vh)'><div class='space-content'><h2>THIS ___ IS OPEN</h2></div></div></a></div>";
    console.log(depth, transX, transY);
}
for (let i = 0; i < 100; i++) {
    addCode();
}

/* Initiate parallax */
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
