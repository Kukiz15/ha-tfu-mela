function playKukiz() {
	var audio = document.getElementById("testoAudio");
	var video = document.getElementById("kukizVideo");
	
	audio.play();
	document.getElementById('kukizVideo').volume = 0.5;
	video.play();
}