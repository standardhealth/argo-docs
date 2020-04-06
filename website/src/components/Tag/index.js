import React from 'react';
import TagComponent from '@icgc-argo/uikit/Tag';
import styles from './styles.module.css';

export const TAG_TYPES = Object.freeze({
  required: 'required',
  conditional: 'conditional',
  derived: 'derived',
  optional: 'optional',
  extended: 'extended',
});

const Tag = ({ type }) => {
  switch (type) {
    case TAG_TYPES.required:
      return <TagComponent className={`${styles.tag} ${styles.required}`}>Required</TagComponent>;
    case TAG_TYPES.conditional:
      return <TagComponent className={`${styles.tag} ${styles.conditional}`}>Conditional</TagComponent>;
    case TAG_TYPES.derived:
      return <TagComponent className={`${styles.tag} ${styles.derived}`}>Derived</TagComponent>;
    case TAG_TYPES.optional:
      return <TagComponent className={`${styles.tag} ${styles.optional}`}>Optional</TagComponent>;
    case TAG_TYPES.extended:
      return <TagComponent className={`${styles.tag} ${styles.extended}`}>Extended</TagComponent>;
    default:
      return null;
  }
};

export default Tag;
