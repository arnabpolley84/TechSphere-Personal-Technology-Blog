import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Search, X } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { BLOG_CATEGORIES } from '../data/samplePosts';
import BlogCard from '../components/BlogCard';

interface BlogsPageProps {
  posts: BlogPost[];
}

interface LocationState {
  createdTitle?: string;
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const locationState = location.state as LocationState | null;

  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bannerTitle, setBannerTitle] = useState<string | undefined>(
    locationState?.createdTitle
  );

  useEffect(() => {
    const paramCategory = searchParams.get('category') || 'All';
    setSelectedCategory(paramCategory);
  }, [searchParams]);

  const allCategories = [
    'All',
    ...Array.from(
      new Set([...BLOG_CATEGORIES, ...posts.map((post) => post.category)])
    ),
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      normalizedQuery === '' ||
      post.title.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    handleCategoryChange('All');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">
            Archive
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            All Blog Posts
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Browse <span className="tabular-nums font-medium text-slate-900">{posts.length}</span>{' '}
            articles across engineering, infrastructure, security, and hardware.
          </p>
        </div>

        <Link
          to="/create"
          className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0"
        >
          Write New Post
        </Link>
      </div>

      {bannerTitle && (
        <div className="mb-8 flex items-center justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
            <span>
              Published <strong>{bannerTitle}</strong>. Your article is now saved in your browser and visible on Home and Blogs.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setBannerTitle(undefined)}
            aria-label="Dismiss notification"
            className="p-1 text-blue-700 hover:text-blue-900 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0"
          role="group"
          aria-label="Filter posts by category"
        >
          {allCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  isActive
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-80 shrink-0">
          <Search
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blog titles..."
            aria-label="Search blog titles"
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <>
          <p className="text-xs font-medium text-slate-500 mb-6 tabular-nums">
            Showing {filteredPosts.length}{' '}
            {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {normalizedQuery ? ` matching "${searchQuery.trim()}"` : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="border border-slate-200 rounded-2xl bg-slate-50/60 p-12 text-center">
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            No matching articles found
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Try adjusting your search keywords or switching back to all categories.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
