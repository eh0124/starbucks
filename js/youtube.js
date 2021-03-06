var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  //<div id="player"></div>
  new YT.Player('player', {
    videoId: 'EJF919p_hb0',
    playerVars: {
      autoplay:true,
      loop:true,
      playlist: 'EJF919p_hb0'
    },
    events: {
      onReady: function (event) {
        event.target.mute ()
      }
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}