import React from 'react';
import Layout from './layout';

export default props => {
  const { children } = props;
  return (
    <div className="SiteWrapper">
      <Layout>{children}</Layout>
    </div>
  );
};
