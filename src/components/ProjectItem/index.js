import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const ProjectItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.ProjectItemLink
    to={slug}
    color={getThemeColor()}
    direction="down"
    bg={getThemeColor()}
    duration={0.9}
    cover
  >
    <S.ProjectItemWrapper>
      <S.ProjectItemTag background={background}>{category}</S.ProjectItemTag>
      <S.ProjectItemInfo>
        <S.ProjectItemDate>
          {date} • {timeToRead} min
        </S.ProjectItemDate>
        <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
        <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
      </S.ProjectItemInfo>
    </S.ProjectItemWrapper>
  </S.ProjectItemLink>
);

ProjectItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectItem;
