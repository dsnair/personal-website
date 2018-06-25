function openMenu() {
  document.getElementById("navbar").style.display = "inline-flex";
  document.getElementById("navbar").style.justifyContent = "space-around";
  document.getElementById("navbar").style.alignItems = "center";
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("navbar").style.visibility = "visible";
  document.getElementById("navbar").style.width = "100%";
  document.getElementById("navbar").style.height = "8vh";
}

function closeMenu() {
  document.getElementById("navbar").style.opacity = "0";
  document.getElementById("navbar").style.visibility = "hidden";
  document.getElementById("navbar").style.width = "0";
}
