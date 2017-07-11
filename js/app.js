//onload display Name
name.onload = setTimeout(function(){ 
	document.getElementById('name').style.display = "block"
 }, 3000);

//jQuery Animations
$(document).ready(function(){
	//hide and show
    $(".taxi").click(function(){
        $('.taxiAddress').toggle(1000);
    });

    //Fixing the sideBar on scrolling of page
    var $fixOnScroll = $('.fixOnScroll');
    var $window = $(window);
    $window.scroll(function(){
    	if($window.scrollTop() > 350){
           $fixOnScroll.addClass('in-view');
    	}else{
    		$fixOnScroll.removeClass('in-view');
    	}
    });   

});

//book Now form
var bookingWrapper = document.getElementById("bookingWrapper");
function openBookNow() {
   bookingWrapper.style.display = "block";
};
function closeBookNow() {
    bookingWrapper.style.display = "none";
};