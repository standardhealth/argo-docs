/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const Slash = () => (
    <img src={useBaseUrl(`img/icons/slash.svg`)} alt="Divider" width="12" height="12" />
  );

  return (
    <footer className={styles['nav-footer']} id="footer">
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <a href="https://c19hcc.org/">
            <img
              src={useBaseUrl(`img/logos/mitre_full.png`)}
              alt="ICGC Accelerating Research in Genomic Oncology"
              width="240px"
            />
          </a>
        </div>
        <div className={styles.footerContent}>
          <section className={styles.footerLinks}>
            {/* <a href="https://platform.standardhealth.org/contact">Contact</a>
            <Slash /> */}
            <a href="">Privacy Policy</a>
            <Slash />
            <a href="">Terms & Conditions</a>
            <Slash />
            <a href="">Publication Policy</a>
          </section>
          <section className={styles['legal-text']}>
            {siteConfig.themeConfig.footer.copyright}
          </section>
          <section className={styles['legal-text']}>
            <a href="https://www.icgc-argo.org" target="_blank">ARGO Data Platform</a>{' '}
            {/*1.0.0 - API v1 - 8e37309*/}
          </section>
        </div>
        <div className={styles.footerLogo}>
          <a href="https://mitre.org/">
            <img
              src={useBaseUrl(`img/logos/mitre_logo.svg`)}
              alt="MITRE Corporation"
              height="52px"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
