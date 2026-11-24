import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
      isActive
        ? 'text-blue-700 border-blue-700'
        : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'bg-blue-50 text-blue-700'
        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          TechSpere<span className="text-blue-700">-React</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-7"
        >
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/create" className={navLinkClass}>
            Create Post
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/create"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Write Article
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/create"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass}
          >
            Create Post
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileLinkClass}
          >
            About
          </NavLink>
        </div>
      )}
    </header>
  );
}
