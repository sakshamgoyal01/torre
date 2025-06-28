import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import SearchPage from './pages/SearchPage';

export default function App() {
  const [dark, setDark] = useDarkMode();
  return (
    <div className="min-h-screen transition-colors bg-gray-50 dark:bg-gray-900">
      <div className="p-4 text-right">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <SearchPage />
    </div>
  );
}
