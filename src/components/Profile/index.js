import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getThemeColor from '../../utils/getThemeColor';
import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        color={getThemeColor()}
        direction="down"
        bg={getThemeColor()}
        duration={0.9}
        cover
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
