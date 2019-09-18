/*function menuPop() {
    document.getElementById('navMenu').style.display = 'block';
  }
*/
function menuPop() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  if  (document.body.clientWidth > 769) {
    x.style.display = "block";
  }