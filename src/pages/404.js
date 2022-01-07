import React from 'react';
import HeaderV2 from '../components/headerV2';

import SEO from '../components/seo';
import SiteWrapper from '../components/SiteWrapper';

const NotFoundPage = () => (
  <SiteWrapper>
    <SEO title="404: Not found" />
    <HeaderV2 />
    <div className="row">
      <div className="col-12">
        <h1>Sorry, could not find that page!</h1>
      </div>
    </div>
  </SiteWrapper>
);

export default NotFoundPage;
