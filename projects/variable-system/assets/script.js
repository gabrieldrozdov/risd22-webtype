/* Start screen and initalization */
document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start();

  /* Load in elements */
  $(".start").hide();
  $(".spaces").removeClass("hide");
  $("body").addClass("initialize");

  /* Initalize clock */
  setInterval(setTime, 1000);
  setTime();

  /* Initalize clock */
  setInterval(showSpaces, 1000);
  showSpaces();

  /* Hover sound */
  const synth = new Tone.Synth().toDestination();
  $(".space").mouseenter(function() {
    synth.triggerAttackRelease("C2", "8n");
  });
});

/* Tick tock */
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var ticktock = true;

function setTime() {
    const now = new Date();
    const tick = new Audio("assets/tick.mp3");
    const tock = new Audio("assets/tock.mp3");

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
        tick.play();
        ticktock = false;
    } else {
        tock.play();
        ticktock = true;
    }
}



/* Generate spaces */
/* Initalize list */
var storeColRow = [];
for (let i = 1; i < 11; i ++) {
  for (let j = 1; j < 11; j ++) {
    storeColRow.push([i,j]);
  }
}
/* Shuffle list */
for (var i = storeColRow.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = storeColRow[i];
  storeColRow[i] = storeColRow[j];
  storeColRow[j] = temp;
}
function buildSpaces() {
  pickColRow = storeColRow[storeColRow.length-1];
  storeColRow.pop();
  var animationDirection = "normal";
  if (Math.random() > .5) {
    animationDirection = "reverse";
  }
  document.querySelector(".spaces").innerHTML += 
    "<div class='space hide' id="+String(pickColRow[0])+String(pickColRow[1])+" style='grid-column:"+pickColRow[0]+"/span 1;grid-row:"+pickColRow[1]+"/span 1; animation-duration:"+String((Math.random() * 10 + 4))+"s; animation-direction:"+animationDirection+"'><h2>hi friendo</h2></div>";
}
for (let i = 0; i < 100; i++) {
    buildSpaces();
}

/* Show spaces */
/* Initalize list */
var storeColRow = [];
for (let i = 1; i < 11; i ++) {
  for (let j = 1; j < 11; j ++) {
    storeColRow.push([i,j]);
  }
}
/* Shuffle list */
for (var i = storeColRow.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = storeColRow[i];
  storeColRow[i] = storeColRow[j];
  storeColRow[j] = temp;
}
function showSpaces() {
  pickColRow = storeColRow[storeColRow.length-1];
  storeColRow.pop();
  console.log(pickColRow);
  $("#"+String(pickColRow[0])+String(pickColRow[1])).removeClass("hide");
}

/* Scroll with mouse movement */
$(document).mousemove(function(e) {
    var percentH = (e.clientY-50) / $(window).height();
    var percentW = (e.clientX) / $(window).width();
    $('body, html').scrollTop($(document).height() * percentH);
    $('body, html').scrollLeft($(document).width() * percentW);
});
