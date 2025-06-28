import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark');

  useEffect(() => {
    const root = document.documentElement.classList;
    if (dark) {
      root.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return [dark, setDark];
}
