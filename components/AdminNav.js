import Link from 'next/link';
import RightLinks from './RightLinks';
import styles from './nav.module.css';
export default function AdminNav() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarNav}>
                    <li className={styles.navItem}>
                        <Link href='/admin'>
                            <a>Admin Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href='/admin/create_page_link'>
                            <a>Create Page Link</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <RightLinks />
        </nav>
    )
}