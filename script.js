const hellos = ["నమస్కారం", "வணக்கம்", "ನಮಸ್ತೆ", "ഹലോ", "नमस्ते", "Hello"];
const names = ["చాణిక్య నేలపట్ల", "சாணிக்யா நீலபட்லா", "ಚಾಣಿಕ್ಯ ನೆಲಪಟ್ಲ", "ചാണിക്യ നീലപട്ല", "चाणक्य नेलपटला", "Chanikya Nelapatla"];

let index = 0;


function changeText() {
    const helloText = document.getElementById('hello-text');
    const nameText = document.getElementById('name-text');
    helloText.innerHTML = hellos[index];
    nameText.innerHTML = names[index];
    index = (index + 1) % hellos.length;
}

setInterval(changeText, 800);

window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 5000); 
});

function setupTypewriter(t) {
var HTML = t.innerHTML;

t.innerHTML = "";

var cursorPosition = 0,
  tag = "",
  writingTag = false,
  tagOpen = false,
  typeSpeed = 100,
tempTypeSpeed = 0;

var type = function() {

  if (writingTag === true) {
      tag += HTML[cursorPosition];
  }

  if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
          tagOpen = false;
          writingTag = true;
      } else {
          tag = "";
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
      }
  }
  if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
  }
  if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
      }
      else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      }
      t.innerHTML += HTML[cursorPosition];
  }
  if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      writingTag = false;
      if (tagOpen) {
          var newSpan = document.createElement("span");
          t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
      }
  }

  cursorPosition += 1;
  if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
  }

};

return {
  type: type
};
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

function updateTime() {
const now = new Date();
const datetimeElement = document.getElementById('datetime');
const formattedDateTime = now.toLocaleString('en-US', {
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
});
datetimeElement.textContent = formattedDateTime;
}

// Update time initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);
document.addEventListener('DOMContentLoaded', function() {
const menuItems = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll('.main');

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Get the target section id from href attribute
        const targetId = item.getAttribute('href').slice(1);

        // Display the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Close the menu (if open) after selecting an option
        const menuToggle = document.getElementById('menu__toggle');
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

// Initially show the Home section
document.getElementById('home').style.display = 'block';
});