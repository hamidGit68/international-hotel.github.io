function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;
}

function toggleDisplay(elem){
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === 'none' || curDisplayStyle === ''){
    elem.style.display = 'block';
  }
  else{
    elem.style.display = 'none';
  }

}

function toggleMenuDisplay(e){
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.icofont-stylish-right');

  toggleClass(menu,'hide');
  toggleClass(icon,'rotate-90');
}

function handleOptionSelected(e){
  toggleClass(e.target.parentNode, 'hide');

  idopt = e.target.id;
    // alert(id);
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown .title');
  const icon = document.querySelector('.dropdown .title .icofont-stylish-right');


  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon,'rotate-90',0));
}

function handleTitleChange(e){
    const result = document.getElementById('result');

    // var optShow = document.getElementById("idopt");
    var divShow = document.getElementById(idopt+"_text");
    // divShow.removeClass("display-none");

    // e.target.innerHTML
    result.innerHTML =  divShow.innerHTML;
}

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);

dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);


// changing the options of dropdown to Dates
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
var twoDay = new Date(tomorrow);
twoDay.setDate(twoDay.getDate() + 1);
var threeDay = new Date(twoDay);
threeDay.setDate(threeDay.getDate() + 1);

let dateObj = {
    emrooz: today,
    farda: tomorrow,
    passFarda: twoDay,
    pasOn: threeDay
}


function getOpt() {
    /* geting option elements and put them in an array for using next */
    var numDay = 4; /* number of days shown in dropdown */
    var optionElements = [];
    for (let io = 0; io<numDay; io++) {
    let gozi = io+1;
    let opt = document.getElementById("option" + gozi);
    // alert(opt.innerText);
    optionElements.push(opt);
}
    return optionElements;
}


let options = getOpt();
let count = 0;
for (let i2 in dateObj) {
    let month = dateObj[i2].getMonth()+1;
    options[count].innerText = dateObj[i2].getFullYear()  + " / " + month + " / " + dateObj[i2].getDate();
    ++count;
}

// end of ----- changing the options of dropdown to Dates


// changing the "left" word to "top" in 576px below
let winsize = window.innerWidth;
if(winsize < 576) {
  document.getElementById("chWord").innerText = "upper";
}
// end of ----- changing the "left" word to "top" in 576px below
