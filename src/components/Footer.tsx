import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-200">
          <div className="space-y-3">
            <Link
              to="/"
              className="inline-block text-lg font-bold tracking-tight text-slate-900"
            >
              Tech<span className="text-blue-700">Sphere</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Independent notes and essays on software architecture, artificial
              intelligence, cloud systems, and modern hardware.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-blue-700 transition-colors">
                  All Blogs
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-blue-700 transition-colors">
                  Write a Post
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-700 transition-colors">
                  About TechSphere
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Focus Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link
                  to="/blogs?category=AI%20%26%20Systems"
                  className="hover:text-blue-700 transition-colors"
                >
                  AI &amp; Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs?category=Web%20Engineering"
                  className="hover:text-blue-700 transition-colors"
                >
                  Web Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs?category=Cloud%20%26%20DevOps"
                  className="hover:text-blue-700 transition-colors"
                >
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs?category=Cybersecurity"
                  className="hover:text-blue-700 transition-colors"
                >
                  Cybersecurity &amp; Hardware
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} TechSphere. All rights reserved.</p>
          <p>Built with React &amp; React Router. Posts saved locally in your browser.</p>
        </div>
      </div>
    </footer>
  );
}
