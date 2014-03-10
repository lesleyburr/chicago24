//
// TOUR SCHEDULE
//
(function( $ ){
   $.fn.reading = function() {
      if ($(this).text() == "… Read more") {
				$(this).text("Read less");
			}
			else {
				$(this).html("&hellip; Read more");
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

	// LARGE SCREEN and SMALL SCREEN MENUS
	// CHECK for visible Tours
	// IF Tour is visible THEN HIDE all but SELF
	// SHOW or HIDE Tour
	// $("#Saturday12pm, #SmallSaturday12pm").click(function() {
		// if ($("[id^=ToursSaturday]").is(":visible")) {
		// 	$("[id^=ToursSaturday]:not(#ToursSaturday12pm)").hide(true);
		// }

	// 	$("#ToursSaturday12pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday1pm, #SmallSaturday1pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday1pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday1pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday2pm, #SmallSaturday2pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday2pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday2pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday3pm, #SmallSaturday3pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday3pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday3pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday4pm, #SmallSaturday4pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday4pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday4pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday5pm,#SmallSaturday5pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday5pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday5pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday6pm, #SmallSaturday6pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday6pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday6pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday8pm, #SmallSaturday8pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday8pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday8pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday9pm, #SmallSaturday9pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday9pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday9pm").slideToggle( "slow", "linear" );
	// });

	// $("#Saturday10pm, #SmallSaturday10pm").click(function() {
	// 	if ($("[id^=ToursSaturday]").is(":visible")) {
	// 		$("[id^=ToursSaturday]:not(#ToursSaturday10pm)").hide(true);
	// 	}

	// 	$("#ToursSaturday10pm").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday12am, #SmallSunday12am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday12am)").hide(true);
	// 	}

	// 	$("#ToursSunday12am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday4am, #SmallSunday4am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday4am)").hide(true);
	// 	}

	// 	$("#ToursSunday4am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday6am, #SmallSunday6am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday6am)").hide(true);
	// 	}

	// 	$("#ToursSunday6am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday7am, #SmallSunday7am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday7am)").hide(true);
	// 	}

	// 	$("#ToursSunday7am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday9am, #SmallSunday9am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday9am)").hide(true);
	// 	}

	// 	$("#ToursSunday9am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday10am, #SmallSunday10am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday10am)").hide(true);
	// 	}

	// 	$("#ToursSunday10am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday11am, #SmallSunday11am").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday11am)").hide(true);
	// 	}

	// 	$("#ToursSunday11am").slideToggle( "slow", "linear" );
	// });

	// $("#Sunday12pm, #SmallSunday12pm").click(function() {
	// 	if ($("[id^=ToursSunday]").is(":visible")) {
	// 		$("[id^=ToursSunday]:not(#ToursSunday12pm)").hide(true);
	// 	}

	// 	$("#ToursSunday12pm").slideToggle( "slow", "linear" );
	// });


//
// Filter Tours by Type
//
	// SHOW Tours ON CLICK
	// HIDE Tours ON ClICK

// $("#ToursScream, ").click(function() {
// 	$(".tour--scream").slideToggle( "slow", "linear" );
// });














