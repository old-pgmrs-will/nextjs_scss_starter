import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'

const containerClass: string = "page-index";
const message: string = "Let's try edit ./pages/index.tsx !";
const messageSub: string = "The style of this message is due to modularized css.";
console.info("this page is 'pages/index.tsx'.");

const Index: NextPage = () => {
  return (
    <article className="contents" id="page_root">
      <div className={'container ' + containerClass}>
        <h1 className="page_title-main">index.tsx</h1>
        <h3 className="page_title-sub">Hello, Next.js + SCSS + TypeScript.</h3>
        <p className="page_message">Message: {message}</p>
        <p className={styles.messageSub}>Message: {messageSub}</p>

        <div className="logoImage">
          <span className="logoImageCaption">Powered by</span>
          <Image className="logoImageSource" src="/images/nextjs_logo.svg" alt="Next.js Logo" width={100} height={60} />
        </div>

        <div className="nav_links">
          <Link href="/about">
            <a className="nav_link text_center"><p className="nav_link_text text_underline">link to: pages/about.tsx</p></a>
          </Link>
        </div>
      </div>

      <style jsx>{`
      // このページ用のスタイル定義
      @use '../styles/mixins' as m;
      .logoImage{
        @include m.flex(center, center);
        .logoImageCaption{
          margin-right: 8px;
        }
      }
      .nav_link{
        &_text{
          font-weight: bold;
        }
      }
      `}</style>
    </article>
  )
}

export default Index
