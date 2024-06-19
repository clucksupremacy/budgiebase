import Image from "next/image";
import Link from 'next/link';
import styles from "../page.module.css";
import { useEffect, useState } from 'react';
import db from '../db';

export default function Phoenix() {
    const [age, setFavoriteToy] = useState(null);

    useEffect(() => {
        async function fetchFavoriteToy() {
            try {
                const { rows } = await db.query('SELECT favoritetoy FROM budgies WHERE id = 3', ['Mugly']);
                if (rows.length > 0) {
                setFavoriteToy(rows[0].favoritetoy);
                }
            } catch (error) {
                console.error('Error fetching age:', error);
            }
        }

        fetchFavoriteToy();
    }, []);

  return (
    <main className={styles.main}>
      <div>
        <h1>Phoenix</h1>
        <img src='/pictures/phoenix.png' />
        {favoritetoy !== null ? <p>{favoritetoy}</p> : <p>Loading...</p>}
      </div>
    </main>
  );
}
