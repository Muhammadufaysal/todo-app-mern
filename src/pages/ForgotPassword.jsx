import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://todo-app-backend-neon-phi.vercel.app/api/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error sending reset email');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-green-600">{message}</div>
        )}
      </div>
    </motion.div>
  );
};

export default ForgotPassword;


















// import { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/forgot-password', { email });
//       setMessage(response.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Error sending reset email');
//     }
//   };

//   return (
//     <motion.div
//     initial={{ opacity: 0, y: -50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}

//     className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
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
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Reset Password
//           </button>
//         </form>
//         {message && (
//           <div className="mt-4 text-center text-green-600">{message}</div>
//         )}
//       </div>
//       </motion.div>
//   );
// };

// export default ForgotPassword;









// import { useState } from 'react';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add forgot password logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
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
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;