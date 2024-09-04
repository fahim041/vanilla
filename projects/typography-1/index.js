const themeSwitcher = document.querySelector('#theme-switcher');

function darkMode() {
  themeSwitcher.children[0].classList.replace('fa-moon', 'fa-sun');
  localStorage.setItem('theme', 'light');
}

function lightMode() {
  themeSwitcher.children[0].classList.replace('fa-sun', 'fa-moon');
  localStorage.setItem('theme', 'dark');
}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme');

  if (!currentTheme || currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

themeSwitcher.addEventListener('click', switchTheme);

switchTheme();
