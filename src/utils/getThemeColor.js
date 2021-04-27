const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#FFC98F';
  if (theme === 'dark') return '#0D0F13';
};

export default getThemeColor;
