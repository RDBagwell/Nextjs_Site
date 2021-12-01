import React, {useState} from 'react';
import Link from 'next/dist/client/link';
import styles from './nav.module.css';
import Dropdown from './Dropdown';
export default function Nav(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setClick(false);
        } else {
            setClick(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setClick(false);
        } else {
            setClick(false);
        }
      };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarNav}>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem, styles.dropdown}>
                        <a className="dropdownToggle" onClick={handleClick} >Demos and fun things {click ? <span>&#9650;</span> : <span>&#9660;</span>}</a>
                        {click && <Dropdown />}
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}