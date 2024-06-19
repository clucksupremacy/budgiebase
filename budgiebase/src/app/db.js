const { Pool } = require('pg');

const pool = new Pool({
  user: 'cherrysong',
  host: 'localhost',
  database: 'budgiebase',
  password: '',
  port: '5432',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
