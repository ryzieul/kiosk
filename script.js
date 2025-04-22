const words = [
    'community',
    'scholarship',
    'leadership',
    'democracy',
    'innovation',
    'empowerment'
];

const dynamicWord = document.getElementById('dynamic-word');
let currentIndex = 0;

function changeWord() {
    dynamicWord.style.opacity = '0';
    dynamicWord.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        dynamicWord.textContent = words[currentIndex];
        dynamicWord.style.opacity = '1';
        dynamicWord.style.transform = 'translateY(0)';
    }, 800);
}

// Initial delay before starting the animation
setTimeout(() => {
    // Change word every 4 seconds
    setInterval(changeWord, 4000);
}, 2000); 