import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Read My Blog 📝
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '1rem', backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}
            to="https://github.com/rajeshr-ind">
            GitHub 🐙
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Personal site and documentation of Rajesh Ramesh">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
