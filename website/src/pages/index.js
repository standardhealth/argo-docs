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
        <div className={styles.homeWrapper}>
          <div className={styles.heroText}>COVID-19 STANDARDS FOR </div>
          <div className={styles.heroTextYellow}>FEDERATED ANALYTICS </div>
        </div>
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

class TitleBlock extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.titleBlock}>
        <div className={styles.titleBlockHeader}>
          <span className={styles.titleBlockTitle}>{title}</span>
        </div>
        <div className={styles.titleBlockInner}>{this.props.children}</div>
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
          <TitleBlock
            >
            <span className={styles.titleBlockInner}>
            <p>The <strong>COVID-19 Healthcare Coalition</strong> (C19HCC) is a collaborative private-industry response to novel coronavirus. Our mission is to save lives by providing real-time learning to preserve healthcare delivery and protect populations. We are bringing together the best, brightest minds, assets and insights from across private industry to coordinate a response. </p>
            <br/>
            <p>To advance our understanding and find effective treatments for the pandemic, we must share resources, plans, and work together. Clinical data is a key asset. Moving patient-level data can encounter logistical, contractual, and regulatory barriers. It is faster and easier to move the queries to the data owners, have them evaluate the queries, and then federate the results. We can unlock large-scale analytics for COVID-19 in three steps:</p>
            <br/>
            <br/>
            <center><img src="/img/work-process.png" alt="Our work process" width="70%"></img></center>
            <br/>
            <p>By coordinating and sharing information, we will shorten the pandemic and save lives. We welcome clinical data providers and analytics teams to share their needs and priorities to guide and contribute to this effort!</p><br/><br/>
            </span>
            </TitleBlock>
          </div>
          <div className={styles.row}>
            <ContentBlock
                title="COVID-19 Observational Studies"
                color="#005B94"
                icon="img/icons/home/data-release.svg"
              >
              <span className={styles.contentDescription}>
                  Observational studies undertaken as part of the COVID-19 Healthcare Coalition. Each study is defined by a set of row-level source data, cohorts (phenotypes), and metrics.
              </span>
              <a className={styles.contentAction} href="docs/studies/">
                  STUDIES 
                  <img src="img/icons/chevron-right.svg" height={8} width={8} />
                </a>
                <br/>
            </ContentBlock>
            <ContentBlock
                title="COVID-19 Cohorts"
                color="#005B94"
                icon="img/icons/home/controlled-data.svg"
              >
                <span className={styles.contentDescription}>
                  COVID-19 cohorts provide standardized definitions for relevant metrics and populations of interest. Following these definitions assures consistent metrics and comparable cohorts.
                </span>
                <a className={styles.contentAction} href="docs/cohorts/">
                  Cohorts
                  <img src="img/icons/chevron-right.svg" height={8} width={8} />
                </a>
                <br/>
            </ContentBlock>
          </div>

          <div className={styles.row}>
          <ContentBlock
              title="Data Dictionary"
              color="#005B94"
              icon="img/icons/home/data-dictionary.svg"
            >
              <span className={styles.contentDescription}>
                The dictionary describes the guidelines that data submitters should follow when exporting clinical data files from their electronic health record (EHR) systems. Mapping to standard research models such as OHDSI CDM, I2B2, and exchange standards such as FHIR.
              </span>
              <a className={styles.contentAction} href="dictionary/">
                Data Dictionary
                <img src="img/icons/chevron-right.svg" height={8} width={8} />
              </a>
            </ContentBlock>
            <ContentBlock 
              title="COVID-19 Vocabulary"
              color="#005B94"
              icon="img/icons/home/faq.svg"
              >
              <span className={styles.contentDescription}>
                Documentation and sources for value sets and terminologies used in COVID-19 cohort definitions and data dictionary elements.
              </span>
              <a className={styles.contentAction} href="docs/vocabulary/">
                Vocabulary
                <img src="img/icons/chevron-right.svg" height={8} width={8} />
              </a>
            </ContentBlock>
          </div> 
        </div>
      </div>
    </Layout>
  );
}

export default Index;
