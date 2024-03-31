import Image from "next/image";
import Link from 'next/link';
import styles from "../page.module.css";

export default function Phoenix() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Phoenix</h1>
        <img src='/pictures/phoenix.png' />
      </div>
    </main>
  );
}
