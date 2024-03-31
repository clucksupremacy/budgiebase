import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Featured Budgie of the Day</h1>
        <h2>Phoenix</h2>
        <Link
          href='/phoenix'
        >
          <img src='/pictures/phoenix.png' />
          <p>Click here to learn more</p>
        </Link>
      </div>
    </main>
  );
}
