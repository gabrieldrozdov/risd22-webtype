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

  /* Hover sound */
  const vol = new Tone.Volume(-12);
  const synth = new Tone.PolySynth();
  synth.set({
    oscillator: {
    type: "sine"
    },
    envelope: {
      attack: 0.01,
      release: 0.1,
    }
  });
  synth.chain(vol, Tone.Destination);

  freq = ["A","B","C","D","E","F","G"];
  $(".space").mouseenter(function() {
    var pitch = freq[Math.floor(Math.random()*7)];
    var octave1 = String(Math.floor(Math.random()*3+3));
    var octave2 = String(Math.floor(Math.random()*3+3));
    note1 = pitch+octave1;
    note2 = pitch+octave2;
    synth.triggerAttackRelease(note1, "4n");
    synth.triggerAttackRelease(note2, "4n");
  });
});

/* Tick tock */
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var ticktock = true;
var spaceCount = 0;

function setTime() {
    const now = new Date();
    const tick = new Audio("assets/tick.mp3");
    const tock = new Audio("assets/tock.mp3");
    const chime = new Audio("assets/govt.mp3");

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
        $(".space").removeClass("background1");
        $(".space").addClass("background2");
    } else {
        tock.play();
        ticktock = true;
        $(".space").removeClass("background2");
        $(".space").addClass("background1");
    }
    if (seconds % 10 == 0 & spaceCount < 100) {
      showSpaces();
      showSpaces();
      spaceCount += 2;
      chime.play();
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
/* Build Wikipedia api URL and fetch, then build spaces */
var url = "https://en.wikipedia.org/w/api.php"; 
var params = {
    action: "query",
    format: "json",
    list: "random",
    rnnamespace: "1",
    rnlimit: "100"
};
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)
  .then(function(response){return response.json();})
  .then(function(response) {
    var randoms = response.query.random;
    for (var r in randoms) {
        pickColRow = storeColRow[storeColRow.length-1];
        storeColRow.pop();
        var animationDirection = "normal";
        if (Math.random() > .5) {
          animationDirection = "reverse";
        }
        document.querySelector(".spaces").innerHTML += 
          "<a href='https://en.wikipedia.org/wiki/"+randoms[r].title+"' target='_blank' class='space hide' id="+String(pickColRow[0])+String(pickColRow[1])+" style='grid-column:"+pickColRow[0]+"/span 1;grid-row:"+pickColRow[1]+"/span 1; animation-duration:"+String((Math.random() * 10 + 4))+"s; animation-direction:"+animationDirection+"'><h2>"+randoms[r].title.substring(5,randoms[r].title.length)+"</h2></a>";
    }
  })
  .catch(function(error){console.log(error);});

/* Show spaces */
/* Initalize list */
var storeColRow2 = [];
for (let i = 1; i < 11; i ++) {
  for (let j = 1; j < 11; j ++) {
    storeColRow2.push([i,j]);
  }
}
/* Shuffle list */
for (var i = storeColRow2.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = storeColRow2[i];
  storeColRow2[i] = storeColRow2[j];
  storeColRow2[j] = temp;
}
function showSpaces() {
  pickColRow2 = storeColRow2[storeColRow2.length-1];
  storeColRow2.pop();
  $("#"+String(pickColRow2[0])+String(pickColRow2[1])).removeClass("hide");
}

/* Scroll with mouse movement */
$(document).mousemove(function(e) {
    if($(window).width() >= 1000){
      var percentH = (e.clientY-50) / $(window).height();
      var percentW = (e.clientX) / $(window).width()/1.5;
      $('body, html').scrollTop($(document).height() * percentH);
      $('body, html').scrollLeft($(document).width() * percentW);
    }
});