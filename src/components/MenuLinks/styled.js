import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
    border-bottom: 1px solid var(--borders) !important;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0em;
  margin-bottom: 10px;

  .active {
    color: var(--highlight);
    background: var(--highlight-20);
  }
  &:hover {
  }
`;

export const MenuLinksLink = styled(AniLink)`
  padding: 0.4rem 1em;
  color: var(--texts);
  text-decoration: none;
  border: 1px solid var(--borders);
  background: var(--background);
  border-radius: 5px;
  margin-bottom: 10px;
  transition: all 0.25s;
  width: 100%;

  &:hover {
    color: var(--highlight);
    background: var(--highlight-20);
    border: 0.01em solid var(--borders);
  }
`;
