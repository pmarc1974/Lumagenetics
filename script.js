// add class navbarDark on navbar scroll
const header = document.querySelector('navbar-dark');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


const code = '<p class="hero_desc">I am a Web Developer</p>';
const codeContainer = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  codeContainer.innerHTML = code.slice(0, index);
  index++;
  if (index <= code.length) {
    setTimeout(typeWriter, 100); // Adjust the delay (in milliseconds) between each character
  }
}

typeWriter();

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(event) {
    // Get the words
    var words = document.getElementsByClassName("cd-words-wrapper")[0].getElementsByTagName("b");
    
    // Display each word with a delay
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        displayWord(word, i);
    }
});

function displayWord(word, index) {
    setTimeout(function() {
        word.classList.add("is-visible");
    }, index * 2000);
}



