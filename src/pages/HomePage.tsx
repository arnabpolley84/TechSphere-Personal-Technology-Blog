import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { HERO_IMAGE } from '../data/samplePosts';
import BlogCard from '../components/BlogCard';
import ImageWithFallback from '../components/ImageWithFallback';

interface HomePageProps {
  posts: BlogPost[];
}

export default function HomePage({ posts }: HomePageProps) {
  const latestPosts = posts.slice(0, 6);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4">
                Personal Technology Journal
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] headline-balance mb-5">
                Clear writing on software, systems, and the tools shaping the web.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                TechSphere is a personal engineering notebook covering practical web
                architecture, on-device AI, cloud reliability, security, and modern
                computing hardware.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Explore All Blogs
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/create"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  Write a Post
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <ImageWithFallback
                  src={HERO_IMAGE}
                  alt="TechSphere modern software engineering desk with laptop and blue notebook"
                  fallbackTitle="TechSphere Editorial Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Latest Articles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5">
              Fresh notes and deep dives across engineering and technology.
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0 transition-colors"
          >
            View all {posts.length} posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Topics We Explore
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Browse essays organized by discipline, or publish your own engineering notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                01. Web Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Frontend architecture, React patterns, accessible interfaces, and local-first state design.
              </p>
              <Link
                to="/blogs?category=Web%20Engineering"
                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read Web Engineering &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                02. AI &amp; Silicon Systems
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                On-device model inference, quantization trade-offs, and custom edge compute hardware.
              </p>
              <Link
                to="/blogs?category=AI%20%26%20Systems"
                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read AI &amp; Systems &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                03. Cloud &amp; Security
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Zero-downtime deployments, container resilience, passkeys, and practical cryptography.
              </p>
              <Link
                to="/blogs?category=Cloud%20%26%20DevOps"
                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read Cloud &amp; DevOps &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
