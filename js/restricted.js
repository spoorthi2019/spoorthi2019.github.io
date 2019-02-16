// Admin
$(document).ready(function(){
	// console.log(window.location.pathname);
	var path = window.location.pathname;
	var restricted = ['/adminEvents', '/modifyEvents', '/deleteEvents', '/viewEvents', '/adminHome'];
	if(restricted.includes(path) == true){
		if(localStorage.getItem("admin")!="true"){
			window.location.href = '/notfound';
		}
	}
});