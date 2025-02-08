import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import ThemeToggle from '../components/ThemeToggle';

const LandingPage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white relative"
    >
      {/* Dark/Light Mode Toggle Button */}
      <ThemeToggle />

      <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to Todo App</h1>
      <p className="text-xl mb-8">Organize your tasks effortlessly.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Login
        </Link>
        <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Register
        </Link>
      </div>

      {/* About Button */}
      <button
        onClick={() => setShowAbout(!showAbout)}
        className="absolute top-4 right-24 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        About
      </button>

      {/* Features Button */}
      <button
        onClick={() => navigate('/features')} // Navigate to Features Page
        className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        Features
      </button>

      {/* About Hover Page */}
      {showAbout && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-10 bg-white p-4 rounded-lg shadow-lg"
        >
          <AboutPage />
          <button
            onClick={() => setShowAbout(false)}
            className="mt-2 text-red-600 hover:text-red-700"
          >
            Close
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LandingPage;









// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import AboutPage from './AboutPage';
// import ThemeToggle from '../components/ThemeToggle';

// const LandingPage = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white relative"
//     >
//       {/* Dark/Light Mode Toggle Button */}
//       <ThemeToggle />

//       <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to Todo App</h1>
//       <p className="text-xl mb-8">Organize your tasks effortlessly.</p>
//       <div className="space-x-4">
//         <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Login
//         </Link>
//         <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Register
//         </Link>
//       </div>

//       {/* About Button */}
//       <button
//         onClick={() => setShowAbout(!showAbout)}
//         className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
//       >
//         About
//       </button>

//       {/* About Hover Page */}
//       {showAbout && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 right-4 bg-white p-4 rounded-lg shadow-lg"
//         >
//           <AboutPage />
//           <button
//             onClick={() => setShowAbout(false)}
//             className="mt-2 text-red-600 hover:text-red-700"
//           >
//             Close
//           </button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default LandingPage;






// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import AboutPage from './AboutPage';
// import ThemeToggle from '../components/ThemeToggle';

// const LandingPage = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white relative"
//     >
//       <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to Todo App</h1>
//       <p className="text-xl mb-8">Organize your tasks effortlessly.</p>
//       <div className="space-x-4">
//         <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Login
//         </Link>
//         <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Register
//         </Link>
//       </div>

//       {/* About Button */}
//       <button
//         onClick={() => setShowAbout(!showAbout)}
//         className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
//       >
//         About
//       </button>

//       {/* About Hover Page */}
//       {showAbout && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 right-4 bg-white p-4 rounded-lg shadow-lg"
//         >
//           <AboutPage />
//           <button
//             onClick={() => setShowAbout(false)}
//             className="mt-2 text-red-600 hover:text-red-700"
//           >
//             Close
//           </button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default LandingPage;








// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white"
//     >
//       <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to Todo App</h1>
//       <p className="text-xl mb-8">Organize your tasks effortlessly.</p>
//       <div className="space-x-4">
//         <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Login
//         </Link>
//         <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Register
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default LandingPage;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
//       <h1 className="text-6xl font-bold mb-4 animate-bounce">Welcome to Todo App</h1>
//       <p className="text-xl mb-8">Organize your tasks effortlessly.</p>
//       <div className="space-x-4">
//         <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Login
//         </Link>
//         <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Register
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LandingPage;