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
        className="pl-8 pr-3 py-1 rounded bg-white text-slate-800 w-48 outline-none text-sm border-none focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      />
      <i className="fas fa-search absolute left-2.5 top-1/2 -translate-y-1/2 text-cyan-500 cursor-pointer"></i>
    </div>
  );
}