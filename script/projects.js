function setDisplayStyle(webDesign, ui, ux) {
  document.getElementById('web-design-img').style.display = webDesign ? 'flex' : 'none';
  document.getElementById('ui-img').style.display = ui ? 'flex' : 'none';
  document.getElementById('ux-img').style.display = ux ? 'flex' : 'none';
}

function setButtonStyleActive(button) {
  if (button == 'all') {
    document.getElementById('all-btn').classList.add('colored-button')
  } else {
    document.getElementById('all-btn').classList.remove('colored-button');
  }

  if (button == 'ui') {
    document.getElementById('ui-btn').classList.add('colored-button')
  } else {
    document.getElementById('ui-btn').classList.remove('colored-button');
  }

  if (button == 'ux') {
    document.getElementById('ux-btn').classList.add('colored-button')
  } else {
    document.getElementById('ux-btn').classList.remove('colored-button');
  }

  if (button == 'web') {
    document.getElementById('web-design-btn').classList.add('colored-button')
  } else {
    document.getElementById('web-design-btn').classList.remove('colored-button');
  }
}

document.getElementById('all-btn').addEventListener('click', function () {
  setDisplayStyle(true, true, true);
  setButtonStyleActive('all');
});

document.getElementById('ui-btn').addEventListener('click', function () {
  setDisplayStyle(false, true, false);
  setButtonStyleActive('ui');
});

document.getElementById('ux-btn').addEventListener('click', function () {
  setDisplayStyle(false, false, true);
  setButtonStyleActive('ux');
});

document.getElementById('web-design-btn').addEventListener('click', function () {
  setDisplayStyle(true, false, false);
  setButtonStyleActive('web');
});
