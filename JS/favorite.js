////////////////////////////////////// Accessing Data From LocalStorage For First Div Element //////////////////////////////////////

var titleData = localStorage.getItem('firstTitleName');
var firstTitleName = JSON.parse(titleData);
var audioData = localStorage.getItem('firstAudioDiv');
var firstAudioDiv = JSON.parse(audioData);
var buttonData = localStorage.getItem('firstButtonDiv');
var firstButtonDiv = JSON.parse(buttonData);
var downloadData = localStorage.getItem('firstDownloadBtn');
var firstDownloadDiv = JSON.parse(downloadData);
var firstBoolean = localStorage.getItem('firstBoolean');
var firstMainDiv = document.getElementById("firstMainDiv");

////////////////////////////////////// Accessing Data From LocalStorage For Second Div Element //////////////////////////////////////

var secondTitleData = localStorage.getItem('secondTitleName');
var secondTitleName = JSON.parse(secondTitleData);
var secondAudioData = localStorage.getItem('secondAudioDiv');
var secondAudioDiv = JSON.parse(secondAudioData);
var secondButtonData = localStorage.getItem('secondButtonDiv');
var secondButtonDiv = JSON.parse(secondButtonData);
var secondDownloadData = localStorage.getItem('secondDownloadBtn');
var secondDownloadBtn = JSON.parse(secondDownloadData);
var secondBoolean = localStorage.getItem('secondBoolean');
var secondMainDiv = document.getElementById("secondMainDiv");

var firstTitle = document.getElementById("firstTitle");
var firstAudioTag = document.getElementById("firstAudioTag");
var firstButtonDivElement = document.getElementById("firstButton");
var firstDownload = document.getElementById("downloadOption");

var secondTitle = document.getElementById("secondTitle");
var secondAudioTag = document.getElementById("secondAudioTag");
var secondButton = document.getElementById("secondButton");
var secondDownload = document.getElementById("secondDownloadBtn");

firstTitle.innerHTML = firstTitleName;
firstAudioTag.innerHTML = firstAudioDiv;
firstButtonDivElement.innerHTML = firstButtonDiv;
firstDownload.innerHTML = firstDownloadDiv;

secondTitle.innerHTML = secondTitleName;
secondAudioTag.innerHTML = secondAudioDiv;
secondButton.innerHTML = secondButtonDiv;
secondDownload.innerHTML = secondDownloadBtn;

////////////////////////////////////// Audio Methods For Button To Stop Play Audio //////////////////////////////////////

var audio = document.querySelector("audio");
var newAudio = document.getElementById("Audio2");

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

////////////////////////////////////// For Hiding And Showing Div Element //////////////////////////////////////

function FirstShowDiv() {
    let booleanValue = Boolean(firstBoolean);
    if (booleanValue === true) {
        firstMainDiv.style.display = 'block';
    } else {
        firstMainDiv.style.display = 'none';
    }
}
function SecondShowDiv() {
    let booleanValue = Boolean(secondBoolean);
    if (booleanValue === true) {
        secondMainDiv.style.display = 'block';
    } else {
        secondMainDiv.style.display = 'none';
    }
}
FirstShowDiv();
SecondShowDiv();