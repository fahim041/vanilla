console.log('log');

function openTab(e, tabName) {
  let tabContent = document.querySelectorAll('.tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  let tabLinks = document.querySelectorAll('.tablinks');
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  e.currentTarget.className += ' active';
}

document.getElementById('default-tab').click();
