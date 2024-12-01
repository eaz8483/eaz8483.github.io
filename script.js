//script. js
window.onload = function(){
    console.log("Running")
    var images = [
        'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        'https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=3118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504288145234-919e7bbc6d19?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];


    var imgElement = document.getElementById('cycle-image');
    var randomIndex = Math.floor(Math.random() * images.length);
    imgElement.src = images[randomIndex];
    console.log("image",imgElement.src);
};

function openNav() {
    var sidebar = document.getElementById('ham-sidebar');
    var mainContent = document.getElementById('main-content');

    sidebar.style.width = '250px';
    mainContent.style.marginLeft = '250px'

    var hamburgerButton = document.getElementById('main')
    hamburgerButton.style.display = 'none';

    if (sidebar.classList.contains('open')){
        sidebar.classList.remove('open');
    } else{
        sidebar.classList.add('open');
    
    }
}

function closeNav(){
    var sidebar = document.getElementById('ham-sidebar');
    var mainContent = document.getElementById('main-content');

    sidebar.style.width = '0';
    mainContent.style.marginLeft = '0'

    var hamburgerButton = document.getElementById('main')
    sidebar.classList.remove('open');
    hamburgerButton.style.display = 'block';
}



const videoLinks = [
    "https://www.youtube.com/watch?v=4RFEkGKKhdE",
    "https://www.youtube.com/watch?v=csubiPlvFWk",
    "https://www.youtube.com/watch?v=CJIXbibQ0jI"
];

const apiKey = 'AIzaSyCmA3yfx5T9_kD6u8jqeu7Xa6llf2MiXqw\n';

videoLinks.forEach(link => {
    const videoId = link.split('v=')[1];
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items.length > 0) {
                const title = data.items[0].snippet.title;
                const videoItem = document.createElement('div');
                videoItem.classList.add('video-item');

                const linkElement = document.createElement('a');
                linkElement.href = link;
                linkElement.textContent = title;
                linkElement.target = "_blank"; // Open link in a new tab

                videoItem.appendChild(linkElement);
                document.getElementById('video-list').appendChild(videoItem);
            }
        })
        .catch(error => console.error('Error:', error));
});
