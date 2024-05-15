
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var stopButton = document.getElementById("stopButton");
var volumeUpButton = document.getElementById("volumeUpButton");
var volumeDownButton = document.getElementById("volumeDownButton");

playButton.onclick = function() {
  audio.play();
};

pauseButton.onclick = function() {
  audio.pause();
};

stopButton.onclick = function() {
  audio.pause();
  audio.currentTime = 0;
};

volumeUpButton.onclick = function() {
  var currentVolume = Math.floor(audio.volume * 10) / 10;
  if (currentVolume < 1) audio.volume += 0.1;
};

volumeDownButton.onclick = function() {
  var currentVolume = Math.floor(audio.volume * 10) / 10;
  if (currentVolume > 0) audio.volume -= 0.1;
};
