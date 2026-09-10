const menu = document.getElementById("menu");
const listmenu = menu.getElementsByTagName("ul")[0];
const pagemenu = document.getElementById("pagemenu");
menu.firstElementChild.firstElementChild.firstElementChild.addEventListener("click", function() {
  if (listmenu.style.display == "none") {
    listmenu.style.display = "flex";
    pagemenu.style.display = "none";
  } else {
    listmenu.style.display = "none";
  }
});
menu.firstElementChild.firstElementChild.lastElementChild.addEventListener("click", function() {
  if (pagemenu.style.display == "none") {
    pagemenu.style.display = "flex";
    listmenu.style.display = "none";
  } else {
    pagemenu.style.display = "none";
  }
});
