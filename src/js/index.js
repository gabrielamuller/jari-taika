// Number count on frontpage
if ($('.section-number-icons').length >0 ) {
    $(window).scroll(scrollNumber);
    var viewed = false;
    
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function scrollNumber() {
      if (isScrolledIntoView($(".section-number-icons .number-count")) && !viewed) {
          viewed = true;
          $('.number-count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1500,
              easing: 'swing',
              step: function (now) {
          $(this).text(Math.ceil(now).toLocaleString('fi'));
              }
          });
        });
      }
    }
}

// Image gallery zoom
$(document).ready(function() {
    $(".zoom").hover(function() {
		  $(this).addClass('transition');
  },
  function() {       
		$(this).removeClass('transition');
	});
});
