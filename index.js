document.addEventListener("DOMContentLoaded", e => {

  document.getElementById("submit").addEventListener("click", myFunction);
  function myFunction() {
      var str = document.getElementById('firstName').value; 
      var fir = str.slice(0, 1);
                    document.getElementById('firstLetter').innerHTML = fir
      var seN = document.getElementById('secondName').value; 
      var sec = seN.slice(0, 1);
                    document.getElementById('secondLetter').innerHTML = sec          
      document.getElementById('firstNamePreview').innerHTML = 
                    document.getElementById("firstName").value;
      document.getElementById('secondNamePreview').innerHTML = 
                    document.getElementById("secondName").value;
      document.getElementById('lastNamePreview').innerHTML = 
                    document.getElementById("lastName").value;
      document.getElementById('datePreview').innerHTML = 
                    document.getElementById("date").value;
      document.getElementById('locationPreview').innerHTML = 
                    document.getElementById("weddingLocation").value;
      event.preventDefault();
  }

document.getElementById("vintage").addEventListener("click", vintageFunction);
  function vintageFunction() {
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1539137242503-66ee1f83c7af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=3cc67bcad633cbc1e148993cf3a8291a&auto=format&fit=crop&w=800&q=60)"
      document.getElementById("previewer").style.fontFamily = "Satisfy, cursive";
      document.getElementById("previewer").style.color ="black";
  }
 
 
 document.getElementById("romantic").addEventListener("click", romanticFunction);
  function romanticFunction() {
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=734bdc21c63ca5f61312967a14643955&auto=format&fit=crop&w=1650&q=80)"
      document.getElementById("previewer").style.fontFamily = "Courgette, cursive";
      document.getElementById("previewer").style.color ="white";
  } 
  
  
document.getElementById("modern").addEventListener("click", modernFunction);
  function modernFunction() {
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1517607648415-b431854daa86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8c3c7f6a8f5ded74a4282688d03f3e8&auto=format&fit=crop&w=800&q=60)"
      document.getElementById("previewer").style.fontFamily = "Gloria Hallelujah, cursive";
      document.getElementById("previewer").style.color ="black";
  } 
  
})