function graph(){
  document.getElementsByClassName("graphicsDiv")[0].style.display="block";
  document.getElementsByClassName("uxDiv")[0].style.display="none";
  document.getElementsByClassName("webDiv")[0].style.display="none";
  document.getElementsByClassName("graph")[0].style.background="var(--red)";
  document.getElementsByClassName("graph")[0].style.color="white";
  document.getElementsByClassName("web")[0].style.color="black";
  document.getElementsByClassName("web")[0].style.background="transparent";
  document.getElementsByClassName("ui")[0].style.background="transparent"
  document.getElementsByClassName("ui")[0].style.color="black"
}


function ui(){
  document.getElementsByClassName("graphicsDiv")[0].style.display="none";
  document.getElementsByClassName("uxDiv")[0].style.display="flex";
  document.getElementsByClassName("webDiv")[0].style.display="none";
  document.getElementsByClassName("graph")[0].style.background="transparent";
  document.getElementsByClassName("graph")[0].style.color="black";
  document.getElementsByClassName("web")[0].style.color="black";
  document.getElementsByClassName("web")[0].style.background="transparent";
  document.getElementsByClassName("ui")[0].style.background="var(--red)"
  document.getElementsByClassName("ui")[0].style.color="white"

}
function web(){
  document.getElementsByClassName("graphicsDiv")[0].style.display="none";
  document.getElementsByClassName("uxDiv")[0].style.display="none";
  document.getElementsByClassName("webDiv")[0].style.display="flex";
  document.getElementsByClassName("graph")[0].style.background="transparent";
  document.getElementsByClassName("graph")[0].style.color="black";
  document.getElementsByClassName("web")[0].style.color="white";
  document.getElementsByClassName("web")[0].style.background="var(--red)";
  document.getElementsByClassName("ui")[0].style.background="transparent"
  document.getElementsByClassName("ui")[0].style.color="black"

}

// document.onreadystatechange = function () {
//   document.querySelector("body").style.visibility = "none";
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "none";

//     document.querySelector(".loader").style.visibility = "visible";
//   } else {
//     document.querySelector(".loader").style.display = "none";

//     document.querySelector("body").style.visibility = "visible";
//   }
// };

function openMenu(){
  document.getElementsByClassName("menu")[0].style.top="0%";
}

function closeMenu(){
  document.getElementsByClassName("menu")[0].style.top="-3%";
}

