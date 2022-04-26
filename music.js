//Play & stop music - CC SurvExE-Pc github 2021-2022
function Music(id, surl, auto, loop, hide, vol, main, inew) {
    if (inew == true) {
        window.music = document.createElement("audio");
    };
	if (main == "play") {
    	window.music.setAttribute("id",id);
    	window.music.setAttribute("src",surl); //base url is "https://ia902506.us.archive.org/8/items/united-states-of-americas-national-anthem/United%20States%20of%20America%27s%20National%20Anthem.mp3"
		window.music.setAttribute("autostart", auto); 
		window.music.setAttribute("loop", loop); 
		window.music.setAttribute("hidden", hide);
		window.music.setAttribute("volume", vol); 
    	window.music.append();
    	//window.music.appendChild("audio");
    	window.music.play();
	};
	if (main == "stop") {
        window.music.setAttribute("src","");
        window.music.remove();
        window.music = "";
	};
}; /* usage:
  Music("usa anthem", "https://ia601408.us.archive.org/28/items/nvrgnnagvuup/rickroll.mp3", true, true, false, '100', "play", true);
};
*/
