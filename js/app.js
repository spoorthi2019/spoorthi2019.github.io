var doc=document.documentElement;(function(){doc.classList.remove("no-js");doc.classList.add("js");var e=new Swiper(".gallery-top",{spaceBetween:0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"});var t=new Swiper(".gallery-thumbs",{spaceBetween:0,centeredSlides:true,slidesPerView:5,slideToClickedSlide:true});e.params.control=t;t.params.control=e;window.onscroll=function(){changePage()}})();function changePage(){var e=window.pageYOffset|document.body.scrollTop;var t=document.getElementById("section2017").offsetHeight,o=document.getElementById("sectionApresentadores").offsetHeight,n=document.getElementById("sectionSobre").offsetHeight,s=document.getElementById("sectionPalestrantes").offsetHeight,a=document.getElementById("sectionParceiros").offsetHeight,c=document.getElementById("sectionOrganizacao").offsetHeight,i=document.getElementById("sectionContato").offsetHeight,r=document.getElementById("viewSection");if(e>t-100){doc.classList.add("activeApre");r.innerHTML="Apresentadores"}else{doc.classList.remove("activeApre");r.innerHTML="TEDx Fortaleza"}if(e>t+o-100){doc.classList.remove("activeApre");doc.classList.add("activeAbout");r.innerHTML="Sobre"}else{doc.classList.remove("activeAbout")}if(e>t+o+n-100){doc.classList.remove("activeAbout");doc.classList.add("activePales");r.innerHTML="Palestrantes"}else{doc.classList.remove("activePales")}if(e>t+o+n+s-100){doc.classList.remove("activePales");doc.classList.add("activeParc");r.innerHTML="Patrocínio"}else{doc.classList.remove("activeParc")}if(e>t+o+n+s+a-100){doc.classList.remove("activeParc");doc.classList.add("activeOrg");r.innerHTML="Organizadores"}else{doc.classList.remove("activeOrg")}}function openMenu(){var e=document.getElementById("leftNavbar");e.classList.add("leftNavbar_opened");console.log("openMenu",e)}function closeMenu(){var e=document.getElementById("leftNavbar");e.classList.remove("leftNavbar_opened");console.log("closeMenu",e)}var items=document.querySelectorAll("a");var count=items.length;function showComment(){console.log("showComment")}for(var i=0;i<count;i++){items[i].addEventListener("click",function(e){e.preventDefault();ScrollTo(e.target.hash,{duration:350,offset:-0});closeMenu()})}var ScrollTo=function(e,t){var o=window.pageYOffset;var n={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||d};var s=typeof e==="string"?n.offset+document.querySelector(e).getBoundingClientRect().top:e;var a=typeof n.duration==="function"?n.duration(s):n.duration;var c,i;requestAnimationFrame(function(e){c=e;r(e)});var r=function(e){i=e-c;window.scrollTo(0,n.easing(i,o,s,a));if(i<a)requestAnimationFrame(r);else l()};var l=function(){window.scrollTo(0,o+s);if(typeof n.callback==="function")n.callback()};function d(e,t,o,n){e/=n/2;if(e<1)return o/2*e*e+t;e--;return-o/2*(e*(e-2)-1)+t}};(function(){if(!window.localStorage.getItem("hasVisited")){document.querySelector(".Tour").classList.add("is-active");window.localStorage.setItem("hasVisited","true")}})();