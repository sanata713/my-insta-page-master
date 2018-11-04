$(document).ready(function () {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '1565827791',
        accessToken: '1565827791.1677ed0.6a3d9d1c216d4bf4b4c9301bbf3b08b1', 
        resolution: 'standard_resolution',
        limit: 60
    });
    userFeed.run();
    
    setTimeout(function(){
        $('.instafeed').addClass('shadowed');
    },100);


});