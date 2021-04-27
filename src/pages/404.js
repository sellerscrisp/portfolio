import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './404.css';

const NotFoundPage = () => (
  <div>
    <Layout>
      <SEO title="404: Not found" />
      <h1
        style={{
          fontSize: '100px',
          fontWeight: '900',
          alignItems: 'middle',
          marginLeft: '20px',
        }}
      >
        PAGE NOT FOUND :(
      </h1>
    </Layout>
  </div>
);

export default NotFoundPage;
