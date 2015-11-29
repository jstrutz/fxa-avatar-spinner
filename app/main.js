window.addEventListener('load', function() {
  var container = document.querySelector('.avatar-view');
  var spinner = document.querySelector('.avatar-loading-spinner');
  var profileImage = document.querySelector('.profile-image');
  var loadImageButton = document.getElementById('loadImageButton');
  var loadDefaultButton = document.getElementById('loadDefaultButton');


  var resetButton = document.getElementById('resetButton');

  resetButton.addEventListener('click', function() {
    spinner.classList.remove('loaded');
    container.classList.remove('with-default');
    profileImage.classList.remove('show');
  });


  loadImageButton.addEventListener('click', function() {
    spinner.classList.add('loaded');
    profileImage.classList.add('show');
  });

  loadDefaultButton.addEventListener('click', function() {
    console.log('show default');
    spinner.classList.add('loaded');
    container.classList.add('with-default');
  });

});
