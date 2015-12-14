var sobriety = [{"text": "Inte än", "image": "img/sober.jpg"},
		{"text": "Ja såklart!", "image": "img/drunk.jpg"}];

var sobriety_level = 0;

// var sobriety_array = {{"sobriety": [
//     {"level": "sober",
//      "text": [{"1": "Inte än"}],
//      "image": [{"1": "../img/tommie/sober1.jpg"}]},
//     {"level": "tipsy",
//      "text": [{"1": "Det börjar likna nåt"}],
//      "image": [{"1": "../img/tommie/tipsy1.jpg"}]},
//     {"level": "schwastey",
//      "text": [{"1": "Det börjar likna nåt"}],
//      "image": [{"1": "../img/tommie/schwastey1.jpg"}]},
//     {"level": "hammered",
//      "text": [{"1": "Ja såklart!"}],
//     "image": [{"1": "../img/tommie/hammered.jpg"}]},
//     {"level": "hung over",
//      "text": [{"1": "Han var det, och mår som han förtjänar"}],
//      "image": [{1": "../img/tommie/hung-over.jpg"}]}]}};

function select_status(){
    
}

function unsoberize(){
    document.getElementById("status_img").style.backgroundImage =
	"url('" + sobriety[sobriety_level].image + "')";
    document.getElementById("status_txt").innerHTML = sobriety[sobriety_level].text;
    sobriety_level++;
}

function soberize(){
    
}
