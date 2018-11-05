$(document).ready(function(){

    var audio = $('#audioTrack')[0];
    console.log(audio);
    
    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioControl = $('[data-type="audio-control"]');
    
    setTimeout(initAudioPlayer, 800);
    
    function initAudioPlayer(){
        $playBtn.parent().show();
//        $pauseBtn.parent().show();
        audio.loop - true;
        audio.play();
        
        $audioControl.click(function(){
            console.log('audio control click');
            
            if ( audio.paused ) {
                audio.play();
                $playBtn.parent().hide();
                $pauseBtn.parent().show();
            } else {
                audio.pause();
                $pauseBtn.parent().hide();
                $playBtn.parent().show();
            }
        });
    }
    
//    audio.play();

});
