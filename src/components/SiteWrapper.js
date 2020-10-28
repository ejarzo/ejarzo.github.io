import React from 'react';
import Layout from './layout';

export default props => {
  const { children } = props;
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
};
