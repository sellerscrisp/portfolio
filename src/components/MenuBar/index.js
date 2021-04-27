import React, { useState, useEffect } from 'react';

import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Briefcase as Projects } from '@styled-icons/boxicons-solid/Briefcase';
import { Home4 as Home } from '@styled-icons/remix-fill/Home4';
import { Lightbulb as Light } from '@styled-icons/remix-fill/Lightbulb';
import { AccountBox as Person } from '@styled-icons/remix-fill/AccountBox';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  // const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        {/* Home */}
        <S.MenuBarLink
          to="/"
          color={getThemeColor()}
          direction="down"
          duration={0.9}
          cover
          title="Go Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        {/* Projects */}
        <S.MenuBarLink
          to="/projects"
          color={getThemeColor()}
          direction="down"
          duration={0.9}
          cover
          title="View my projects"
        >
          <S.MenuBarItem>
            <Projects />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/about"
          color={getThemeColor()}
          direction="down"
          duration={0.9}
          cover
          title="Learn more about me"
        >
          <S.MenuBarItem>
            <Person />
          </S.MenuBarItem>
        </S.MenuBarLink>
        {/* About */}
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change color theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          }}
          title="Go to top"
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
