let navToggle = 0;

function ToggleHam(event) {
  navToggle++;
  if (navToggle % 2 == 0) {
    document.getElementById("NavListMobo").style.opacity = "0";
    document.getElementById("NavListMobo").style.visibility = "hidden";
    document.getElementById("NavListMobo").style.transform =
      "translateX(-100%)";
    document.getElementById("ham").innerHTML = `<div class="hamburger" id="ham">
        <div id="bur1"></div>
        <div id="bur2"></div>
        <div id="bur3"></div>
    </div>`;
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
    document.getElementById("NavListMobo").style.opacity = "1";
    document.getElementById("NavListMobo").style.visibility = "visible";
    document.getElementById("NavListMobo").style.transform = "translateX(0%)";
    document.getElementById("ham").innerHTML = `<p>&#10006;</p>`;
  }
}
