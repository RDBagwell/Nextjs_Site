import Head from 'next/head';
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";
import DemosCard from '../components/DemosCard';
import styles from '../styles/Home.module.css';
import ProgressBar from '../components/ProgerssBar';
import {connectToDatabase} from '../lib/mongodb';

export default function Home({pages}) {
  const yearsExperience = new Date().getFullYear() - 2011;
  const { data: session } = useSession();
  console.log(`session ${session}`)
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1>Hello I&rsquo;m <span className={styles.nameHighlight}>Robert Bagwell.</span></h1>
        <h2>I&rsquo;m a web developer.</h2>
      </div>
      <div className={styles.mainImage}>
        <div className={styles.myImg} ><Image src='/me.jpg' width={250} height={250} alt="Robert Bagwell" title="Robert Bagwell" /></div>
        <div className={styles.mainContent}>I&rsquo;m passionate about programming. I&rsquo;ve be a web developer for over {yearsExperience} years now. I have tons of hands-on
          experience efficiently coding websites and applications using the latest technologies, such as NodeJS
          and ES6. I have expert knowledge of PHP, HTML, CSS and JavaScript. I&rsquo;m constantly engaged in learning
          and expanding my programming expertise by learning other programming languages. I&rsquo;ve done everything
          from building site form scratch to working in a large team on just certain parts of a site. I&rsquo;ve worked
          on big e-commerce site to small independently owned sites and ran the gamut of being a Full Stack
          Developer to just focusing on UX/UI.
          <br /><br />
          So that&rsquo;s my professional background, a little about my personal life. When I&rsquo;m not programming I enjoy
          a good movie, I&rsquo;m a huge movie buff. I also enjoy gaming to relax. Other things about me I like to
          design and was a graphic designer before I started in web development.
        </div>
      </div>
      <div className={styles.demos}>
        <h2 className={styles.pageTiltle}>Demos &amp; Fun Things</h2>
        <div className={styles.demoCardContainer}>
          {pages.map((item)=>(
            <DemosCard key={item._id} cardItem={item} />
          ))}
        </div>
      </div>
      <div className={styles.PLF}>
        <h2 className={styles.pageTiltle}>Programing Languages &amp; Frameworks</h2>
        <div className="wb">
            <div className="description">
                So, I was going to put this in &ldquo;Demos and fun things&rdquo; and I might in the future but I thought it is a
                good piece to show where my strengths and weakness. This is from a real-world project I worked on, the
                graphs update dynamically based on the data I feed them. I created this as a JavaScript plugin so I can
                use it with any data and easily integrate it into any site.
            </div>
            <ProgressBar />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const pages = await db
    .collection("pages")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();
  return {
    props: {
      pages: JSON.parse(JSON.stringify(pages)),
    },
  };
}
