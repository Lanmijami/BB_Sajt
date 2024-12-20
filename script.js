let x = 0;

function brojacFja() {
  x++;
  let y = 336 - x;
  document.getElementById('tekst').innerHTML = 'Klikni me jos ' + y + ' puta!';

  if (x == 336) {
    document.getElementById('sifra').style.display = 'block';
  }
}
