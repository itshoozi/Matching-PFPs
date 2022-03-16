var postLength = 6;

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
  
  let tempArray = [1, 2, 3, 4, 5, 6];
  tempArray.shuffle();


  
  // and the result is...

for (let e = 1; e < postLength; e++) {
  let i = tempArray[e];  
    document.getElementById('content').innerHTML += '<div class="grid grid-cols-2 gap-4 max-w-lg mx-auto">' +
    '<a href="images/' + [i] + '_left.jpg" download class="relative">' +
    '<img id="'+ [i] + '" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer min-w-full" src="images/' + i + '_left.jpg" />' +
      '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
        '</svg>' +
      '</div>' +
    '</a>' +
    '<a href="images/' + [i] + '_right.jpg" download class="relative">' +
      '<img id="right" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer" src="images/' + i + '_right.jpg" />' +
      '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
        '</svg>' +
      '</div>' +
    '</a>' +
  '</div>';
};
