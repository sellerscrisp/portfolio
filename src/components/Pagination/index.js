import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        color={getThemeColor()}
        direction="down"
        bg={getThemeColor()}
        duration={0.9}
        cover
      >
        ← Previous page
      </AniLink>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        color={getThemeColor()}
        direction="down"
        bg={getThemeColor()}
        duration={0.9}
        cover
      >
        Next page →
      </AniLink>
    )}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
