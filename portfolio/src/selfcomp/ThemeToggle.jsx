'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Sun, Moon } from 'lucide-react';
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      className='px-2 py-0 m-0 rounded-full duration-500 border-[2px] bg-white border-gray-500 hover:bg-gray-200 hover:border-gray-900 dark:border-gray-500 dark:bg-black dark:hover:bg-gray-800 dark:hover:border-gray-100'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <div className='h-full w-full flex justify-center items-center duration-500 rotate-0 text-gray-500 dark:rotate-180 dark:text-gray-300 hover:text-black dark:hover:text-white'>
        {theme === 'dark' ? (
          <Sun className='h-5 w-5'/>
        ) : (
          <Moon className='h-5 w-5'/>
        )}
      </div>
    </Toggle>
  );
};
