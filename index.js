//get modal element
var modal=document.getElementById('simpleModal');
//get open modal button
var modalBtn= document.getElementById('modalBtn');
//get close button
var closeBtn= document.getElementsByClassName('closeBtn')[0];

//open Modal
modalBtn.addEventListener('click', openModal);
//close Modal
closeBtn.addEventListener('click', closeModal);
//Effect
window.addEventListener('click', outsideClick);

//Fucntions
function openModal(){
  modal.style.display='block';
}

function closeModal(){
  modal.style.display='none'
}

function outsideClick(e){
  if(e.target==modal){
    modal.style.display= 'none';
  }
}


