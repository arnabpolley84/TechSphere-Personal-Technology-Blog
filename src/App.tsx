import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { BlogPost, NewBlogInput } from './types/blog';
import {
  estimateReadTime,
  loadPostsFromStorage,
  savePostsToStorage,
} from './data/samplePosts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import CreateBlogPage from './pages/CreateBlogPage';
import AboutPage from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [posts, setPosts] = useState<BlogPost[]>(() => loadPostsFromStorage());

  useEffect(() => {
    savePostsToStorage(posts);
  }, [posts]);

  const handleAddPost = (input: NewBlogInput) => {
    const slugBase = input.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const uniqueId = `${slugBase || 'post'}-${Date.now()}`;

    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const newPost: BlogPost = {
      id: uniqueId,
      title: input.title,
      description: input.description,
      category: input.category,
      author: input.author,
      date: formattedDate,
      readTime: estimateReadTime(input.content),
      image: input.image,
      content: input.content,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/blogs" element={<BlogsPage posts={posts} />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage posts={posts} />} />
            <Route
              path="/create"
              element={<CreateBlogPage onAddPost={handleAddPost} />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
