import React, {useState} from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import styles from './nav.module.css';
import Dropdown from './Dropdown';
export default function Nav(){
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
                        {click && <Dropdown closeDropdown={setClick} />}
                    </li>
                </ul>
            </div>
            <div className={styles.rightLinks}>
                <Link href="https://www.linkedin.com/in/robert-bagwell-341a4622">
                    <a>
                        <Image width="40" height='40' src='/images/linkedIn.png' alt="In"></Image>
                    </a>
                </Link>
                <Link href="https://github.com/RDBagwell/robertbagwell.com">
                    <a>
                        <Image width="40" height='40' src='/images/gitHubBlack.png' alt="In"></Image>
                    </a>
                </Link>
            </div>
        </nav>
    )
}