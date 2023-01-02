import config from '../config/config.json'
import styles from '../styles/styles.module.scss'

import Head from 'next/head'
import Image from 'next/image'

import A from '../components/A'
import CustomHead from '../components/CustomHead'


export default function Home() {
  return (
    <>
      <CustomHead />

      <main className={styles.main}>
        <header className={styles.header}>
          <h3>tuppurainen.com.au - bryce.tuppurainen.au@gmail.com</h3>
          <h1>Bryce Tuppurainen</h1>
          <p>A portfolio site by Bryce Tuppurainen developed using <A href="https://nextjs.org/">NextJS</A>, <A href="https://reactjs.org/">ReactJS</A>, <A href="https://sass-lang.com/">Sass</A>, and deployed using <A href="https://www.netlify.com/">Netlify</A>. Written in <A href="https://www.typescriptlang.org/">TypeScript</A>.</p>
          <div>
            <A href="https://nextjs.org/" target="_blank">
              <Image src="/images/next-logo.webp" alt="NextJS Logo" height={100} width={100} />
            </A>
            <A href="https://reactjs.org/" target="_blank">
              <Image src="/images/react-logo.webp" alt="ReactJS Logo" height={100} width={100} />
            </A>
            <A href="https://sass-lang.com/" target="_blank">
              <Image src="/images/sass-logo.webp" alt="Sass Logo" height={100} width={100} />
            </A>
            <A href="https://www.netlify.com/" target="_blank">
              <Image src="/images/netlify-logo.webp" alt="Netlify Logo" height={100} width={100} />
            </A>
            <A href="https://www.typescriptlang.org/" target="_blank">
              <Image src="/images/typescript-logo.webp" alt="TypeScript Logo" height={100} width={100} />
            </A>
          </div>
          <p>Click the buttons above to learn more, links on this page are bold</p>
        </header>


        <p>This site was published in March 2022. I was in my third year of Software Engineering at the University of Newcastle, and had developed a keen interest in all things full-stack development. Particularly anything written in TypeScript. I was teaching myself various NodeJS Packages and JS/CSS Frameworks, and developing then deploying various sites in my free time for fun and practice including this one. For my more recent endeavours see below...</p>

        <code className={styles.code}><span className={styles.green}>bryce@tuppurainen.com.au ~ $</span> whoami --scroll-down</code>


        <div className={styles.projects}>
          <h3>Projects</h3>
          <ul className={styles.ul}>
            <li><A href="https://github.com/BryceTuppurainen/">GitHub</A></li>
            <li>
              <A href="/standards">Standards Encyclopedia</A></li>
          </ul>
        </div>


      </main>
    </>
  )
}
