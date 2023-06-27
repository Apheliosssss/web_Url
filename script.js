window.addEventListener('load', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    var videoButton = document.getElementById('videoButton');
  
    videoOverlay.addEventListener('click', function() {
      videoPlayer.play();
      videoOverlay.style.display = 'none';
    });
  
    videoButton.addEventListener('click', function(event) {
      event.stopPropagation();
      videoPlayer.pause();
      videoOverlay.style.display = 'flex';
    });
  });
  