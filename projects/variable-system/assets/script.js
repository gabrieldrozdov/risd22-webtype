/* Start screen and initalization */
document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start();

  /* Load in elements */
  $(".start").hide();
  $(".content").removeClass("hide");

  /* Initalize clock */
  setInterval(setTime, 1000);
  setTime();

  /* Hover sound */
  const vol = new Tone.Volume(-12);
  const synth1 = new Tone.PolySynth();
  const synth2 = new Tone.PolySynth();
  const synth3 = new Tone.PolySynth();
  const synth4 = new Tone.PolySynth();
  synth1.set({
    oscillator: {
    type: "sine"
    },
    envelope: {
      attack: 0.01,
      release: 0.01,
    }
  });
  synth2.set({
    oscillator: {
    type: "square"
    },
    envelope: {
      attack: 0.01,
      release: 0.01,
    }
  });
  synth3.set({
    oscillator: {
    type: "triangle"
    },
    envelope: {
      attack: 0.01,
      release: 1,
    }
  });
  synth4.set({
    oscillator: {
    type: "sawtooth12"
    },
    envelope: {
      attack: 0.15,
      release: .5,
    }
  });
  synth1.chain(vol, Tone.Destination);
  synth2.chain(vol, Tone.Destination);
  synth3.chain(vol, Tone.Destination);
  synth4.chain(vol, Tone.Destination);

  freq = ["A","B","C","D","E","F","G"];
  $(".place1").mouseenter(function() {
    var pitch1 = freq[Math.floor(Math.random()*7)];
    var pitch2 = freq[Math.floor(Math.random()*7)];
    var octave1 = String(Math.floor(Math.random()*3+2));
    var octave2 = String(Math.floor(Math.random()*3+2));
    var octave3 = String(Math.floor(Math.random()*3+3));
    var octave4 = String(Math.floor(Math.random()*3+3));
    note1 = pitch1+octave1;
    note2 = pitch1+octave2;
    note3 = pitch2+octave3;
    note4 = pitch2+octave4;
    synth1.triggerAttackRelease(note1, "32n");
    synth1.triggerAttackRelease(note2, "16n");
    synth1.triggerAttackRelease(note3, "8n");
    synth1.triggerAttackRelease(note4, "4n");
  });
  $(".place2").mouseenter(function() {
    var pitch = freq[Math.floor(Math.random()*7)];
    var octave1 = String(Math.floor(Math.random()*2+4));
    var octave2 = String(Math.floor(Math.random()*2+4));
    note1 = pitch+octave1;
    note2 = pitch+octave2;
    synth2.triggerAttackRelease(note1, "32n");
    synth2.triggerAttackRelease(note2, "32n");
  });
  $(".place3").mouseenter(function() {
    var pitch = freq[Math.floor(Math.random()*3+3)];
    var octave = String(Math.floor(Math.random()*3+3));
    note = pitch+octave;
    synth3.triggerAttackRelease(note, "8n");
    synth3.triggerAttackRelease(pitch+String(Math.floor(Math.random()*3+5)), "16n");
  });
  $(".place4").mouseenter(function() {
    var pitch = freq[Math.floor(Math.random()*7)];
    var octave = String(Math.floor(Math.random()*2));
    note = pitch+octave;
    synth4.triggerAttackRelease(note, "16n");
    synth4.triggerAttackRelease(pitch+String(Math.floor(Math.random()*2+1)), "8n");
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
        $(".place1").removeClass("place1-background1");
        $(".place1").addClass("place1-background2");
        $(".place2").removeClass("place2-background1");
        $(".place2").addClass("place2-background2");
        $(".place3").removeClass("place3-background1");
        $(".place3").addClass("place3-background2");
        $(".place4").removeClass("place4-background1");
        $(".place4").addClass("place4-background2");
    } else {
        tock.play();
        ticktock = true;
        $(".place1").removeClass("place1-background2");
        $(".place1").addClass("place1-background1");
        $(".place2").removeClass("place2-background2");
        $(".place2").addClass("place2-background1");
        $(".place3").removeClass("place3-background2");
        $(".place3").addClass("place3-background1");
        $(".place4").removeClass("place4-background2");
        $(".place4").addClass("place4-background1");
    }
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