let x = 0;

function brojacFja() {
  x++;
  let y = 236 - x;
  document.getElementById('tekst').innerHTML = 'Klikni me jos ' + y + ' puta!';

  if (x == 2) {
    document.getElementById('sifra').style.display = 'block';
  }
}
