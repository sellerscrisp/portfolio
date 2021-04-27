import React from 'react';

import links from './content';
import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink
            color={getThemeColor()}
            direction="down"
            bg={getThemeColor()}
            duration={0.9}
            cover
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
