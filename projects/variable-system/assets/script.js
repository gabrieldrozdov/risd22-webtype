document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start();
  $(".start").hide();
  $("#scene").show();
  setInterval(setTime, 1000);
  setTime();
});

/* Tick tock */
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var ticktock = true;

function setTime() {
    const now = new Date();
    const tick = new Tone.Player("assets/tick.mp3").toDestination();
    const tock = new Tone.Player("assets/tock.mp3").toDestination();

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

/* Hover sound */
const synth = new Tone.Synth().toDestination();

$(".space-content").mouseenter(function() {
  synth.triggerAttackRelease("C4", "8n");
});

/* Generate spaces */
var alreadyBuilt = [];
function buildSpaces() {
    var transX = String(Math.random() * 2000 * (Math.round(Math.random()) ? 1 : -1));
    var transY = String(Math.random() * 2000 * (Math.round(Math.random()) ? 1 : -1));
    if (alreadyBuilt.includes(transX) || alreadyBuilt.includes(transY)) {
      var breakLoop = false;
      while (breakLoop == false) {
        transX = String(Math.random() * 2000 * (Math.round(Math.random()) ? 1 : -1));
        transY = String(Math.random() * 2000 * (Math.round(Math.random()) ? 1 : -1));
          if (alreadyBuilt.includes(transX) == false & alreadyBuilt.includes(transY) == false) {
            breakLoop = true;
        }
      }
    }
    document.getElementById("scene").innerHTML += 
      "<div class='space' style='transform:translate("+transX+"px,"+transY+"px)'><div class='space-content'><h2>THIS ___ IS OPEN</h2></div></div>";
}
for (let i = 0; i < 50; i++) {
    buildSpaces();
}
