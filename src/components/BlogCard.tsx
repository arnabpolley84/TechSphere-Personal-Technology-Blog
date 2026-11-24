import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';
import ImageWithFallback from './ImageWithFallback';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors duration-150 hover:border-blue-300">
      <Link
        to={`/blogs/${post.id}`}
        className="block aspect-[4/3] w-full overflow-hidden bg-slate-100"
      >
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          fallbackTitle={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500 mb-3">
          <span className="text-blue-700 font-semibold">{post.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="tabular-nums">{post.date}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="tabular-nums">{post.readTime}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2.5 group-hover:text-blue-700 transition-colors duration-150">
          <Link to={`/blogs/${post.id}`} className="focus-visible:outline-2 focus-visible:outline-blue-600">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-1">
          {post.description}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-slate-500 truncate">
            By {post.author}
          </span>

          <Link
            to={`/blogs/${post.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0 transition-colors duration-150"
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
