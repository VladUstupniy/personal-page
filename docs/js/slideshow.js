$(document).ready(function(){
    //
    var slideIndex = 0;

    // функция слфйд-шоу для показа фотографий
    function slideShow(){

        var i;

        var slides = $('.photo img');

        // выводим в консоль значение переменной slides
        //console.log(slides);

        // Запускаем цикл для скрытия фотографий
        for( i = 0; i < slides.length; i++){

            //console.log(i);

            $(slides[i]).hide();

        };

        // считаем слайд-индекс // Переменная активной фотографии, которая будет показываться
        slideIndex++;

        // обнуляем слайд-индекс, если его значимость превосходит количество длины списка фотографий
        if ( slideIndex > slides.length){

            slideIndex = 1

        };

        // показать переменную
        $(slides[slideIndex-1]).show();

        setTimeout(slideShow, 200);

    };

    slideShow();

});