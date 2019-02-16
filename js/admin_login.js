
		// Functions

		// var link = "http://test.tryst-iitd.com:8059";
// 		var link = "http://tryst-iitd.com:8059";
		var link = "https://api.tryst-iitd.com";

		$("#login").submit(function(e) {
			e.preventDefault();
			var form = $(this);
			var url = link+form.attr('action');
			// console.log(url);

			$.ajax({
				type: "POST",
				url: url,
				data: form.serialize(),
				success: function(data){
					// alert(data);
					localStorage.setItem("token", data.data.token);
					localStorage.setItem("logged", true);
					localStorage.setItem("name", data.data.user.name);
					localStorage.setItem("email", data.data.user.email);
					let role = data.data.user.roles;
					if (role == "admin-event" || role == "admin-super" ||
					    role == "admin-workshop" || role == "admin-guest") {
						localStorage.setItem("admin", true);
						window.location.href = '/adminHome';
					} else {
						localStorage.setItem("admin", false);
						window.location.href = '/';
					}
				},
				error: function(data){
					// alert("Invalid Credentials");
					alert( data ? (data.message || 'Invalid Credentials') : 'Invalid Credentials' );
					localStorage.removeItem("token");
					localStorage.removeItem("logged");
					localStorage.removeItem("admin");
					localStorage.removeItem("name");
					localStorage.removeItem("email");
					window.location.href = '/login';
				}
			});
		});

		$("#forgot").submit(function(e) {
			e.preventDefault();
			var form = $(this);
			var url = link+form.attr('action');
			console.log(url);

			$.ajax({
				type: "POST",
				url: url,
				data: form.serialize(),
				success: function(data){
					alert("A link has been set to your email");
					window.location.href = '/login';
				},
				error: function(data){
					alert(JSON.stringify(data));
					alert("Email not registered");
					window.location.href = '/forgot';
				}
			});
		});

		$("#register").submit(function(e) {
			e.preventDefault();
			// alert("clicked");
			var form = $(this);
			var url = link+form.attr('action');
			var frm_data = form.serialize();

			// console.log(frm_data);
			var x = document.forms["register"]["password"].value;
			var y = document.forms["register"]["confirm_password"].value;
			if(x != y){
				alert("Password don't match");
			} else {
				$.ajax({
					type: "POST",
					url: url,
					data: frm_data,
					success: function(data){
						alert(data);
						window.location.href = '/viewProfile';
					},
					error: function(data){
						// alert("Error"),
						alert( data ? (data.message || 'Error') : 'Error' );
						// window.location.href = '/register';
					}
				});
			}
		});

		$("#modifyProfile").submit(function(e) {
			e.preventDefault();
			// alert("clicked");
			var form = $(this);
			var url = link+form.attr('action');
			var frm_data = form.serializeArray();
			var json = {};
			frm_data.forEach(element => {
				if (element.name != 'email') {
					json[element.name] = element.value;
				}
			});

			// console.log(frm_data);
			// alert(url);
			// alert(JSON.stringify(json));
			// alert(frm_data);
			$.ajax({
				type: "POST",
				url: url,
				data: JSON.stringify(json),
				contentType: "application/json",
				dataType: "json",
				beforeSend: function(request) {
							    request.setRequestHeader("x-auth-token", localStorage.getItem("token"));
							  },
				success: function(data){
					alert(data.message);
					window.location.href = '/viewProfile';
				},
				error: function(data){
					// alert(JSON.stringify(data));
					alert("Error");
					window.location.href = '/viewProfile';
				}
			});
		});

		$("#verify").submit(function(e) {
			e.preventDefault();
			var form = $(this);
			var url = link+form.attr('action');

			$.ajax({
				type: "GET",
				url: url,
				data: form.serialize(),
				success: function(data){
					// alert(data);
					window.location.href = '/success';
				},
				error: function(data){
					alert("Invalid Token");
					window.location.href = '/';
				}
			});
		});

		$(".logoutBtn").click(function(){
			localStorage.removeItem("token");
			localStorage.removeItem("email");
			localStorage.removeItem("logged");
			localStorage.removeItem("admin");
			localStorage.removeItem("name");
			window.location.href = '/login';
			$("#navLogout").hide();
			$("#navLogout2").hide();
		});

		$("#createEvent").submit(function(e) {
			e.preventDefault();
			// alert("clicked");
			var form = $(this);
			var url = link+form.attr('action');
			var frm_data = form.serializeArray();
			var json = {};
			frm_data.forEach(element => {
				json[element.name] = element.value;
			});

			// console.log(frm_data);
			// alert(frm_data);
			$.ajax({
				type: "POST",
				url: url,
				data: JSON.stringify(json),
				contentType: "application/json",
				dataType: "json",
				beforeSend: function(request) {
							    request.setRequestHeader("x-auth-token", localStorage.getItem("token"));
							  },
				success: function(data){
					alert(data.message);
					window.location.href = '/adminEvents';
				},
				error: function(data){
					alert(JSON.stringify(data));
					// alert("Error : "+(data.message));
					// window.location.href = '/regsiter';
				}
			});
		});

		$("#modifyEvent").submit(function(e) {
			e.preventDefault();
			// alert("clicked");
			var form = $(this);
			var url = link+form.attr('action');
			var frm_data = form.serializeArray();
			var json = {};
			frm_data.forEach(element => {
				if (element.name != 'reg_type' && element.name != 'reg_min_team_size' && element.name != 'reg_max_team_size') {
					json[element.name] = element.value;
				}
			});

			// console.log(frm_data);
			// alert(url);
			// alert(JSON.stringify(json));
			// alert(frm_data);
			$.ajax({
				type: "POST",
				url: url,
				data: JSON.stringify(json),
				contentType: "application/json",
				dataType: "json",
				beforeSend: function(request) {
							    request.setRequestHeader("x-auth-token", localStorage.getItem("token"));
							  },
				success: function(data){
					alert(data.message);
					window.location.href = '/viewEvents';
				},
				error: function(data){
					alert(JSON.stringify(data));
					alert("Error");
					window.location.href = '/viewEvents';
				}
			});
		});

		$("#deleteEvent").submit(function(e) {
			e.preventDefault();
			var form = $(this);
			var url = link+form.attr('action');

			$.ajax({
				type: "POST",
				url: url,
				data: form.serialize(),
				beforeSend: function(request) {
							    request.setRequestHeader("x-auth-token", localStorage.getItem("token"));
							  },
				success: function(data){
					// alert(data);
					alert("Deleted Event Successfully")
					window.location.href = '/viewEvents';
				},
				error: function(data){
					alert(JSON.stringify(data));
					alert("Error");
					window.location.href = '/viewEvents';
				}
			});
		});		

		// $(document).bind("contextmenu",function(e) {
		//  e.preventDefault();
		// });
