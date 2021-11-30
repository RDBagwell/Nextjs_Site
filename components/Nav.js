import styles from './nav.module.css';
import Dropdown from './Dropdown';
export default function Nav(){
    return (
        <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <a>Home</a>
                </li>
            </ul>
            <Dropdown></Dropdown>
        </div>
        <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>....</div>
        </div>
    </nav>
    )
}