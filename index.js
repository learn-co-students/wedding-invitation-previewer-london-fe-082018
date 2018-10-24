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

document.getElementById("vintage").addEventListener("click", myFunction);
  function vintageFunction() {
      document.getElementById("previewer").style.color = "blue";
      document.getElementById("previewer").style.fontFamily = "Arial";
      document.getElementById("previewer").style.fontSize = "larger";
  }
})