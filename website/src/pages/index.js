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
            <p>The clinical data needed to derive insights on COVID-19 screening and management is a moving target. Many organizations are defining data elements and codes to represent COVID-19 related data. We can unlock at-scale analytics for COVID-19 to produce valuable clinical insights by creating:</p><br/>
            <ul>
              <li>Standard COVID-19 cohorts for relevant measures and populations of interest. Following these definitions assures consistent metrics and comparable cohorts.</li>
              <li>A base set of data requirements for clinical data providers, to guide data extraction with minimal effort and fewest assumptions.</li>
              <li>Terminologies and value sets that help extract the relevant and intended data, independent of local variations in data.</li>
            </ul>
            <p>Because moving data can encounter logistical, contractual, and regulatory barriers, it is usually easier and faster to move the queries to the data owners, have them evaluate the queries, and then federate the results. With careful definition of the cohorts, the results from disparate sources can be comparable.</p>
            <br/>
            <center><img alt="Hydroxychloroquine molecule by Johan Vec (CC BY-SA 4.0)" src="img/hcq.png" width={300} /></center>
            <center><a href="docs/studies/">Hydroxychloroquine Study</a> now underway!</center>
            <br/>
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
                The dictionary describes the guidelines that data submitters should follow when exporting clinical data files from their electronic health record (EHR) systems.
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
