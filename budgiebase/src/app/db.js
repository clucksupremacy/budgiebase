const { Pool } = require('pg');

const pool = new Pool({
<<<<<<< HEAD
  user: '',
=======
  user: 'cherrysong',
>>>>>>> 5f8525c (save for later)
  host: 'localhost',
  database: 'budgiebase',
  password: '',
  port: '5432',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
