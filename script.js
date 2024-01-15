
// Function to play the sound corresponding to the right key
function playSound(keyCode) {
  // Find the audio element with the matching key code
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  // matching it up with the key 
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
 

  // Check if the audio/key isn't found(so don't play if a random letter is pressed)
  if (!audio || !key) return;

  // css styling
  key.classList.add('playing');
  // Rewind the audio to the beginning
  audio.currentTime = 0;
  // Play the sounds
  audio.play();
}

// Function to remove the 'playing' class after a CSS transition ends
function removeTransition(e) {
  // Check if the transition property is 'transform' - a css property that allows you to apply transformations the scale property in this case 
  if (e.propertyName !== 'transform') return;
  // ends the click removing the styling and returning the button to it's normal state
  e.target.classList.remove('playing');
}

// Find the container element with the class keys
const keysContainer = document.querySelector('.keys');

// Add event listener for the 'transitionend' event on the container
keysContainer.addEventListener('transitionend', removeTransition);

// for when you click on the button
keysContainer.addEventListener('click', function (e) {
  // Check if the clicked element or its ancestor has the class 'key'
  if (e.target.matches('.key, .key *')) {
    // Find the closest ancestor with the class 'key'
    const keyCode = e.target.closest('.key').getAttribute('data-key');
    // Call the playSound function with the extracted keyCode
    playSound(keyCode);
     // css styling
  key.classList.add('playing');
  // Rewind the audio to the beginning
  audio.currentTime = 0;
  // Play the sounds
  audio.play();
  }
});

// qdd event listener to listen out for 'keydown' event on the window
window.addEventListener('keydown', function (e) {
  // call the playSound function with the keyCode from the keydown event
  playSound(e.keyCode); //crossed out cos it's old but everytime I try to make it contemporary the code breaks lolol
});

