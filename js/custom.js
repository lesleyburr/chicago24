// SHOW Saturday 12:00 p.m. tours ON CLICK
// HIDE Saturday 12:00 p.m. tours ON ClICK
$(".schedule__accordion").click(function() {
	$(".schedule__time--saturday-12pm").slideToggle( "slow", "linear" );
});