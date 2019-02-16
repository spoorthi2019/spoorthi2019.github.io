// $(".workshops").click(function(){
// 	alert("click");
// });

$(document).ready(function(){
	// alert("Alert");
	var event;
	$.ajax({
		type: "GET",
		url: link+"/api/event/view",
		// dataType: "json",
		success: function(data){
			// alert(JSON.stringify(data));
			event = data.data;
			// console.log(event);
			var eventsPhotos1 = "";
			var eventsPhotos2 = "";
			var eventsPhotos3 = "";
			var eventsPhotos4 = "";
			var eventsPhotos5 = "";
			var workshopsPhotos1 = "";
			var workshopsPhotos2 = "";
			var talksPhotos = "";
			var eventsModalContainer = "";
			var workshopsModalContainer = "";
			var talksModalContainer = "";
			var count1 = 0; // Events
			var count11 = 0; // robotics
			var count12 = 0; // clubs
			var count13 = 0; // dept
			var count14 = 0; // flagship
			var count15 = 0; // prefest
			var count2 = 0; // Workshop
			var count21 = 0; // Tech
			var count22 = 0; // Non Tech
			var count3 = 0; // Talks

			event.forEach(element => {
				// console.log(element);
				// console.log(element["photos"]);
				var element_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
				try{
					// var img_url = new URL(element["photos"]);
					// var img_id = img_url.searchParams.get("id");
					// element_img = "https://drive.google.com/uc?export=view&id="+img_id;
					element_img = "https://drive.google.com/uc?export=view&id="+element["photos"];
					console.log(element_img);
				} catch {
					;
				}
				if(element["type"]=="event"){
					var temp = '';
					if(element["category"]=="robotics"){
						if(count11!=0 && count11%4==0){
							temp += '</div><div class="row">';
						} else if(count11==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos1 += temp;
						count11 += 1;
					}
					else if(element["category"]=="clubs"){
						if(count12!=0 && count12%4==0){
							temp += '</div><div class="row">';
						} else if(count12==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos2 += temp;
						count12 += 1;
					}
					else if(element["category"]=="dept"){
						if(count13!=0 && count13%4==0){
							temp += '</div><div class="row">';
						} else if(count13==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos3 += temp;
						count13 += 1;
					}
					else if(element["category"]=="flagship"){
						if(count14!=0 && count14%4==0){
							temp += '</div><div class="row">';
						} else if(count14==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos4 += temp;
						count14 += 1;
					}
					else if(element["category"]=="prefest"){
						if(count15!=0 && count15%4==0){
							temp += '</div><div class="row">';
						} else if(count15==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos5 += temp;
						count15 += 1;
					} else {
						if(count15!=0 && count15%4==0){
							temp += '</div><div class="row">';
						} else if(count15==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count1+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						eventsPhotos5 += temp;
						count15 += 1;
					}
					var temp2 = '<div id="modalevent'+count1+'" class="eventsModal" style="z-index: 100; top: 10vh; left: 10vw; right: 10vw; max-height: 80vh; position: fixed; opacity: 0.9"><div class="grid-container"><div class="item1"><h3>'+element["name"]+'<small class="closeModal" style="float:right; cursor:pointer;">[close]</small></h3></div><div class="item2"><img style="width:100%;" src="'+element_img+'"></img></div><div class="item3"><p align="left">'+element["description"]+'</p></div>  <div class="item4"><p>'+element["dtv"]+'</p></div><div class="item5"><div class="row"><div class="col-sm"><a target="_blank" href="'+element["reg_link"]+'">REGISTER</a></div><div class="col-sm"><a target="_blank" href="'+element["url"]+'">DESCRIPTION</a></div></div></div></div></div>';
					eventsModalContainer += temp2;
					count1 += 1;
				} else if(element["type"]=="workshop"){
					var temp = '';
					if(element["category"]=="technical"){
						if(count21!=0 && count21%4==0){
							temp += '</div><div class="row">';
						} else if(count21==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm"><img class="workshops" id="event'+count2+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						workshopsPhotos1 += temp;
						count21 += 1
					}
					else if(element["category"]=="nontechnical"){
						if(count22!=0 && count22%4==0){
							temp += '</div><div class="row">';
						} else if(count22==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm"><img class="workshops" id="event'+count2+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						workshopsPhotos2 += temp;
						count22 += 1
					} else {
						if(count21!=0 && count21%4==0){
							temp += '</div><div class="row">';
						} else if(count21==0){
							temp += '<div class="row">';
						} 
						temp += '<div class="col-sm"><img class="workshops" id="event'+count2+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
						// console.log(element["name"]+element["photos"]);
						workshopsPhotos1 += temp;
						count21 += 1
					}
					var temp2 = '<div id="modalevent'+count2+'" class="eventsModal" style="z-index: 100; top: 10vh; left: 10vw; right: 10vw; max-height: 80vh; position: fixed; opacity: 0.9"><div class="grid-container"><div class="item1"><h3>'+element["name"]+'<small class="closeModal" style="float:right; cursor:pointer;">[close]</small></h3></div><div class="item2"><img style="width:100%;" src="'+element_img+'"></img></div><div class="item3"><p align="left">'+element["description"]+'</p></div>  <div class="item4"><p>'+element["dtv"]+'</p></div><div class="item5"><a target="_blank" href="'+element["reg_link"]+'">REGISTER</a></div></div></div>';
					workshopsModalContainer += temp2;
					count2 += 1;
				} else if(element["type"]=="guest"){
					var temp = '';
					if(count3!=0 && count3%4==0){
						temp += '</div><div class="row">';
					} else if(count3==0){
						temp += '<div class="row">';
					} 
					temp += '<div class="col-sm" style="padding-bottom: 5vw;"><img class="workshops" id="event'+count3+'" src="'+element_img+'"><br>'+element["name"]+'</div>';
					// console.log(element["name"]+element["photos"]);
					talksPhotos += temp;
					var temp2 = '<div id="modalevent'+count3+'" class="eventsModal" style="z-index: 100; top: 10vh; left: 10vw; right: 10vw; max-height: 80vh; position: fixed; opacity: 0.9"><div class="grid-container"><div class="item1"><h3>'+element["name"]+'<small class="closeModal" style="float:right; cursor:pointer;">[close]</small></h3></div><div class="item2"><img style="width:100%;" src="'+element_img+'"></img></div><div class="item3"><p align="left">'+element["description"]+'</p></div>  <div class="item4"><p>'+element["dtv"]+'</p></div><div class="item5"><a target="_blank" href="'+element["reg_link"]+'">REGISTER</a></div></div></div>';
					talksModalContainer += temp2;
					count3 += 1;
				}
			});
			if(count11!=0){
				eventsPhotos1 += '</div>';
			}
			if(count12!=0){
				eventsPhotos2 += '</div>';
			}
			if(count13!=0){
				eventsPhotos3 += '</div>';
			}
			if(count14!=0){
				eventsPhotos4 += '</div>';
			}
			if(count15!=0){
				eventsPhotos5 += '</div>';
			}
			if(count21!=0){
				workshopsPhotos1 += '</div>';
			}
			if(count22!=0){
				workshopsPhotos2 += '</div>';
			}
			if(count3!=0){
				talksPhotos += '</div>';
			}
			// console.log(eventsPhotos);
			// $("#eventsPhotos").html('<div class="row"><div class="col-sm"><img class="workshops" src="images/workshops/technical/Bitcoin.png">Bitcoin</div><div class="col-sm"><img class="workshops" src="images/workshops/technical/CloudComputing.png">CloudComputing</div><div class="col-sm"><img class="workshops" src="images/workshops/technical/DigitalMarketing.png">DigitalMarketing</div><div class="col-sm"><img class="workshops" src="images/workshops/technical/EmbeddedSystems.png">EmbeddedSystems</div></div>');
			$("#eventsPhotosRobotics").html(eventsPhotos1);
			$("#eventsPhotosClubs").html(eventsPhotos2);
			$("#eventsPhotosDept").html(eventsPhotos3);
			$("#eventsPhotosFlagship").html(eventsPhotos4);
			$("#eventsPhotosPrefest").html(eventsPhotos5);
			$("#workshopsPhotosTech").html(workshopsPhotos1);
			$("#workshopsPhotosNonTech").html(workshopsPhotos2);
			$("#talksPhotos").html(talksPhotos);
			$("#eventsModalContainer").html(eventsModalContainer);
			$("#workshopsModalContainer").html(workshopsModalContainer);
			$("#talksModalContainer").html(talksModalContainer);
			// window.location.href = '/';
		},
		error: function(data){
			alert(JSON.stringify(data));
			// alert("Error");
			// window.location.href = '/regsiter';
		}
	}).done(function(){
		$(".workshops").click(function(){
			// alert("click");
			var id_1 = $(this).attr('id');
			// alert($(this).attr('id'));
			var id_2 = "#modal"+id_1;
			// alert(id_2);
			$(id_2).show();
		});
		$(".closeModal").click(function(){
			$('.eventsModal').hide();
		});
		// $(window).click(function() {
		// 	$('.eventsModal').hide();//Hide the menus if visible
		// });
		// $(".workshops").error(function () {
		//   $(this).unbind("error").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png");
		// });
		// $('.workshops').each(function() {
  //   if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
  //     // image was broken, replace with your new image
  //     this.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
  //   }
  // })
	});
});