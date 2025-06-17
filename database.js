const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Assure-toi d’avoir un fichier .env
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;