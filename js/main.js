function openTab(evt, sectionName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(sectionName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function enlarge(evt, slideName) {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    } 

    var slidelinks = document.getElementsByClassName("gallery-photos");
    for (i = 0; i < slidelinks.length; i++) {
        slidelinks[i].className = slidelinks[i].className.replace(" active", "");
    }

    document.getElementById(slideName).style.display = "block";
    evt.currentTarget.className += " active";
}

function pauseAll() {
    var allTracks = document.getElementsByClassName("audio");
    for (let i = 0; i < allTracks.length; i++) {
        allTracks[i].pause()
    }
}

function updateTime(audioElement, timeElement) {
    let timeToDisplaySeconds;

    if (document.getElementById(audioElement).currentTime == 0) {
        timeToDisplaySeconds = Math.floor(document.getElementById(audioElement).duration)}
        else {timeToDisplaySeconds = Math.floor(document.getElementById(audioElement).currentTime)}

    let minutes = Math.floor(timeToDisplaySeconds/60);
    let seconds = timeToDisplaySeconds % 60;
    if (seconds < 10) {
        seconds = "0"+seconds.toString()
    }
    document.getElementById(timeElement).innerHTML = minutes+":"+seconds
}


function myFunction() {
    document.getElementById("demo").innerHTML = "You moved to position " + document.getElementById("myAudio").currentTime;
  }
