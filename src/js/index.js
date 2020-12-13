// Number count on frontpage
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
  if (isScrolledIntoView($(".number-icons .number-count")) && !viewed) {
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
