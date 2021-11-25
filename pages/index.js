import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="greeting">
            <h1>Hello I'm <span class="name_highlight">Robert Bagwell.</span></h1>
            <h2>I'm a web developer.</h2>
        </div>
        <div className="main_image">
          <Image src='/me.jpg' height={256} width={256} className="mainImage" />
            <div>I'm passionate about programming. I've be a web developer for over 8 years now. I have tons of hands-on
                experience efficiently coding websites and applications using the latest technologies, such as NodeJS
                and ES6. I have expert knowledge of PHP, HTML, CSS and JavaScript. I'm constantly engaged in learning
                and expanding my programming expertise by learning other programming languages. I've done everything
                from building site form scratch to working in a large team on just certain parts of a site. I've worked
                on big e-commerce site to small independently owned sites and ran the gamut of being a Full Stack
                Developer to just focusing on UX/UI.
                <br /><br />
                So that's my professional background, a little about my personal life. When I'm not programming I enjoy
                a good movie, I'm a huge movie buff. I also enjoy gaming to relax. Other things about me I like to
                design and was a graphic designer before I started in web development.
            </div>
        </div>
    </div>
  )
}
