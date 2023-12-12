let popUp=document.getElementById("popup-1")
let popUp2=document.getElementById("popup-2")
let playBtn=document.getElementById("play-button")

function openPopUp1(){
  popUp.classList.remove("close-popup-visiblity")
  popUp.classList.remove("close-popup")
  popUp.classList.add("open-popup")
}


function closePopUp1(){
  popUp.classList.add("close-popup")
  // popUp.classList.remove("open-popup")
  setTimeout(()=>{
      // close-popup-visiblity
      popUp.classList.add("close-popup-visiblity")

  },220) 
}


function openpopup2(){
     popUp2.classList.add("openpopup2")
}


function closePopUp2(){
      popUp2.classList.remove("openpopup2")
}

playBtn.addEventListener("click",()=>{
    window.location.href="game.html"
})