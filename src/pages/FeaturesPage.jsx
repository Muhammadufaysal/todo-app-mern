import { motion } from 'framer-motion';

const FeaturesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-6xl font-bold mb-8">Features</h1>
      <div className="space-y-4 text-center">
        <p className="text-xl">✅ Organize your tasks effortlessly.</p>
        <p className="text-xl">✅ Set due dates and reminders.</p>
        <p className="text-xl">✅ Access your todos from anywhere.</p>
      </div>
    </motion.div>
  );
};

export default FeaturesPage;


















// const FeaturesPage = () => {
//     return (
//         <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
//         <h1 className="text-6xl font-bold mb-8">Features</h1>
//         <div className="space-y-4 text-center">
//           <p className="text-xl">✅ Organize your tasks effortlessly.</p>
//           <p className="text-xl">✅ Set due dates and reminders.</p>
//           <p className="text-xl">✅ Access your todos from anywhere.</p>
//         </div>
//         /</motion.div>
//     );
//   };
  
//   export default FeaturesPage;