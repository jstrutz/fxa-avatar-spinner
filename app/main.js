window.addEventListener('load', function() {
  var container = document.querySelector('.avatar-view');
  var loadButton = document.getElementById('loadButton');
  var spinner = document.getElementById('spinner');
  loadButton.addEventListener('click', function() {
    spinner.classList.add('loaded');
  })
});
