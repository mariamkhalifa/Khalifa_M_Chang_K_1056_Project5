
(function() {

	var hamburger	= document.querySelector(".hamburger");
	var mainNav 	= document.querySelector("#mainNav");
	var navAppear 	= window.pageYOffset;

	function hamburgerMenu() {
		mainNav.classList.toggle("slideToggle");
		hamburger.classList.toggle("expanded");
	}

	// Makes big nav disappear on scroll
	// make function wait?

	window.onscroll = function() {
	var navDisappear = window.pageYOffset;
	  if (navAppear > navDisappear) {
	    document.getElementById("mainHeader").style.top = "0";
	  } else {
	    document.getElementById("mainHeader").style.top = "-151px";
	  }
	  navAppear = navDisappear;
	}


	hamburger.addEventListener("click", hamburgerMenu);

})();

// function scrollFunction() {

// if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//     document.getElementById("mainHeaderCon").style.padding = "0px";
//     document.getElementById("headerLogo").style.width = "61px";
//   } else {
//   	document.getElementById("mainHeaderCon").style.padding = "20px";
//     document.getElementById("headerLogo").style.width = "122px";
//   }
// }