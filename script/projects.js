document.getElementById('all-btn').addEventListener('click', function() {
  document.getElementById('web-design-img').style.display = 'flex';
  document.getElementById('ui-img').style.display = 'flex';
  document.getElementById('ux-img').style.display = 'flex';
});

document.getElementById('web-design-btn').addEventListener('click', function() {
  document.getElementById('web-design-img').style.display = 'flex';
  document.getElementById('ui-img').style.display = 'none';
  document.getElementById('ux-img').style.display = 'none';
});

document.getElementById('ui-img-btn').addEventListener('click', function() {
  document.getElementById('web-design-img').style.display = 'none';
  document.getElementById('ui-img').style.display = 'flex';
  document.getElementById('ux-img').style.display = 'none';
});

document.getElementById('ux-img-btn').addEventListener('click', function() {
  document.getElementById('web-design-img').style.display = 'none';
  document.getElementById('ui-img').style.display = 'none';
  document.getElementById('ux-img').style.display = 'flex';
});
