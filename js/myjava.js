$("#my-carousel").carousel({
    interval : 4050,
    pause:false
});

// function for playing videos

function playVideo() {
    var btnm = document.getElementById("play-pause");
    var icon1 = document.getElementById("icon-play");
    var vide = document.querySelector(".video-container video");
    var progress = document.querySelector(".range-progress");

    if (vide.paused) {
        vide.play();
        icon1.classList.remove("icofont-ui-play");
        icon1.classList.add("icofont-ui-pause");
    } else {
        vide.pause();
        icon1.classList.add("icofont-ui-play");
        icon1.classList.remove("icofont-ui-pause");
    }

    vide.addEventListener('timeupdate', function () {
        var darsad = vide.currentTime / vide.duration;
        progress.style.width = darsad*100 + "%";
        if (vide.ended) {
            icon1.classList.add("icofont-ui-play");
            icon1.classList.remove("icofont-ui-pause");
        }
    });
}

var pageKol = document.getElementById("page");
// functions for alert window
function CustomAlert(){
    this.render = function(dialog, delay, winHei){

        var winwi = window.getComputedStyle(pageKol);
        var winW = winwi.width;
        var winH = winHei;
//        alert(winW);
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        setTimeout(function () {
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH+ "px";
        },delay);

        /* the above line defines the height of "div" that
        don't allow user to interact with website*/

        var widthFinal = ( parseFloat( winW ) /2 ) - (550 * .5);
//        alert(widthFinal);
//        alert(typeof(widthFinal));
        dialogbox.style.left = widthFinal +"px";

//        (winW/2) - (550 * .5)+"px"
        /* the above line defines makes the dialog in center of the width*/
            dialogbox.style.top = "50px";
            dialogbox.style.display = "block";



        dialogbox.onmouseenter = iconChange;
        dialogbox.onmouseleave = iconChange1;
        document.getElementById('dialogboxhead').innerHTML =
            " <i class=\"icofont-hotel-boy-alt border-noghte\"></i>";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML =
            '<button class="btnAlert" onclick="hamid.ok()">OK</button>';
    };
    this.ok = function(){
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
var hamid = new CustomAlert();

function iconChange() {
    var icon1 = document.getElementById('dialogboxhead');
    icon1.innerHTML = "<i class=\"icofont-hotel-boy border-noghte " +
        "border-solid\"></i>"
}

function iconChange1() {
    var icon1 = document.getElementById('dialogboxhead');
    icon1.innerHTML = "<i class=\"icofont-hotel-boy-alt border-noghte\"></i>"
}


// slider for sponsors




  var slideIndex = 0;


  function showSlides() {


    var slides = document.getElementsByClassName("one-slide");
    let parSlide = document.querySelector(".parentSlide");
    let topSlide =parseFloat(window.getComputedStyle(parSlide).getPropertyValue("height")) ;
    if(isNaN(topSlide)) {
      topSlide = 450;
    }
    console.log(topSlide);
  //  let dots = document.getElementsByClassName("dot");
  //  for (let i = 0; i < slides.length; i++) {
  //    slides[i].style.top = topSlide*(i) + "px";
  //  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
  //  for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //  }

      for (let i = 0; i < slides.length; i++){
          slides[i].style.top = topSlide + "px";
          slides[slideIndex-1].style.top = 0 + "px";
      }

  //  dots[slideIndex-1].className += " active";
   var idset = setTimeout(showSlides, 4000); // Change image every 4 seconds

    var imgArr = document.querySelectorAll(".srcImg");

    parSlide.onmouseenter = function() {
        clearTimeout (idset);
        this.classList.add("bg-inter");
        this.classList.remove("bg-default");
        for(i2 in imgArr) {
            imgArr[i2].src = `image/sponsors/sponsor${i2}-sabz.png`; /* you must enter the local adress from "HTML" file, because the adress is loaded at "HTML" file */
        }
    }

    parSlide.onmouseleave = function() {
        showSlides();
        this.classList.add("bg-default");
        this.classList.remove("bg-inter");
        for(i2 in imgArr) {
            imgArr[i2].src = `image/sponsors/sponsor${i2}-banafsh.png`; /* you must enter the local adress from "HTML" file, because the adress is loaded at "HTML" file */
        }
    }
  }
  showSlides();
//
// let imagesSlide = document.getElementsByClassName("srcImg");
//
// function imageResp() {
//   /* this function get the width of each image and makes the ratio between height and width equal to "1.4" */
//   let widImg = parseFloat(window.getComputedStyle(imagesSlide.item(0)).getPropertyValue("width"));
//   let higImg = widImg / 1.4;
//   /* a loop that iterate all images in slider and set a height for them */
//   $(imagesSlide).each( function(index, elememt) {
//     $(elememt).css("height", higImg + "px");
//   });
//
//
// }
// setTimeout(imageResp, 10500);




// booking part
var btnBook = document.getElementById("btn-booking");
var inputElements = document.getElementsByClassName("content-form");
var emailInp = document.getElementById("inputEmail");
var countryInp = document.getElementById("country");
var backDiv = document.querySelector(".bg-property");
var h1Book = document.getElementById("head-book");
var pBook = document.getElementById("matn-book");


btnBook.onclick = function (event) {
    var dialogbox = document.getElementById('dialogbox');
    dialogbox.classList.remove("delay-5s");/* the alert window without delay */

    let lenInput = inputElements.length;
//    alert(lenInput);
    for (let i = 0; i<lenInput; i++) {
        var classInputElements = inputElements[i].classList;
        var truFal = classInputElements.contains("invisible");
//        alert(truFal);
        if(truFal) {
            event.preventDefault();
            inputElements[i].classList.remove("invisible");

            btnBook.innerText = "Submit";

            backDiv.classList.add("bg-click");
            backDiv.classList.remove("bg-hotel");

            h1Book.classList.add("color-high");
            h1Book.classList.remove("color-white");
//            h1Book.innerHTML = "thank you for booking";

            pBook.classList.add("color-high");
            pBook.classList.remove("color-white");
        }

    }

}

function submitVal() {
    if (emailInp.value.length !== 0 && countryInp.value.length !== 0) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailInp.value.match(mailformat))
        {
            return true;
        }
        else{
            hamid.render("You have entered an <span>invalid</span> email address!", 0, window.innerHeight);
            return false;
        }

    } else {
        hamid.render("You must <span>fill</span> all inputs!", 0, window.innerHeight);
        return false;
    }
}

// input styles onblur

var labels = document.getElementsByClassName("content-form");
function focusChange(inputEle) {
    idThis = inputEle.id;
//    let inpThis = document.getElementById(idThis);
    for (let i=0; i<labels.length; i++) {
        let idLabel = labels[i].getAttribute("for");
        if(idLabel == idThis && inputEle.value.length !== 0) {
//            alert(idLabel);
            labels[i].style.top = -50 + "%";
            labels[i].style.color = "#000";
        }

    }
}


// toggle button in low width


function toggFun() {
    const winWidth = window.innerWidth;
    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");
    let claIco = icon2.classList;
    if(winWidth < 485) {
        let butt = document.getElementsByClassName("btn-tog");
        let nav1 = document.getElementById("navToggle");
        let logo = document.getElementById("logoId");
        let matn = document.getElementsByClassName("matn-header");
        let nav2 = document.getElementById("navbarToggler");
        let claLis = logo.classList;

        if(claLis.contains("col-9")) {
            logo.classList.remove("col-9");
            nav1.classList.remove("col-3");
            matn[0].classList.add("d-none");
            logo.classList.add("d-none");
            nav1.classList.add("col-12");
            nav2.classList.add("col-9");
            butt[0].classList.add("col-3");
            butt[0].classList.add("float-right");
            icon1.classList.remove("iconClass");
        } else {
            logo.classList.add("col-9");
            nav1.classList.add("col-3");
            matn[0].classList.remove("d-none");
            logo.classList.remove("d-none");
            nav1.classList.remove("col-12");
            nav2.classList.remove("col-9");
            butt[0].classList.remove("col-3");
            butt[0].classList.remove("float-right");
            icon1.classList.add("iconClass");
        }

    }

    if(winWidth < 576) {
        if(claIco.contains("d-none")) {
            icon2.classList.remove("d-none");
            icon2.classList.add("mt-5");
            icon1.classList.add("d-none");
        } else {
            icon2.classList.add("d-none");
            icon2.classList.remove("mt-5");
            icon1.classList.remove("d-none");
        }
    }
}


/* for card responsive */
cardParent = document.getElementsByClassName("card-body");
cardText = document.getElementsByClassName("card-text");


//window.onresize = function ()

 function changeNesbat() {
    let winArz = window.innerWidth;
    const sarib = .58;
    let hei1 = parseFloat(window.getComputedStyle(cardParent[0], null).getPropertyValue("height"));
    let hei2 = parseFloat(window.getComputedStyle(cardText[0], null).getPropertyValue("height"));
    let nesbat = hei2 / hei1;

if (winArz > 767) {

//    alert(nesbat);

    if (nesbat < sarib) {

    [].forEach.call( cardParent, function (cardP) {
    let childs = cardP.children;
//        alert(childs[2]);
    childs[2].classList.add("d-inline-block");
    childs[2].classList.remove("d-none");
    let pChilds = childs[1].children;
    pChilds[0].classList.add("d-none");
    pChilds[0].classList.remove("d-inline");
    } );

    } else {

    [].forEach.call( cardParent, function (cardP) {
    let childs = cardP.children;
    childs[2].classList.remove("d-inline-block");
    childs[2].classList.add("d-none");
    let pChilds = childs[1].children;
    pChilds[0].classList.remove("d-none");
    pChilds[0].classList.add("d-inline");
    } );

    }


} else {

    [].forEach.call( cardParent, function (cardP) {
    let childs = cardP.children;
    let pChilds = childs[1].children;
    pChilds[0].classList.remove("d-none");
    pChilds[0].classList.add("d-inline");
    } );

}

}
