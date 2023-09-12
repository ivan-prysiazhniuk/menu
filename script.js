window.onload = function () {
  var coll = document.getElementsByClassName("header");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.height){
        content.style.height = null;
      } else {
        content.style.height = "350px";
      }
    });
  }
  // -------
  var coll = document.getElementsByClassName("info");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.style.height = null;
    });
  }

  var loader = document.getElementById("loader-wrapper");
  loader.remove();
  var body = document.getElementsByClassName("main")[0];
  body.classList.remove("loading");
}
