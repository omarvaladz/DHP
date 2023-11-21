function changeVideo(newLink, description) {
    var youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = newLink;
    document.getElementById('video-description').innerText = description;
}