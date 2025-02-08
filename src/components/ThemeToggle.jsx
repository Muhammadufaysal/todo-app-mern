import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;














// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   const { darkMode, toggleDarkMode } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
//     >
//       {darkMode ? '🌞' : '🌙'}
//     </button>
//   );
// };

// export default ThemeToggle;