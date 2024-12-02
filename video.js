const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('videoId');
if (videoId) {
    document.getElementById('video-frame').src = `https://www.youtube.com/embed/${videoId}`;
}

function openNav() {
    var sidebar = document.getElementById("ham-sidebar").style.width = "250px";
    var videoContainer = document.querySelector(".video-container")
    var notesContainer = document.querySelector(".notes-container")
    var textArea = document.getElementById("notes")
    var notesHeading = document.querySelector("h2")

    videoContainer.style.marginLeft = "250px";
    notesContainer.style.marginLeft = "250px";
    textArea.style.marginLeft = "175px";
    notesHeading.style.marginLeft = "175px";

    var hamburgerButton = document.getElementById('main')
    hamburgerButton.style.display = 'none';

    if (sidebar.classList.contains('open')){
        sidebar.classList.remove('open');
    } else{
        sidebar.classList.add('open');

    }
}

function closeNav() {
    var sidebar = document.getElementById("ham-sidebar");
    var videoContainer = document.querySelector(".video-container")
    var notesContainer = document.querySelector(".notes-container")
    var textArea = document.getElementById("notes")
    var notesHeading = document.querySelector("h2")

    sidebar.style.width = "0";
    videoContainer.style.marginLeft = "0";
    notesContainer.style.marginLeft = "0";
    textArea.style.marginLeft = "0";
    notesHeading.style.marginLeft = "0";

    var hamburgerButton = document.getElementById('main')
    sidebar.classList.remove('open');
    hamburgerButton.style.display = 'block';
}