const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'budgiebase',
  password: '',
  port: '5432',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};