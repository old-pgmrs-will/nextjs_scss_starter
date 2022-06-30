import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/About.module.scss'

const containerClass: string = "page-about";
const message: string = "Let's try edit ./pages/about.tsx !";
const messageSub: string = "The style of this message is due to modularized css.";
console.info("this page is 'pages/about.tsx'.");

const About: NextPage = () => {
  return (
    <article className="contents" id="page_root">
      <div className={'container ' + containerClass}>
        <h1 className="page_title-main">About.tsx</h1>
        <h3 className="page_title-sub">Hello, Next.js + SCSS + TypeScript.</h3>
        <p className="page_message">Message: {message}</p>
        <p className={styles.messageSub}>Message: {messageSub}</p>
        <div className="nav_links">
          <Link href="/">
            <a className="nav_link text_center"><p className="nav_link_text text_underline">link to: pages/index.tsx</p></a>
          </Link>
        </div>
      </div>

      <style jsx>{`
      // このページ用のスタイル定義
      .nav_link{
        &_text{
          font-weight: bold;
        }
      }
      `}</style>
    </article>
  )
}

export default About
