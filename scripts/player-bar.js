{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  //next button//
  $('button#next').click('click',function() {
    if (player.playState !== 'playing') {return false};

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if(nextSongIndex >= album.songs.length) {return};
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });


//previous button//
  $('button#previous').click('click',function() {
    if (player.playState !== 'playing') {return false};

    const previousSongIndex = album.songs.indexOf(player.currentlyPlaying) - 1;
    if(previousSongIndex < 0) {return};
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

//time and volume//
  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event){
    player.setVolume(event.target.value);
  });



  setInterval( () => {

    if(player.playState !== 'playing') { return }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(player.formatTime(currentTime));
    $('#time-control .total-time').text(player.formatTime(duration));
    $('#time-control input').val(percent);
  }, 1000);
};
