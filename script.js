var $animation_elements = $('.a-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop() - 100;
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(document).ready(function() {
	var counter = 1;
	
	$('.button').click(function(){
		counter++;
		if(counter%2){
			$('.menu').removeClass('on');
			$(this).removeClass('turn');
		} else {
			$('.menu').addClass('on');
			$(this).addClass('turn');
			$('.menu li a').click(function(){
				$('.menu').removeClass('on');
				$('.button').removeClass('turn');
				counter = counter - 1;
			});
		}
		
	});
});