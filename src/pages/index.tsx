import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.scss'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title="Home" description="Ake的个人网站，记录个人各类笔记与文章。">
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div>
              <h1 className={styles.title}>{siteConfig.title}</h1>
              <p className={styles.subtitle}>{siteConfig.tagline}</p>
            </div>
            <p className={styles.navs}>
              <a href="/docs">笔记</a>
              <span> · </span>
              <a href="/blog">博客</a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
