/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

import Layout from '@theme/Layout';
import styles from './styles.module.css';

function HomeSplash() {
  const SplashContainer = props => (
    <div className={styles.homeContainer}>
      <div className={styles.homeSplashFade}>
        <div className={styles.homeWrapper}>{props.children}</div>
      </div>
    </div>
  );

  const SearchBanner = props => (
    <section className={styles.searchBanner}>
    </section>
  );

  return (
    <SplashContainer>
          <SearchBanner />
    </SplashContainer>
  );
}

class ContentBlock extends React.Component {
  render() {
    const { color, title, icon } = this.props;
    return (
      <div className={styles.contentBlock} style={{ borderColor: color }}>
        <div className={styles.contentBlockHeader}>
          <span className={styles.contentBlockTitle}>{title}</span>
          <img src={icon} height={50} />
        </div>
        <div className={styles.contentBlockInner}>{this.props.children}</div>
      </div>
    );
  }
}

function Index() {
  return (
    <Layout permalink="/" title="C19HCC">
      <div>
        <HomeSplash />
        <div className={styles.mainContainer}>
          <div className={styles.row}>
            <ContentBlock
              title="Data Dictionary"
              color="#4bcee5"
              icon="img/icons/home/data-dictionary.svg"
            >
              <span className={styles.contentDescription}>
                The dictionary describes the guidelines that data submitters should follow when exporting clinical data files from their electronic health record (EHR) systems.
              </span>
              <a className={styles.contentAction} href="/dictionary">
                Data Dictionary Viewer
                <img src="img/icons/chevron-right.svg" height={8} width={8} />
              </a>
            </ContentBlock>
            <ContentBlock title="COVID-19 Vocabulary" color="#fea430" icon="img/icons/home/faq.svg">
              <p className={styles.contentDescription}>
                COVID-19 value sets used in the data dictionary, derived elements and cohort definitions are available in the <a href="https://vsac.nlm.nih.gov/valueset/expansions?pr=all&rel=Latest&q=c19hccValue" target="_blank">Value Set Authority Center</a>.
              </p>
              {/* <ul>
                <li>
                  <a href="/docs/faq">Can I submit molecular data before registering IDs?</a>
                </li>
                <li>
                  <a href="/docs/faq">What does "clinical completeness" mean?</a>
                </li>
                <li>
                  <a href="/docs/faq">How do I track data processing stage?</a>
                </li>
              </ul>*/}
            </ContentBlock>
            <ContentBlock
              title="COVID-19 Cohorts"
              color="#7f55cc"
              icon="img/icons/home/controlled-data.svg"
            >
              <span className={styles.contentDescription}>
                COVID-19 cohorts provide standardized definitions for relevant metrics and populations of interest. Following these definitions assures consistent metrics and comparable cohorts.
              </span>
              <a className={styles.contentAction} href="/docs/cohorts">
                Cohorts
                <img src="img/icons/chevron-right.svg" height={8} width={8} />
              </a>
              <br/>
            </ContentBlock>
          </div>

          <div className={styles.row}>
            <ContentBlock
              title="Release Notes"
              color="#0774d3"
              icon="img/icons/home/data-release.svg"
            >
              Coming Soon
              {/* <ul>
                <li>
                  <a href="#">Data Dictionary Releases</a>
                </li>
                <li>
                  <a href="#">Data Releases</a>
                </li>
                <li>
                  <a href="#">Platform Software Releases</a>
                </li>
              </ul> */}
            </ContentBlock>
          </div> 
        </div>
      </div>
    </Layout>
  );
}

export default Index;
