import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/todo/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(response.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error fetching todos');
    }
  };

  // Add a new todo
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://localhost:5000/api/todo/',
          { title: newTodo },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTodos([...todos, response.data]); // Add the new todo to the list
        setNewTodo(''); // Clear the input field
        toast.success('Todo added successfully');
      } catch (err) {
        toast.error(err.response?.data?.message || 'Error adding todo');
      }
    }
  };

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/todo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((todo) => todo._id !== id)); // Remove the deleted todo from the list
      toast.success('Todo deleted successfully');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error deleting todo');
    }
  };

  // Toggle todo completion status
  const handleToggleComplete = async (id, completed) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5000/api/todo/${id}`,
        { completed: !completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo))); // Update the todo in the list
      toast.success('Todo updated successfully');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error updating todo');
    }
  };

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    toast.success('Logged out successfully');
    navigate('/login'); // Redirect to the Login Page
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mr-2"
              placeholder="Add a new todo"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo) => (
              <li key={todo._id} className="flex items-center justify-between mb-2">
                <span
                  className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => handleToggleComplete(todo._id, todo.completed)}
                  className="ml-2 text-green-600 hover:text-green-700"
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo._id)}
                  className="ml-2 text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;




























// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Dashboard = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   // Fetch todos from the backend
//   const fetchTodos = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/todos', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTodos(response.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Error fetching todos');
//     }
//   };

//   // Add a new todo
//   const handleAddTodo = async () => {
//     if (newTodo.trim()) {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.post(
//           'http://localhost:5000/api/todos',
//           { title: newTodo },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setTodos([...todos, response.data]);
//         setNewTodo('');
//         toast.success('Todo added successfully');
//       } catch (err) {
//         toast.error(err.response?.data?.message || 'Error adding todo');
//       }
//     }
//   };

//   // Delete a todo
//   const handleDeleteTodo = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/todos/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTodos(todos.filter((todo) => todo._id !== id));
//       toast.success('Todo deleted successfully');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Error deleting todo');
//     }
//   };

//   // Toggle todo completion status
//   const handleToggleComplete = async (id, completed) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.put(
//         `http://localhost:5000/api/todos/${id}`,
//         { completed: !completed },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
//       toast.success('Todo updated successfully');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Error updating todo');
//     }
//   };

//   // Fetch todos on component mount
//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen p-6"
//     >
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex mb-4">
//             <input
//               type="text"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg mr-2"
//               placeholder="Add a new todo"
//             />
//             <button
//               onClick={handleAddTodo}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Add
//             </button>
//           </div>
//           <ul>
//             {todos.map((todo) => (
//               <li key={todo._id} className="flex items-center justify-between mb-2">
//                 <span
//                   className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
//                 >
//                   {todo.title}
//                 </span>
//                 <button
//                   onClick={() => handleToggleComplete(todo._id, todo.completed)}
//                   className="ml-2 text-green-600 hover:text-green-700"
//                 >
//                   {todo.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button
//                   onClick={() => handleDeleteTodo(todo._id)}
//                   className="ml-2 text-red-600 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Dashboard;









// import { useState } from 'react';

// const Dashboard = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const handleToggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex mb-4">
//             <input
//               type="text"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg mr-2"
//               placeholder="Add a new todo"
//             />
//             <button
//               onClick={handleAddTodo}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Add
//             </button>
//           </div>
//           <ul>
//             {todos.map((todo) => (
//               <li key={todo.id} className="flex items-center justify-between mb-2">
//                 <span
//                   className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
//                 >
//                   {todo.text}
//                 </span>
//                 <button
//                   onClick={() => handleToggleComplete(todo.id)}
//                   className="ml-2 text-green-600 hover:text-green-700"
//                 >
//                   {todo.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button
//                   onClick={() => handleDeleteTodo(todo.id)}
//                   className="ml-2 text-red-600 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;