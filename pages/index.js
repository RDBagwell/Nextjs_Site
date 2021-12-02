import Head from 'next/head';
import Image from 'next/image';
import DemosCard from '../components/DemosCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const yearsExperience = new Date().getFullYear() - 2011;
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1>Hello I&lsquo;m <span className={styles.nameHighlight}>Robert Bagwell.</span></h1>
        <h2>I&lsquo;m a web developer.</h2>
      </div>
      <div className={styles.mainImage}>
        <div className={styles.myImg} ><Image src='/me.jpg' width={250} height={250} alt="Robert Bagwell" title="Robert Bagwell" /></div>
        <div className={styles.mainContent}>I&lsquo;m passionate about programming. I&lsquo;ve be a web developer for over {yearsExperience} years now. I have tons of hands-on
          experience efficiently coding websites and applications using the latest technologies, such as NodeJS
          and ES6. I have expert knowledge of PHP, HTML, CSS and JavaScript. I&lsquo;m constantly engaged in learning
          and expanding my programming expertise by learning other programming languages. I&lsquo;ve done everything
          from building site form scratch to working in a large team on just certain parts of a site. I&lsquo;ve worked
          on big e-commerce site to small independently owned sites and ran the gamut of being a Full Stack
          Developer to just focusing on UX/UI.
          <br /><br />
          So that&lsquo;s my professional background, a little about my personal life. When I&lsquo;m not programming I enjoy
          a good movie, I&lsquo;m a huge movie buff. I also enjoy gaming to relax. Other things about me I like to
          design and was a graphic designer before I started in web development.
        </div>
      </div>
      <div className={styles.demos}>
        <h2 className={styles.pageTiltle}>Demos &amp; Fun Things</h2>
        <div className={styles.demoCardContainer}>
          <DemosCard />
        </div>
      </div>
    </div>
  )
}
