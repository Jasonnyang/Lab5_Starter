document.addEventListener('DOMContentLoaded', function() {
  init();
});

function init() {
  updateHorn();
  updateVolume();
  setupPlayButton();
}

function updateHorn() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornAudio = document.querySelector('audio');

  hornSelect.addEventListener('change', function() {
      let hornValue = hornSelect.value;
      hornImage.src = `assets/images/${hornValue}.svg`;
      hornAudio.src = `assets/audio/${hornValue}.mp3`;
  });
}

function updateVolume() {
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const hornAudio = document.querySelector('audio');

  volumeSlider.addEventListener('input', function() {
      const volume = volumeSlider.value;
      hornAudio.volume = volume / 100;

      if (volume == 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volume < 33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';      
      } else if (volume < 67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';          
      } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  });
}

function setupPlayButton() {
  const playButton = document.querySelector('button');
  const hornAudio = document.querySelector('audio');
  const jsConfetti = new JSConfetti(); 

  playButton.addEventListener('click', function() {
      hornAudio.play();
      console.log(hornAudio.src);
      if (document.getElementById('horn-select').value === 'party-horn') {
          jsConfetti.addConfetti();
      }
  });
}
