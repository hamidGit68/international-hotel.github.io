// JavaScript Document
var myVar;
function loaderFunc() {
	if(window.innerWidth > 516) {
		myVar = setTimeout(showPage, 10400);	
	} else {
		myVar = setTimeout(showPage, 1);
	}
  
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    if(document.body.clientWidth > 1080) {
    hamid.render('if you want to know about our special booking discounts for holidays, you should <span>follow our social networks</span>', 5000, window.innerHeight);
    }
//         activating wow.js
    new WOW().init(); 
    changeNesbat();
}