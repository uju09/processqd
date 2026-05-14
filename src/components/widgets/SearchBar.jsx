import { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for a term..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-11 sm:h-12 px-4 py-3 pl-10 pr-12 sm:pr-3 rounded-lg sm:rounded bg-white text-slate-800 text-base outline-none border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none focus:border-transparent focus:shadow-lg transition-shadow duration-200"
      />
      <i className="fas fa-search absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-600 text-lg sm:text-xl"></i>
    </div>
  );
}