//Getting elements from html document to manipulate and add some js

let popUp=document.getElementById("popup-1")
let popUp2=document.getElementById("popup-2")
let playBtn=document.getElementById("play-button")
let batBtn=document.getElementById("batting")
let bowlBtn=document.getElementById("bowling")
let selectedOption=null;

/*Function for opening popup 1 by adding css style*/
function openPopUp1(){
  popUp.classList.remove("close-popup-visiblity")
  popUp.classList.remove("close-popup")
  popUp.classList.add("open-popup")
}

//Clearing local storage
localStorage.clear()

/*Function for closing popup 1 with the help of timeout*/
function closePopUp1(){
  popUp.classList.add("close-popup")
  // popUp.classList.remove("open-popup")
  setTimeout(()=>{
      // close-popup-visiblity
      popUp.classList.add("close-popup-visiblity")
      localStorage.clear()

  },220) 
}

/*Functions for opening and closing popup-2*/
function openpopup2(){
     popUp2.classList.add("openpopup2")
}

function closePopUp2(){
      popUp2.classList.remove("openpopup2")
}


/*Changing turns depending on user choice between batting or bowling*/
batBtn.addEventListener('click',()=>{
  selectedOption="Batting";
  let turn=1;
  localStorage.setItem("turn",turn)
})

bowlBtn.addEventListener('click',()=>{
  selectedOption="Bowling"
  let turn=3;
  localStorage.setItem("turn",turn)
})



/*Checking if name and nick name is included or not and setting in local storage and going to next page*/
playBtn.addEventListener("click",()=>{
  let name=document.getElementById('name').value;
  let nickName=document.getElementById('nickName').value
  
  if(name=="" && nickName==""){
    alert("Enter Name and NickName")
  }

  else if(name==""){
    alert("Enter Your Name")
  }

  else if(nickName==""){
    alert("Enter Your Nick Name")
  }

  else if(!selectedOption){
    alert("Choose Batting or Bowling")
  }

  else{
    localStorage.setItem("playerName",name)
    localStorage.setItem("playerNickName",nickName)
    window.location.href="game.html"
  }
})
