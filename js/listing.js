var postLength= 6;
//Empty container:
//Loop:
for (let i=1; i < (postLength + 1); i++) {
    document.getElementById('content').innerHTML += '<div class="grid grid-cols-2 gap-4 max-w-lg mx-auto">' +
    '<div onclick="downloadLeft();" class="relative">' +
    '<img id="left" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer min-w-full" src="images/' + [i] + '_left.jpg" />' +
      '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
        '</svg>' +
      '</div>' +
    '</div>' +
    '<div onclick="downloadRight();" class="relative">' +
      '<img id="right" class="duration-300 mx-auto rounded-3xl shadow-lg aspect-square peer" src="images/' + [i] + '_right.jpg" />' +
      '<div class="bg-transparent h-full justify-center w-full flex peer-hover:opacity-100 hover:opacity-100 jj opacity-0 backdrop-blur-sm absolute top-0 rounded-3xl">' +
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 self-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />' +
        '</svg>' +
      '</div>' +
    '</div>' +
  '</div>';
};
