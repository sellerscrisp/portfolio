import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html {

  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  h1,h2,h3,h4,h5,h6 {
    color: var(--highlight) !important;
  }
  body {
    font-smooth: always;
  }a.anchor {
    fill: "red";
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #403aef;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  
  ::selection {
    color: var(--background) !important;
    background: var(--highlight) !important;
    filter: invert(90%);
    padding: 0 2rem;
  }
  strong {
    color: var(--highlight);
    font-weight: 600 !important;
  }
  a.anchor {
    fill: var(--highlight-80);
    border: none !important;
    transition: all 0.25s linear;
    
    &:hover {
      fill: var(--white);
    }
  }
  body::-webkit-scrollbar {
    width: 10px;
    position: fixed;
    opacity: 1;
  }
  body::-webkit-scrollbar:hover {

  }

  body::-webkit-scrollbar-track {
    background: var(--mediumBackground);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--highlight);
    border-radius: 20px;
    border: 3px solid var(--highlight);
  }
  
  body::-webkit-scrollbar-thumb:hover {
    background-color: var(--highlight-80);
    border: var(--highlight-80);
  }

  body.dark {
    --borders: var(--highlight-30);
    --texts: #DEE3EA;
    --postColor: #DEE3EA;
    --mediumBackground: #0B0E11;
    --background: #151A21;
    --white: #fff;
    --black: #222;
    --highlight: #1e88e5;
    --highlight-10: rgba(30, 136, 229, 0.1);
    --highlight-20: rgba(30, 136, 229, 0.2);
    --highlight-30: rgba(30, 136, 229, 0.3);
    --highlight-40: rgba(30, 136, 229, 0.4);
    --highlight-50: rgba(30, 136, 229, 0.5);
    --highlight-60: rgba(30, 136, 229, 0.6);
    --highlight-70: rgba(30, 136, 229, 0.7);
    --highlight-80: rgba(30, 136, 229, 0.8);
  }

  body.light {
    --borders: var(--highlight-30);
    --postColor: #111;
    --texts: #2b2b2e;
    --mediumBackground: #FEC98F;
    --background: #FEDD9E;
    --white: #fff;
    --black: #222;
    --highlight: #3D476F;
    --highlight-10: rgba(61, 71, 111, 0.1);
    --highlight-20: rgba(61, 71, 111, 0.2);
    --highlight-30: rgba(61, 71, 111, 0.3);
    --highlight-40: rgba(61, 71, 111, 0.4);
    --highlight-50: rgba(61, 71, 111, 0.5);
    --highlight-60: rgba(61, 71, 111, 0.6);
    --highlight-70: rgba(61, 71, 111, 0.7);
    --highlight-80: rgba(61, 71, 111, 0.8);
  }
`;
export default GlobalStyles;
