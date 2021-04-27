import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Projects from '../components/Projects';
import * as S from '../components/Projects/styled';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
  </Layout>
);

export default ProjectsPage;
