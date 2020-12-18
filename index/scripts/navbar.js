function openNav() {
  document.getElementById("links").style.width = "100%";
  document.getElementById("nav_header").style.display = "none";
}

function closeNav() {
  document.getElementById("links").style.width = "0";
  setTimeout(() => {
    document.getElementById("nav_header").style.display = "block";
  }, 350);
}
