setTimeout(function() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('hide');
  setTimeout (function (){
    overlay.remove()
  }, 1000)
}, 1000)