const themeSwitcher = document.querySelector('#theme-switcher');

function darkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeSwitcher.children[0].classList.replace('fa-moon', 'fa-sun');
  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  themeSwitcher.children[0].classList.replace('fa-sun', 'fa-moon');
  localStorage.setItem('theme', 'light');
}

function onLoad() {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme || savedTheme == 'light') {
    lightMode();
  } else {
    darkMode();
  }
}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (!currentTheme || currentTheme === 'light') {
    darkMode();
  } else {
    lightMode();
  }
}

themeSwitcher.addEventListener('click', switchTheme);

onLoad();
