// 
// Tour schedule
// 
	// SHOW Tours ON CLICK
	// HIDE Tours ON ClICK

$("#Saturday12pm").click(function() {
	if ($("[id^=ToursSaturday]").is(":visible")) {
		$("[id^=ToursSaturday]:not(#ToursSaturday12pm)").hide();

	}

	$("#ToursSaturday12pm").slideToggle( "slow", "linear" );
});



$("#Saturday1pm").click(function() {
	$("#ToursSaturday1pm").slideToggle( "slow", "linear" );
});

$("#Saturday2pm").click(function() {
	$("#ToursSaturday2pm").slideToggle( "slow", "linear" );
});

$("#Saturday3pm").click(function() {
	$("#ToursSaturday3pm").slideToggle( "slow", "linear" );
});

$("#Saturday4pm").click(function() {
	$("#ToursSaturday4pm").slideToggle( "slow", "linear" );
});

$("#Saturday5pm").click(function() {
	$("#ToursSaturday5pm").slideToggle( "slow", "linear" );
});

$("#Saturday6pm").click(function() {
	$("#ToursSaturday6pm").slideToggle( "slow", "linear" );
});

$("#Saturday8pm").click(function() {
	$("#ToursSaturday8pm").slideToggle( "slow", "linear" );
});

$("#Saturday10pm").click(function() {
	$("#ToursSaturday10pm").slideToggle( "slow", "linear" );
});

$("#Sunday12am").click(function() {
	$("#ToursSunday12am").slideToggle( "slow", "linear" );
});

$("#Sunday4am").click(function() {
	$("#ToursSunday4am").slideToggle( "slow", "linear" );
});

$("#Sunday6am").click(function() {
	$("#ToursSunday6am").slideToggle( "slow", "linear" );
});

$("#Sunday7am").click(function() {
	$("#TourSunday, #ToursSunday7am").slideToggle( "slow", "linear" );
});

$("#Sunday9am").click(function() {
	$("#ToursSunday9am").slideToggle( "slow", "linear" );
});

$("#Sunday10am").click(function() {
	$("#ToursSunday10am").slideToggle( "slow", "linear" );
});

$("#Sunday11am").click(function() {
	$("#ToursSunday11am").slideToggle( "slow", "linear" );
});

$("#Sunday12pm").click(function() {
	$("#ToursSunday12pm").slideToggle( "slow", "linear" );
});

// 
// Filter Tours by Type
// 
	// SHOW Tours ON CLICK
	// HIDE Tours ON ClICK

// $("#ToursScream").click(function() {
// 	$(".tour--scream").slideToggle( "slow", "linear" );
// });














