function menuPop() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "block") {
      x.style.display = "";
    } else {
      x.style.display = "block";
    }
  }

  function Message_send() {
    alert('Message envoyé');
  }
