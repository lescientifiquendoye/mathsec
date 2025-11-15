function racineCarree(x) {
  if (x < 0) throw new Error("Impossible de calculer la racine carrée d'un nombre négatif");
  return Math.sqrt(x);
}

function ln(x) {
  if (x <= 0) throw new Error("ln(x) n'est défini que pour x > 0");
  return Math.log(x);
}

function sinus(x) {
  return Math.sin(x);
}

function cosinus(x) {
  return Math.cos(x);
}

function tangente(x) {
  return Math.tan(x);
}

function carre(x) {
  return x * x;
}

function valeurAbsolue(x) {
  return Math.abs(x);
}

module.exports = {
  racineCarree,
  ln,
  sinus,
  cosinus,
  tangente,
  carre,
  valeurAbsolue
};
