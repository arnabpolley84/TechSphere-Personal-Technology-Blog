import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { NewBlogInput } from '../types/blog';
import { BLOG_CATEGORIES, COVER_IMAGE_PRESETS } from '../data/samplePosts';
import ImageWithFallback from '../components/ImageWithFallback';

interface CreateBlogPageProps {
  onAddPost: (newPost: NewBlogInput) => void;
}

export default function CreateBlogPage({ onAddPost }: CreateBlogPageProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState<string>(BLOG_CATEGORIES[0]);
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const previewImage =
    customImageUrl.trim() ||
    COVER_IMAGE_PRESETS[category] ||
    COVER_IMAGE_PRESETS['Web Engineering'];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !category.trim() ||
      !description.trim() ||
      !content.trim()
    ) {
      setErrorMessage(
        'Please complete all required fields (title, author, category, description, and content).'
      );
      return;
    }

    onAddPost({
      title: title.trim(),
      author: author.trim(),
      category: category.trim(),
      description: description.trim(),
      image: previewImage,
      content: content.trim(),
    });

    navigate('/blogs', {
      state: { createdTitle: title.trim() },
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      <div className="pb-8 border-b border-slate-200 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">
          Publish
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Create a New Blog Post
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
          Share a tutorial, architecture note, or product review. New posts are saved
          in your browser storage and appear immediately on Home and All Blogs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-7 space-y-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8"
        >
          {errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="post-title"
              className="block text-sm font-semibold text-slate-900 mb-1.5"
            >
              Title <span className="text-blue-700">*</span>
            </label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              placeholder="e.g., Building Resilient API Gateways in Node.js"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="post-author"
                className="block text-sm font-semibold text-slate-900 mb-1.5"
              >
                Author <span className="text-blue-700">*</span>
              </label>
              <input
                id="post-author"
                type="text"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="post-category"
                className="block text-sm font-semibold text-slate-900 mb-1.5"
              >
                Category <span className="text-blue-700">*</span>
              </label>
              <select
                id="post-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="post-description"
              className="block text-sm font-semibold text-slate-900 mb-1.5"
            >
              Short Description <span className="text-blue-700">*</span>
            </label>
            <textarea
              id="post-description"
              rows={2}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              placeholder="A brief 1-2 sentence summary shown on blog cards."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div>
            <label
              htmlFor="post-image"
              className="block text-sm font-semibold text-slate-900 mb-1.5"
            >
              Cover Image URL <span className="text-xs font-normal text-slate-500">(Optional — defaults to category studio cover)</span>
            </label>
            <input
              id="post-image"
              type="url"
              value={customImageUrl}
              onChange={(e) => setCustomImageUrl(e.target.value)}
              placeholder="Leave blank to use the default TechSphere cover photo"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="post-content"
                className="block text-sm font-semibold text-slate-900"
              >
                Article Content <span className="text-blue-700">*</span>
              </label>
              <span className="text-xs text-slate-500">
                Separate paragraphs with blank lines
              </span>
            </div>
            <textarea
              id="post-content"
              rows={9}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              placeholder="Write your full article here. Prefix a line with ## to create a section heading."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 leading-relaxed focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Publish Post
            </button>
            <Link
              to="/blogs"
              className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>

        <aside className="lg:col-span-5 space-y-6">
          <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/70">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Live Card Preview
            </h2>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={previewImage}
                  alt={title || 'Cover preview'}
                  fallbackTitle={title || category}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-700">{category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Just now</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2">
                  {title.trim() || 'Your article title will appear here'}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                  {description.trim() ||
                    'Your short summary will help readers preview the key takeaway.'}
                </p>
                <span className="text-xs font-medium text-slate-500">
                  By {author.trim() || 'Author Name'}
                </span>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 bg-white">
            <h2 className="text-base font-bold text-slate-900 mb-3">
              Formatting Tips
            </h2>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>Keep titles clear and focused on one technical takeaway.</li>
              <li>Use a blank line between paragraphs for comfortable reading.</li>
              <li>
                Start a line with <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">## </code> to add a section heading.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
