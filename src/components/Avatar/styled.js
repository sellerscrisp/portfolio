import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  background-color: var(--background);
  border: 1px solid var(--border);
  object-fit: cover;
  background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)),
    url('https://bit.ly/2rlzaXi'); /* The least supported option. */
  filter: sepia(20%);

  ${media.lessThan('large')`
    height: 2.0rem;
    width: 2.0rem;
  `}
`;
