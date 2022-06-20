var height = window.screen.availHeight;
var width = window.screen.availWidth;
var newMarginTop = height * 0.6 + 'px';
var wideMarginTop = height * 0.15 + 'px';

if (width < 500) {
  //for mobile
  document.getElementById('myBody').style.backgroundImage = "url('BG2.jpg')";
  document.getElementById('myBody').style.marginTop = newMarginTop;
  document.getElementById('myBody').style.color = "white";
  
}
else {
  //for desktop
  const simlinks = document.querySelectorAll('.simlinks');

  simlinks.forEach(link => {
    link.style.display = "inline";
    link.style.width = "30%";
    link.style.paddingLeft = "5%";
    link.style.paddingRight = "5%";
    link.style.marginLeft = "2.5%";
    link.style.marginRight = "2.5%";
    link.style.fontSize = "36pt";
    });

  document.getElementById('myBody').style.paddingTop = wideMarginTop;
  document.getElementById('myBody').style.backgroundImage = "url('BG-wide.jpg')";
  document.getElementById('header').style.fontSize = "90pt";
  document.getElementById('header').style.webkitTextStrokeWidth = "4px";
  document.getElementById('paragraph').style.marginBottom = "8%";
  document.getElementById('links').style.paddingTop = "10%";
}

//DEBUG

// console.log("The calculated marginTop value is: ", newMarginTop)
// console.log('width is:', width);
// console.log('height is:', height);