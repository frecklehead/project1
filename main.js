const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const storyText = document.getElementById('story-text');
const narration = document.getElementById('narration');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

let animationFrame;
let animationPosition = 0;

// Define your stickman animation function here
function animateStickman() {
    // Add your stickman animation logic here
}

// Play the narration and start the animation
playButton.addEventListener('click', () => {
    narration.currentTime = animationPosition; // Resume narration from the current animation position
    narration.play();
    animateStickman();
    playButton.disabled = true;
    pauseButton.disabled = false;
});

// Pause the narration and animation
pauseButton.addEventListener('click', () => {
    narration.pause();
    cancelAnimationFrame(animationFrame);
    animationPosition = narration.currentTime;
    playButton.disabled = false;
    pauseButton.disabled = true;
});

// Update the story text as the narration progresses
narration.addEventListener('timeupdate', () => {
    storyText.innerText = 'Narration Time: ' + narration.currentTime;
});

// Load the narration audio
narration.load();