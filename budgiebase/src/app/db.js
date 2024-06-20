const { Pool } = require('pg');

const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'budgiebase',
  password: 'test',
  port: '5432',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
