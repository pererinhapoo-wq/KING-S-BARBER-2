import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${isDark ? 'Light Premium' : 'Dark Gold'}`}
      title={`Alternar para tema ${isDark ? 'Light Premium' : 'Dark Gold'}`}
      className={`min-w-[44px] min-h-[44px] px-2.5 py-1.5 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
        isDark
          ? 'bg-[#181b22] border-zinc-700/80 text-zinc-300 hover:text-[#edd28b] hover:border-[#c5a059]/60 hover:bg-[#222631]'
          : 'bg-[#edeae3] border-[#ded9cd] text-[#4a3b18] hover:text-[#181a1e] hover:border-[#9c7728] hover:bg-[#e4e0d6]'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#edd28b] transition-transform rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#8e681c] transition-transform -rotate-12 hover:rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold uppercase tracking-wider">
          {isDark ? 'Light Premium' : 'Dark Gold'}
        </span>
      )}
    </button>
  );
};
