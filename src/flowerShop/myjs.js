$(document).ready(function(){
	$("#picture1").load(function(){
		var can1 = document.getElementById("canvas1");
		var pic1 = document.getElementById("picture1");
		can1.width = "500px";
		can1.height = "300px";
		stackBlurImage('picture1','canvas1',50,false);
	})
	$("#picture2").load(function(){
		stackBlurImage('picture2','canvas2',50,false);
	})
	$("#bottom1").click(function(){
		$("#picture1").slideToggle("fast");
	});
	$("#bottom2").click(function(){
		$("#picture2").slideToggle("fast");
	});
});