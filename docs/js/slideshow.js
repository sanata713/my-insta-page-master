$(document).ready(function(){
    
    var slideIndex = 0;
    
    showPhotos();
    
    function showPhotos(){
        
        var i;
    
        var slides = $('.photo img');
        console.log(slides);
        console.log(slides.length);
        
        // Запускаем цикл для скрытия фотографий
        for (i = 0; i < slides.length; i++){
            console.log(i);
            $(slides[i]).hide();
        }
        
        // Считаем слайдИндекс активных фотографий, которые будем показывать
        slideIndex++;
        
        if ( slideIndex > slides.length ){
            slideIndex = 1
        }
        
        $(slides[slideIndex-1]).show();
        
        setTimeout(showPhotos, 1000);
    }
});