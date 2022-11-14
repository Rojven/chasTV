import useThemeSwitcher from '../hooks/useThemeSwitcher';

const ToggleButton = () => {
  const { theme, switchTheme } = useThemeSwitcher();
  return (
    <div className="toggler bg-gray-100 dark:bg-white" onClick={switchTheme}>
      <span>🌜</span>
      <span>🌞</span>
      <div className={`${theme === 'dark' ? 'toggler__ball toggler__ball_clicked bg-white dark:bg-black' : 'toggler__ball bg-white dark:bg-black'}`} />
    </div>
  );
};

export default ToggleButton;
