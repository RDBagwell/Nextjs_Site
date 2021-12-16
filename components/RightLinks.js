import Image from 'next/image';
import styles from './nav.module.css';

export default function RightLinks() {
    return(
        <div className={styles.rightLinks}>
        <a href="https://www.linkedin.com/in/robert-bagwell-341a4622" target="_blank">
            <Image width="40" height='40' src='/images/linkedIn.png' alt="In"></Image>
        </a>
        <a href="https://github.com/RDBagwell/robertbagwell.com" target="_blank">
            <Image width="40" height='40' src='/images/gitHubBlack.png' alt="In"></Image>
        </a>
    </div>
    )
}