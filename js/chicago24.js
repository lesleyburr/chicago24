//
// TOUR SCHEDULE
//
(function( $ ){
   $.fn.reading = function() {
      if ($(this).text() == "… Read more") {
				$(this).text("− Read less");
			}
			else {
				$(this).html("… Read more");
			}
      return this;
   };
})( jQuery );

$(".tour__link--read-more").click(function(e) {
		e.preventDefault();
		$(this).reading();
		$(this).parent().siblings("p").first().toggleClass("tour__description__excerpt");
		$(this).parent().siblings("[id$=Info]").slideToggle();
		$(this).parent().siblings().children("[id$=Description]").slideToggle();
		$(this).parent().siblings().children("[id$=Description]").css('display','inline');

	});




//
// TOUR PACKAGES
//
(function( $ ){
   $.fn.reading = function() {
      if ($(this).text() == "… See the tours included") {
				$(this).text("− Read less");
			}
			else {
				$(this).html("… See the tours included");
			}
      return this;
   };
})( jQuery );

$(".tour__link--read-more").click(function(e) {
		e.preventDefault();
		$(this).reading();
		$(this).parent().siblings("p").first().toggleClass("tour__description__excerpt");
		$(this).parent().siblings("[id$=Info]").slideToggle();
		$(this).parent().siblings().children("[id$=Description]").slideToggle();
		$(this).parent().siblings().children("[id$=Description]").css('display','inline');

	});