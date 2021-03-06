import styled from 'styled-components';

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--background);
    border-bottom: 1px solid var(--background);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`;
