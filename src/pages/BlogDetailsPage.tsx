import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types/blog';
import BlogCard from '../components/BlogCard';
import ImageWithFallback from '../components/ImageWithFallback';

interface BlogDetailsPageProps {
  posts: BlogPost[];
}

export default function BlogDetailsPage({ posts }: BlogDetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Article Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The blog post you are looking for may have been removed or the link is incorrect.
        </p>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  const contentBlocks = post.content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const relatedPosts = posts
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="mb-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-slate-500 mb-4">
          <span className="font-semibold text-blue-700">{post.category}</span>
          <span aria-hidden="true">&middot;</span>
          <time className="tabular-nums">{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span className="tabular-nums">{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-[1.15] headline-balance mb-5">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          {post.description}
        </p>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
          <span>
            Written by <strong className="font-semibold text-slate-900">{post.author}</strong>
          </span>
          <span className="text-xs text-slate-500">Published {post.date}</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/9]">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          fallbackTitle={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-prose mx-auto space-y-6 text-base sm:text-[17px] text-slate-700 leading-[1.75]">
        {contentBlocks.map((block, index) => {
          if (block.startsWith('## ')) {
            return (
              <h2
                key={index}
                className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 leading-snug"
              >
                {block.replace(/^##\s+/, '')}
              </h2>
            );
          }

          return <p key={index}>{block}</p>;
        })}
      </div>

      <div className="max-w-prose mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <Link
          to="/create"
          className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Write a New Article
        </Link>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            More from TechSphere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
