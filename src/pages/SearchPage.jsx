import React, { useState } from 'react';
import { searchPeople } from '../services/torreAPI';
import useDarkMode from '../hooks/useDarkMode';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ProfileDetail from './ProfileDetail';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  const handleTypeahead = async (q) => {
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await searchPeople(q);
      setResults(res);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  if (selected) return <ProfileDetail entity={selected} onBack={() => setSelected(null)} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 dark:from-gray-900 dark:to-black p-6 transition-colors">
      
      {/* 🌗 Dark/Light Mode Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800 shadow-md text-gray-800 dark:text-white transition"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold text-white mb-8 shadow-lg text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Torre Talent Explorer
      </motion.h1>

      {/* Search Input */}
      <motion.div
        className="flex w-full max-w-xl gap-3 mb-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <input
          value={query}
          onChange={(e) => handleTypeahead(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-white/80 placeholder-gray-600 focus:ring-4 ring-pink-300 transition shadow-lg backdrop-blur-md dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          placeholder="Search by name..."
          autoFocus
        />
      </motion.div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl animate-pulse mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200/50 dark:bg-gray-700 rounded-lg"></div>
          ))}
        </div>
      )}

      {/* Results */}
      <motion.ul
        layout
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-4"
      >
        {results.map((e) => (
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareBorderRadius="16px"
            key={e.id}
          >
            <motion.li
              layout
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelected(e)}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/30 dark:border-gray-700 rounded-xl shadow-md cursor-pointer"
            >
              <div className="flex items-center p-4">
                <img
                  src={e.basics.picture || 'https://via.placeholder.com/64'}
                  alt=""
                  className="w-16 h-16 rounded-full mr-4 shadow"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {e.basics.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {e.basics.professionalHeadline}
                  </p>
                </div>
              </div>
            </motion.li>
          </Tilt>
        ))}
      </motion.ul>

      {/* No Results */}
      {!loading && query && results.length === 0 && (
        <p className="mt-6 text-white/90">No profiles found for “{query}”.</p>
      )}
    </div>
  );
}
