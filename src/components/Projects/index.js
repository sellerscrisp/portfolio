import React from 'react';
// import { Home } from '@styled-icons/boxicons-solid/Home';
// import ProjectsPage from '../../pages/projects';
import spotimend from '../../../static/assets/img/spotimend.png';
import pokedex from '../../../static/assets/img/pokedex.png';

import * as S from './styled';

const Projects = () => (
  <>
    <S.ProjectWrapper>
      {/* spotimend */}
      <S.ProjectBox>
        <S.ProjectImageContainer>
          <img src={spotimend}></img>
        </S.ProjectImageContainer>
        <S.ProjectDescribeContainer>
          <h3>Spotimend</h3>
          <h4>
            <span class="techStack">Flask</span>{' '}
            <span class="techStack">Bootstrap</span>{' '}
            <span class="techStack">jQuery</span>
          </h4>
          <ul>
            <li>
              Uses Spotify's API to show more about what a user listens to on a
              daily basis
            </li>
            <li>Jinja templating with custom Bootstrap components</li>
            <li>In-house API handler written in Python</li>
          </ul>
          <div>
            <a href="https://spotimend.crisp.pw/" rel="noopener noreferrer">
              Demo
            </a>
            <a
              href="https://github.com/sellerscrisp/spotimend"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </div>
        </S.ProjectDescribeContainer>
      </S.ProjectBox>
      {/* pokedex */}
      <S.ProjectBox>
        <S.ProjectImageContainer>
          <img src={pokedex}></img>
        </S.ProjectImageContainer>
        <S.ProjectDescribeContainer>
          <h3>Pokédex</h3>
          <h4>
            <span class="techStack">Express</span>{' '}
            <span class="techStack">React</span>{' '}
            <span class="techStack">Bulma</span>{' '}
          </h4>
          <ul>
            <li>
              Uses PokeAPI to aggregate data of a specific generation of Pokémon
            </li>
            <li>State and hook implementation</li>
            <li>Built on Bulma</li>
            <li>Hosted on Vercel</li>
          </ul>
          <div>
            <a href="https://poke.crisp.pw/" rel="noopener noreferrer">
              Demo
            </a>
            <a href="https://github.com/sellerscrisp/react-pokedex">Repo</a>
          </div>
        </S.ProjectDescribeContainer>
      </S.ProjectBox>
    </S.ProjectWrapper>
  </>
);

export default Projects;
