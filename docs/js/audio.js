$(document).ready(function(){

    var audio = $('#audioTrack')[0];
    console.log(audio);

    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioControl = $('[data-type="audio-control"]');
    
    audio.play();
    function initAudioPlayer(){
        $playBtn.parent().show();
        audio.loop = true;
        
        

        $audioControl.click(function(){
            console.log('audio control click');

            if ( audio.paused ) {
                audio.play();
                $pauseBtn.parent().show();
                $playBtn.parent().hide();
            } else {
                audio.pause();
                $pauseBtn.parent().hide();
                $playBtn.parent().show();
            }
        });
    };

    initAudioPlayer();
});
