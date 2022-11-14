import useLocalStorage from 'use-local-storage';
import { useEffect } from 'react';

const useThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return { theme, switchTheme };
};

export default useThemeSwitcher;
