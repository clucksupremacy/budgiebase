import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM budgies');
    //debugging
    // console.log('DB result:', result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
