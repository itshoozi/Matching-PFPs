var postLength = 7;
let arr = [1, 2, 3, 4, 5, 6, 1001];
let currentIndex = 0;
const button = document.getElementById("butt")

// Put your JavaScript here

Array.prototype.shuffle = function () {
    let input = this;
  
    for (let i = input.length - 1; i >= 0; i--) {
  
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];
  
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }
  
  arr.shuffle();



  // and the result is...
  function load(amount=2) {
    if(currentIndex == arr.length-1) return;
    const newIndex = Math.min(currentIndex+amount+1,arr.length)
    for (let e = currentIndex; e < newIndex;e++) {
    currentIndex = e;
    let i = arr[e];
    if(i > 1000) {
      fileType = 'gif';
    } else {
      fileType = 'jpg';
    }
      document.getElementById('content').innerHTML += '<div id="'+ [i] + '" class="grid grid-cols-2 gap-4 max-w-lg mx-auto fadeIn">' +
      '<a href="images/' + [i] + '_left.' + fileType + '" download class="relative">' +
      '<img id="'+ [i] + '_left" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer min-w-full" src="images/' + i + '_left.' + fileType + '" />' +
        '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
          '</svg>' +
        '</div>' +
      '</a>' +
      '<a href="images/' + [i] + '_right.' + fileType + '" download class="relative">' +
        '<img id="'+ [i] + '_right" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer" src="images/' + i + '_right.' + fileType + '" />' +
        '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
          '</svg>' +
        '</div>' +
      '</a>' +
    '</div>';

      currentIndex = newIndex
  }
  }

window.addEventListener("load", ()=>{load()})
button.addEventListener("click", ()=>{load()})
