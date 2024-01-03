// LoadingPage.js

import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-blue-500 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-white">Loading...</h1>
        {/* Tambahkan animasi lainnya di sini jika diperlukan */}
      </motion.div>
    </div>
  );
};

export default LoadingPage;
