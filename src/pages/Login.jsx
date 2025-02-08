import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token to localStorage
        toast.success('Login successful'); // Show success toast
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard after 2 seconds
        }, 2000);
      } else {
        toast.error('Login failed. Please try again.'); // Fallback error message
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials'); // Show error toast
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;


















// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
  
//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         toast.success("Login successful! Redirecting to dashboard...");
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 2000);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Invalid credentials");
//     }
//   };
  

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <span className="text-gray-600">Don't have an account? </span>
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Login;








// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });
//       localStorage.setItem('token', response.data.token); // Save token to localStorage
//       toast.success('Login successful'); // Show success toast
//       setTimeout(() => {
//         navigate('/dashboard'); // Redirect to dashboard after 2 seconds
//       }, 2000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Invalid credentials'); // Show error toast
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <span className="text-gray-600">Don't have an account? </span>
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Login;




// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Add useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });
//       localStorage.setItem('token', response.data.token); // Save token to localStorage
//       toast.success('Login successful'); // Show success toast
//       setTimeout(() => {
//         navigate('/dashboard'); // Redirect to dashboard after 2 seconds
//       }, 2000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Invalid credentials'); // Show error toast
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <span className="text-gray-600">Don't have an account? </span>
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Login;






// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add login logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <span className="text-gray-600">Don't have an account? </span>
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;