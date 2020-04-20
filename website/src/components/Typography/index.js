import React from 'react';
import Typography from '@icgc-argo/uikit/Typography';

export const DataTypography = ({ children, ...rest }) => (
  <Typography 
    variant="data"
    component="div"
    color="#000" 
    css={{
      fontFamily: 'Roboto Condensed'
    }}
    {...rest}
    >
    {children}
  </Typography>
);
export const SchemaTitle = ({ children, ...rest }) => (
  <Typography 
    variant="subtitle" 
    color="#151c3d"
    css={{
      fontFamily: 'Roboto Condensed'
    }}
    {...rest}
  >
    {children}
  </Typography>
);
