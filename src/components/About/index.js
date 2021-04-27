import React from 'react';

import * as S from './styled';

const About = () => (
  <>
    <S.AboutHeader>
      <S.AboutTitle>Hi, I'm Sellers.</S.AboutTitle>
    </S.AboutHeader>
    <S.MainContent>
      <p>
        I'm a 20 year old software developer. I have deep passions about{' '}
        <strong>design</strong> and <strong>application infrastructure</strong>.
      </p>
      <br />
      <p>
        I am currently a sophomore in college but taking a gap year to pursure
        my passions in web development and design. I am currently working
        towards a <strong>B.S. in Software Engineering</strong> from{' '}
        <strong>Auburn University</strong>.
      </p>
      <br />
      <p>
        Connect with me on{' '}
        <a href="https://linkedin.com/in/sellerscrisp">Linkedin</a> or checkout
        some of my work on <a href="https://github.com/sellerscrisp">Github</a>.
      </p>
      <h2>Tech Interests</h2>
      <ul>
        <li>Javascript</li>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Webpack</li>
          <li>React / Redux</li>
          <li>Next (WIP)</li>
          <li>React Native (WIP)</li>
        </ul>
        <li>Python</li>
        <ul>
          <li>Flask</li>
          <li>Django</li>
          <li>FastAPI (WIP)</li>
          <li>Pandas (WIP)</li>
        </ul>
        <li>Database</li>
        <ul>
          <li>PostgreSQL</li>
          <li>MSSQL</li>
          <li>MongoDB</li>
          <li>mySQL</li>
          <li>Firebase (WIP)</li>
        </ul>
        <li>DevOps</li>
        <ul>
          <li>Git</li>
          <li>Dokku</li>
          <li>Linux (Ubuntu, server)</li>
          <li>Google Cloud (WIP)</li>
          <li>Docker (WIP)</li>
        </ul>
        <li>HTML / CSS / Sass</li>
      </ul>
    </S.MainContent>
  </>
);

export default About;
