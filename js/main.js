// 		(function ($) {

// 	    var navbar = $('.navbar');
// 	    var lastScrollTop = 0;

// 	    $(window).scroll(function () {
// 	        var st = $(this).scrollTop();
// 	        // Scroll down
// 	        if (st > lastScrollTop) {
// 	            navbar.fadeOut();
// 	        } 
// 	        // Scroll up but still lower than 200 (change that to whatever suits your need)
// 	        else if(st < lastScrollTop && st > 200) {
// 	            navbar.fadeIn();
// 	            navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom');
// 	        }
// 	        // Reached top
// 	        else {
// 	            navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent');
// 	        }
// 	        lastScrollTop = st;
// 	    });

// 	})(jQuery);


// 	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });




		var prevScrollpos = window.pageYOffset;
		var counter = 0;
		// var fs = require('fs');
		// var files = fs.readdirSync('images/gallery/');
		// console.log(files);
		var intervalID = setInterval(function(){
			// alert("Interval reached");
			gal11 = [
				"images/gallery/DSC_0363.JPG",
				"images/gallery/DSC_0436.JPG",
				"images/gallery/DSC_0463.JPG"
			];
			gal12 = [
				"images/gallery/DSC_0541.JPG",
				"images/gallery/DSC_0570.JPG",
				"images/gallery/DSC_0639.JPG"
			];
			gal13 = [
				"images/gallery/DSC_6690.JPG",
				"images/gallery/DSC_0765.JPG",
				"images/gallery/DSC_0826.JPG"
			];
			gal21 = [
				"images/gallery/DSC_0883.JPG",
				"images/gallery/DSC_0969.JPG",
				"images/gallery/DSC_4757.JPG"
			];
			gal22 = [
				"images/gallery/DSC_4891.JPG",
				"images/gallery/DSC_5209.JPG",
				"images/gallery/DSC_5667.JPG"
			];
			gal23 = [
				"images/gallery/DSC_5744.JPG",
				"images/gallery/DSC_5756.JPG",
				"images/gallery/DSC_6371.JPG"
			];
			document.getElementById("gal11").src = gal11[counter];
			document.getElementById("gal12").src = gal12[counter];
			document.getElementById("gal13").src = gal13[counter];
			document.getElementById("gal21").src = gal21[counter];
			document.getElementById("gal22").src = gal22[counter];
			document.getElementById("gal23").src = gal23[counter];
			counter = (counter+1)%3;
		}, 3000);
		window.onload = function() {

			document.body.className = "header-fixed-top bg-particles dynamic-backgrounds";

			var logged = localStorage.getItem("logged");
			var admin = localStorage.getItem("admin");
			var token = localStorage.getItem("token");
			var name = localStorage.getItem("name");

			// console.log(logged);
			// console.log(name);


			if(logged == "true"){
				// alert("reached");
				document.getElementById("navItemAbout").innerHTML = '<a class="nav-link" href="/viewProfile"><small id="navLogin">Hi '+name+'<div></div></small></a>';
				document.getElementById("navItemAbout2").innerHTML = '<a href="/viewProfile" id="navLogin">Hi '+name+'</a>';
				document.getElementById("navLogout").style.display = "block";
				document.getElementById("navLogout2").style.display = "block";
			} else {
				document.getElementById("navItemAbout").innerHTML = '<a class="nav-link" href="/login"><small id="navLogin">REGISTER/LOGIN<div></div></small></a>';
				document.getElementById("navItemAbout2").innerHTML = '<a href="/login" id="navLogin">REGISTER/LOGIN</a>';
				document.getElementById("navLogout").style.display = "none";
				document.getElementById("navLogout2").style.display = "none";
			}



			var rnd = Math.floor((Math.random())*4 + 1);
			// rnd = 1;
			// console.log(rnd);
			var story1 = document.getElementsByClassName("story1");
			var story2 = document.getElementsByClassName("story2");
			var story3 = document.getElementsByClassName("story3");
			var story4 = document.getElementsByClassName("story4");
			var sec1 = [
				"url('images/statues/Story 1/mobile/1.png')",
				"url('images/statues/Story 2/mobile/1.png')",
				"url('images/statues/Story 3/mobile/1.png')",
				"url('images/statues/Story 4/mobile/1.png')"
			];
			var sec2 = [
				"url('images/statues/Story 1/mobile/2.png')",
				"url('images/statues/Story 2/mobile/2.png')",
				"url('images/statues/Story 3/mobile/2.png')",
				"url('images/statues/Story 4/mobile/2.png')"
			];
			var sec3 = [
				"url('images/statues/Story 1/mobile/3.png')",
				"url('images/statues/Story 2/mobile/3.png')",
				"url('images/statues/Story 3/mobile/3.png')",
				"url('images/statues/Story 4/mobile/3.png')"
			];
			var sec4 = [
				"url('images/statues/Story 1/mobile/4.png')",
				"url('images/statues/Story 2/mobile/4.png')",
				"url('images/statues/Story 3/mobile/4.png')",
				"url('images/statues/Story 4/mobile/4.png')"
			];
			var sec5 = [
				"url('images/statues/Story 1/mobile/5.png')",
				"url('images/statues/Story 2/mobile/5.png')",
				"url('images/statues/Story 3/mobile/5.png')",
				"url('images/statues/Story 4/mobile/5.png')"
			];
			// console.log(sec1[rnd-1]);
			document.getElementById("sec1").style.backgroundImage = sec1[rnd-1];
			document.getElementById("sec2").style.backgroundImage = sec2[rnd-1];
			document.getElementById("sec3").style.backgroundImage = sec3[rnd-1];
			document.getElementById("sec4").style.backgroundImage = sec4[rnd-1];
			document.getElementById("sec5").style.backgroundImage = sec5[rnd-1];
			// console.log(document.getElementById("sec1").style.backgroundImage);
			if(rnd == 1){
				for (var i = story1.length - 1; i >= 0; i--) {
					story1[i].style.display = "block";
				}
				for (var i = story2.length - 1; i >= 0; i--) {
					story2[i].style.display = "none";
				}
				for (var i = story3.length - 1; i >= 0; i--) {
					story3[i].style.display = "none";
				}
				for (var i = story4.length - 1; i >= 0; i--) {
					story4[i].style.display = "none";
				}
			} else if(rnd == 2){
				for (var i = story1.length - 1; i >= 0; i--) {
					story1[i].style.display = "none";
				}
				for (var i = story2.length - 1; i >= 0; i--) {
					story2[i].style.display = "block";
				}
				for (var i = story3.length - 1; i >= 0; i--) {
					story3[i].style.display = "none";
				}
				for (var i = story4.length - 1; i >= 0; i--) {
					story4[i].style.display = "none";
				}
			} else if(rnd == 3){
				for (var i = story1.length - 1; i >= 0; i--) {
					story1[i].style.display = "none";
				}
				for (var i = story2.length - 1; i >= 0; i--) {
					story2[i].style.display = "none";
				}
				for (var i = story3.length - 1; i >= 0; i--) {
					story3[i].style.display = "block";
				}
				for (var i = story4.length - 1; i >= 0; i--) {
					story4[i].style.display = "none";
				}
			} else {
				for (var i = story1.length - 1; i >= 0; i--) {
					story1[i].style.display = "none";
				}
				for (var i = story2.length - 1; i >= 0; i--) {
					story2[i].style.display = "none";
				}
				for (var i = story3.length - 1; i >= 0; i--) {
					story3[i].style.display = "none";
				}
				for (var i = story4.length - 1; i >= 0; i--) {
					story4[i].style.display = "block";
				}
			}
		}
		window.onscroll = function() {
			if (document.documentElement.clientWidth > 991){
			  var currentScrollPos = window.pageYOffset;
			  if (prevScrollpos > currentScrollPos) {
			    document.getElementById("headerFixedTop").style.top = "-50px";
			  } else {
			    document.getElementById("headerFixedTop").style.top = "-200px";
			  }
			  prevScrollpos = currentScrollPos;
			} else {
			  var currentScrollPos = window.pageYOffset;
			  if (prevScrollpos > currentScrollPos) {
			    document.getElementById("headerFixedTop").style.top = "0px";
			  } else {
			    document.getElementById("headerFixedTop").style.top = "-200px";
			  }
			  prevScrollpos = currentScrollPos;
			}
		} 

		// Set the date we're counting down to
		var countDownDate = new Date("Mar 1, 2019 17:0:0").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now an the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in an element with id="demo"
		  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
		  + minutes + "m " + seconds + "s ";

		  // If the count down is finished, write some text
		  if (distance < 0) {
		    clearInterval(x);
		    document.getElementById("timer").innerHTML = "EXPIRED";
		  }
		}, 1000); 



		$(document).bind("contextmenu",function(e) {
		 e.preventDefault();
		});