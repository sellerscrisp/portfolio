import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProjectItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: all 0.25s;
  background-color: inherit;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
    transition: all 0.25s;
    opacity: 0.7;
  }
`;

export const ProjectItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  margin: 0 auto;

  body#grid & {
    border: 1px solid var(--highlight);
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const ProjectItemTag = styled.div`
  align-items: center;
  display: flex;
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  border-radius: 10%;
  color: var(--highlight);
  opacity: 0.5;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const ProjectItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const ProjectItemDate = styled.time`
  font-size: 0.9rem;
`;

export const ProjectItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const ProjectItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
