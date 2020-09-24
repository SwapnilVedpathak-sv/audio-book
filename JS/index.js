window.onload = function () {
  localStorage.clear();
}

////////////////////////////////////// Variable Declaration And Initilization //////////////////////////////////////

var audio = document.querySelector("audio");
var newAudio = document.getElementById("Audio2");

var titleName = document.getElementById("titleName");
var audioDiv = document.getElementById("audioDiv");
var buttonDiv = document.getElementById("buttonDiv");
var downloadOption = document.getElementById("downloadOption");

var anotherTitleName = document.getElementById("anotherTitleName");
var anotherAudioDiv = document.getElementById("anotherAudioDiv");
var anotherButtonDiv = document.getElementById("anotherButtonDiv");
var anotherDownloadBtn = document.getElementById("anotherDownloadBtn");

var favoriteBtn = document.getElementById("favoriteBtn");
var FirstSaveBtn = document.getElementById("FirstSaveBtn");
var secondSaveBtn = document.getElementById("secondSaveBtn");
var testBool = false;
var secondTestBool = false;

////////////////////////////////////// Audio Methods For Buttons To Stop Play Audio //////////////////////////////////////

function play() {
  audio.play();
};
function playAnother() {
  newAudio.play();
};
function pause() {
  audio.pause();
};
function pauseAnother() {
  newAudio.pause();
};
function resume() {
  audio.play();
};
function resumeAnother() {
  newAudio.play();
};
function stop() {
  audio.load();
};
function stopAnother() {
  newAudio.load();
};

////////////////////////////////////// Onclick Event Listener For First Save Button //////////////////////////////////////

FirstSaveBtn.addEventListener('click', function () {

  testBool = testBool ? false : true;
  if (testBool == true) {
    FirstSaveBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true" style="color:red"></i> Saved';

    setTitle = titleName.innerHTML;
    setAudioDiv = audioDiv.innerHTML;
    setButtonDiv = buttonDiv.innerHTML;
    setDownload = downloadOption.innerHTML;

    localStorage.setItem("firstTitleName", JSON.stringify(setTitle));
    localStorage.setItem("firstAudioDiv", JSON.stringify(setAudioDiv));
    localStorage.setItem("firstButtonDiv", JSON.stringify(setButtonDiv));
    localStorage.setItem("firstDownloadBtn", JSON.stringify(setDownload));
    localStorage.setItem("firstBoolean", "false");
  }
  else if (testBool == false) {
    FirstSaveBtn.innerHTML = '<i class="fa fa-heart-o" id="heart"></i> Save';
    localStorage.removeItem("firstTitleName");
    localStorage.removeItem("firstAudioDiv");
    localStorage.removeItem("firstButtonDiv");
    localStorage.removeItem("firstDownloadBtn");
    localStorage.removeItem("firstBoolean");
  }

})

////////////////////////////////////// Onclick Event Listener For Second Save Button //////////////////////////////////////

secondSaveBtn.addEventListener('click', function () {

  secondTestBool = secondTestBool ? false : true;
  if (secondTestBool == true) {
    secondSaveBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true" style="color:red"></i> Saved';

    setTitle = anotherTitleName.innerHTML;
    setAudioDiv = anotherAudioDiv.innerHTML;
    setButtonDiv = anotherButtonDiv.innerHTML;
    setDownload = anotherDownloadBtn.innerHTML;

    localStorage.setItem("secondTitleName", JSON.stringify(setTitle));
    localStorage.setItem("secondAudioDiv", JSON.stringify(setAudioDiv));
    localStorage.setItem("secondButtonDiv", JSON.stringify(setButtonDiv));
    localStorage.setItem("secondDownloadBtn", JSON.stringify(setDownload));
    localStorage.setItem("secondBoolean", "false");
  }
  else if (secondTestBool == false) {
    secondSaveBtn.innerHTML = '<i class="fa fa-heart-o" id="heart"></i> Save';
    localStorage.removeItem("secondTitleName");
    localStorage.removeItem("secondAudioDiv");
    localStorage.removeItem("secondButtonDiv");
    localStorage.removeItem("secondDownloadBtn");
    localStorage.removeItem("secondBoolean");
  }
})

////////////////////////////////////// Onclick Function For Showing Next Page/Section //////////////////////////////////////

favoriteBtn.onclick = function () {
  location.href = "favorite.html";
}