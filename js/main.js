let total = 6 + 1;

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }



  function replaceImage() {
    let random = getRandomArbitrary(1, total);
    document.getElementById("left").src = "images/" + random + "_left.jpg";
    document.getElementById("right").src = "images/" + random + "_right.jpg";
  
    left.classList.add("-translate-x-10");
    right.classList.add("translate-x-10");
    setTimeout(function () {
      left.classList.remove("-translate-x-10");
      right.classList.remove("translate-x-10");
      document.getElementById("id").innerHTML = random;
    }, 140);
  }
  
  function downloadRight(){
    const a  = document.createElement('a');
    a.setAttribute('download', "");
    a.href = document.getElementById("right").src
    a.click()
  }

  function downloadLeft(){
    const a  = document.createElement('a');
    a.setAttribute('download', "");
    a.href = document.getElementById("left").src
    a.click()
  }