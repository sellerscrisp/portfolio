import styled from 'styled-components';
import media from 'styled-media-query';

export const ProjectWrapper = styled.div`
  padding 10px;
  margin: 20px;
`;

export const ProjectBox = styled.article`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  transition: all 0.25s;
  border: 1px solid var(--highlight-30);
  width: 90%;
  background: var(--mediumBackground);

  ${media.lessThan('large')`
    display: block;
`}
`;

export const ProjectImageContainer = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 500px;
  border-radius: 10px;
  height: auto;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  ${media.lessThan('large')`
    img {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 150px;
      flex: 0 0 150px;
    }
`}
`;

export const ProjectDescribeContainer = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 calc(100% - 350px);
  flex: 0 1 calc(100% - 350px);
  margin-left: 25px;

  h3 {
    margin-bottom: 15x;
    font-size: 2.1rem;
    font-weight: 700;
  }

  ul {
    list-style: disc outside;
    font-size: 1rem;
    line-height: 1.3;
    margin-top: 20px;
    margin-left: 20px;
    color: var(--texts);

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  p {
    font-size: 0.9rem;
    margin-top: 20px;
  }

  h4 {
    font-size: 1rem;
    margin-top: 7px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--texts) !important;

    span {
      color: var(--highlight-80);
      display: inline-block;
      border: 1px solid var(--highlight-60);
      background-color: var(--background);
      border-radius: 5px;
      margin-right: 2px;
      padding: 0.2rem 0.3rem;
    }
  }

  div {
    margin-top: 50px;
    text-align: right;

    a {
      font-size: 1.1rem;
      margin-right: 20px;
      color: var(--highlight);
      display: inline-block;
      text-decoration: none;
      padding: 4px 8px;
      padding-left: 0;
      padding-right: 0;
      border-bottom: 1px dashed var(--highlight);
      transition: all 0.25s linear;
    }

    a:hover {
      color: var(--highlight-70);
      border-bottom: 1px dashed var(--highlight-70);
    }
  }

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}
`;
