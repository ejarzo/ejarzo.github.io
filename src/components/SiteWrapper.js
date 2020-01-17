import React from 'react';
import Link from 'gatsby-link';
import Header from './Header';
import Layout from './layout';

export default props => {
  const { children } = props;
  return (
    <div className="SiteWrapper">
      <Layout>
        {/* <Header /> */}
        {children}
      </Layout>
    </div>
  );
};
