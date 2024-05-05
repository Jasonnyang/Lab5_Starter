// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  let voices = [];

  function populateVoiceList() {
      voices = speechSynthesis.getVoices();
      voiceSelect.innerHTML = voices
          .map((voice, index) => `<option value="${index}">${voice.name} (${voice.lang})</option>`)
          .join('');
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const textArea = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const smilingFace = document.querySelector('img[alt="Smiling face"]');

  speakButton.addEventListener('click', () => {
      const selectedVoiceIndex = voiceSelect.value;
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      utterance.voice = voices[selectedVoiceIndex];

      // Change face image when speaking
      utterance.onstart = () => {
          smilingFace.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
          smilingFace.src = 'assets/images/smiling.png';
      };

      speechSynthesis.speak(utterance);
});


}