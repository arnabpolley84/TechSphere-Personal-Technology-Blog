import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/samplePosts';
import ImageWithFallback from '../components/ImageWithFallback';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] headline-balance mb-5">
          An independent space for thoughtful technology writing.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          TechSphere began as a personal engineering notebook to document lessons from
          building web software, optimizing edge systems, and navigating modern cloud
          infrastructure without the hype.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/9] mb-14">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="TechSphere editorial workspace"
          fallbackTitle="TechSphere Editorial Studio"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-14 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Our Editorial Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every post on TechSphere focuses on practical fundamentals over fleeting
            trends. Whether breaking down how local-first browser storage eliminates
            latency or why passive cooling matters for edge hardware, we aim for clear,
            reproducible explanations that respect the reader&apos;s time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Open to Contributors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Anyone visiting TechSphere can draft and publish their own articles using
            the built-in editor. Posts are saved directly in your browser&apos;s local
            storage, making it easy to test ideas, document side projects, and build a
            personal reading archive.
          </p>
        </div>
      </div>

      <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Ready to explore or share an idea?
          </h2>
          <p className="text-sm text-slate-600">
            Browse the full archive or publish your first post in seconds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Browse Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/create"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
}
