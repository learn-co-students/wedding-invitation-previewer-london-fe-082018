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
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1524563970700-a302b6888e17?ixlib=rb-0.3.5&s=53f75f9c054e0dad9330a18b2d9b1088&auto=format&fit=crop&w=800&q=60)"
      document.getElementById("previewer").style.fontFamily = "Diplomata, cursive";
      document.getElementById("previewer").style.color ="black";
      document.getElementById("inviteBody").style.borderStyle = "none";
      document.getElementById("inviteBody").style.backgroundColor = "rgba(255,255,255,0.4)";
      var x = document.getElementsByClassName("editable");
      for (let i = 0; i < x.length; i = i + 1) {
        x[i].style.color ="white"
        x[i].style.fontFamily = "Special Elite, cursive"
      }
  }
 
 
 document.getElementById("romantic").addEventListener("click", romanticFunction);
  function romanticFunction() {
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1470322346096-ecab3914cab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c06a8ab9abddc96165482e491bec4dd6&auto=format&fit=crop&w=800&q=60)"
      document.getElementById("previewer").style.fontFamily = "Marck Script, cursive";
      document.getElementById("previewer").style.color ="black";
      document.getElementById("inviteBody").style.backgroundColor = "rgba(255,255,255,0.4)";
      document.getElementById("inviteBody").style.borderStyle = "none";
      var x = document.getElementsByClassName("editable");
      for (let i = 0; i < x.length; i = i + 1) {
        x[i].style.color ="black"
        x[i].style.fontFamily = "Marck Script, cursive"
      }
  } 
  
  
document.getElementById("modern").addEventListener("click", modernFunction);
  function modernFunction() {
      document.getElementById("previewer").style.backgroundImage = "url(https://images.unsplash.com/photo-1517607648415-b431854daa86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8c3c7f6a8f5ded74a4282688d03f3e8&auto=format&fit=crop&w=800&q=60)"
      document.getElementById("previewer").style.fontFamily = "Gloria Hallelujah, cursive";
      document.getElementById("previewer").style.color ="black";
      document.getElementById("inviteBody").style.backgroundColor = "rgba(255,255,255,0)";
      document.getElementById("inviteBody").style.borderStyle = "dotted";
      var x = document.getElementsByClassName("editable");
      for (let i = 0; i < x.length; i = i + 1) {
        x[i].style.color ="red"
        x[i].style.fontFamily = "Gloria Hallelujah, cursive"
      }
  } 
  
})