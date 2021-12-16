import React, {useState} from 'react';
import Link from 'next/dist/client/link';
import RightLinks from './RightLinks';
import Dropdown from './Dropdown';
import styles from './nav.module.css';
export default function Nav({pages}){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarNav}>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a onClick={()=>setClick(false)}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem, styles.dropdown}>
                        <a className="dropdownToggle" onClick={handleClick} >Demos and fun things {click ? <span>&#9650;</span> : <span>&#9660;</span>}</a>
                        {click && <Dropdown  closeDropdown={setClick} />}
                    </li>
                </ul>
            </div>
            <RightLinks />
        </nav>
    )
}