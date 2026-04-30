import { branding } from '../../data/config/branding';

export function TopBar() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-6 sm:flex-col sm:gap-1">
        <span className="flex items-center gap-2 text-slate-400">
          <i className="fas fa-phone text-cyan-500"></i>
          {branding.contact.phone}
        </span>
        <span className="flex items-center gap-2 text-slate-400">
          <i className="fas fa-envelope text-cyan-500"></i>
          {branding.contact.email}
        </span>
      </div>
    </div>
  );
}