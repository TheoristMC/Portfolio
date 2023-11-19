function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toLink(link) {
  window.location.href = link;
}

window.onload = function() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('screen').style.display = 'flex';
};
