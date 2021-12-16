import Head from 'next/head';
import Image from 'next/image';
import { signOut, signIn, useSession } from "next-auth/react";
import styles from '../../styles/Home.module.css';

export default function Home({pages}) {
  const yearsExperience = new Date().getFullYear() - 2011;
  return (
    <div className={styles.container}>
        <h1>Admin</h1>
    </div>
  )
}

