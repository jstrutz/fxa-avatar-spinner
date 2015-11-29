window.addEventListener('load', function() {
  var container = document.querySelector('.avatar-view');
  var spinner = document.querySelector('.avatar-loading-spinner');
  var loadButton = document.getElementById('loadButton');

  loadButton.addEventListener('click', function() {
    spinner.classList.add('loaded');
  })
});
