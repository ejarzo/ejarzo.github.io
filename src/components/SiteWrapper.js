import React from 'react';
import Layout from './layout';

const SiteWrapper = props => {
  const { children } = props;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Layout>{children}</Layout>
    </div>
  );
};

export default SiteWrapper;
