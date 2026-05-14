import { branding } from '../../data/config/branding';

export function TopBar() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-6 px-4 md:px-8 py-2.5 sm:py-2 text-[13px] sm:text-xs md:text-sm">
        <a
          href={`tel:${branding.contact.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 text-slate-400 min-h-[44px] sm:min-h-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Call us"
        >
          <i className="fas fa-phone text-blue-500"></i>
          <span>{branding.contact.phone}</span>
        </a>
        <a
          href={`mailto:${branding.contact.email}`}
          className="flex items-center gap-2 text-slate-400 min-h-[44px] sm:min-h-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded truncate"
          aria-label="Email us"
        >
          <i className="fas fa-envelope text-blue-500 flex-shrink-0"></i>
          <span className="truncate">{branding.contact.email}</span>
        </a>
      </div>
    </div>
  );
}