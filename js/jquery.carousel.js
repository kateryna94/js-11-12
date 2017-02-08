(function($){

$.fn.carousel = function() {


var leftEl = $('.carousel-arrow-left');
var rightEl = $('.carousel-arrow-right');
var elementsList = $('.carousel-list');

    var pixelsOffset = 500;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

      leftEl.click(function() {
        if (currentLeftValue != maximumOffset) {
           currentLeftValue += 500;
           elementsList.animate({ left : currentLeftValue + "px"}, 500);
       }
      });

      rightEl.click(function() {
        if (currentLeftValue != minimumOffset) {
           currentLeftValue -= 500;
           elementsList.animate({ left : currentLeftValue + "px"}, 500);
       }
      });


  return this;
}

})(jQuery);
