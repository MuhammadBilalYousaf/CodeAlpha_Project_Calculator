// JavaScript to handle calculator functionality

let screen = document.getElementById("screen");
let screenValue = "";

function appendValue(value) {
  screenValue += value;
  screen.innerText = screenValue;
}

function clearScreen() {
  screenValue = "";
  screen.innerText = "0";
}

function calculate() {
  try {
    screenValue = eval(screenValue);
    screen.innerText = screenValue;
  } catch (error) {
    screen.innerText = "Error";
    screenValue = "";
  }
}




// JavaScript to handle the light/dark theme toggle

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if there's a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.checked = savedTheme === 'dark-mode';
}

// Event listener for theme toggle checkbox
themeToggle.addEventListener('change', function() {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');  // Save the theme in localStorage
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');  // Save the theme in localStorage
  }
});
