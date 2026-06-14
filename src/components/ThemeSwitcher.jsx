import React, { useEffect, useState, useRef } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Playful Red' },
  { id: 'navy', name: 'Royal Navy' },
  { id: 'burgundy', name: 'Academic Burgundy' },
  { id: 'oceanic', name: 'Oceanic Teal' },
  { id: 'midnight', name: 'Midnight Violet' },
  { id: 'forest', name: 'Forest Green' }
];

const ThemeSwitcher = ({ isScrolled }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    applyTheme(savedTheme);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyTheme = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('theme', themeId);
    if (themeId === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeId);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
          isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
        }`}
        title="Switch Theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-[60]">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme.id)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                currentTheme === theme.id 
                  ? 'bg-emerald-50 text-emerald-700 font-bold' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
