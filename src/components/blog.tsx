import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import { Search } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  url: string;
  readTime: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "Transfer Learning, Pre-Training, or Fine-Tuning?",
      date: "May 15, 2023",
      excerpt:
        "Understand the key differences between these machine learning approaches and when to use each one for optimal results.",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80",
      url: "https://medium.com/logspace/transfer-learning-pre-training-or-fine-tuning-fc1fa6c7801e",
      readTime: "8 min read",
    },
    {
      title: "KozmoAI 1.1 Release",
      date: "June 22, 2023",
      excerpt:
        "Explore the exciting new features and improvements in our latest release that make building AI workflows even easier.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      url: "https://medium.com/logspace/langflow-1-1-release-b6df2f8189a6",
      readTime: "5 min read",
    },
    {
      title: "Build a Multi-Query RAG pipeline in KozmoAI",
      date: "July 10, 2023",
      excerpt:
        "Learn how to implement an advanced Retrieval Augmented Generation pipeline with multiple queries for improved results.",
      image:
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
      url: "https://medium.com/logspace/build-a-multi-query-rag-pipeline-in-langflow-67d7d43b0699",
      readTime: "12 min read",
    },
    {
      title: "Optimizing LLM Performance with KozmoAI",
      date: "August 5, 2023",
      excerpt:
        "Discover techniques to improve the performance and efficiency of your large language models using our visual workflow builder.",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
      url: "#",
      readTime: "10 min read",
    },
    {
      title: "Creating Custom Components for KozmoAI",
      date: "September 12, 2023",
      excerpt:
        "A step-by-step guide to building your own custom components to extend the functionality of your AI workflows.",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
      url: "#",
      readTime: "7 min read",
    },
    {
      title: "The Future of AI Development Platforms",
      date: "October 28, 2023",
      excerpt:
        "Our vision for the evolution of AI development platforms and how KozmoAI is leading the way in democratizing AI creation.",
      image:
        "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&q=80",
      url: "#",
      readTime: "6 min read",
    },
  ];

  // Filter posts based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(blogPosts.slice(1));
      setFeaturedPost(blogPosts[0]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query),
      );

      if (filtered.length > 0) {
        setFeaturedPost(filtered[0]);
        setFilteredPosts(filtered.slice(1));
      } else {
        setFeaturedPost(null);
        setFilteredPosts([]);
      }
    }
  }, [searchQuery, blogPosts]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-screen min-h-screen bg-[#0B0B0B] relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground
        colors={["#623CEA", "#A82DC1", "#BB86FC", "#C51162"]}
        count={80}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header
            logo={<div className="text-white font-bold text-2xl">KozmoAI</div>}
            navLinks={[
              { label: "Features", href: "/features" },
              { label: "Documentation", href: "/docs" },
              { label: "Community", href: "/community" },
              { label: "Blog", href: "/blog" },
            ]}
            ctaText="Get Started"
          />
        </motion.div>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Blog Header */}
            <div className="text-center mb-10">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                KozmoAI Blog
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Insights, tutorials, and updates from the KozmoAI team
              </motion.p>

              {/* Search Bar */}
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full bg-[#1A1A1A] border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
                    >
                      <span className="text-sm">Clear</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Search Results Summary */}
            {searchQuery && (
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300">
                  {filteredPosts.length > 0 || featuredPost ? (
                    <span>
                      Found {(featuredPost ? 1 : 0) + filteredPosts.length}{" "}
                      results for "{searchQuery}"
                    </span>
                  ) : (
                    <span>No results found for "{searchQuery}"</span>
                  )}
                </p>
              </motion.div>
            )}

            {/* Featured Post */}
            <AnimatePresence mode="wait">
              {featuredPost ? (
                <motion.div
                  key="featured-post"
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="bg-gradient-to-br from-purple-900/20 to-pink-500/20 rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="text-purple-400 text-sm font-medium mb-4">
                          FEATURED POST
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-300 mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center text-gray-400 text-sm mb-6">
                          <span>{featuredPost.date}</span>
                          <span className="mx-2">•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div>
                          <Button
                            onClick={() =>
                              window.open(featuredPost.url, "_blank")
                            }
                            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg"
                          >
                            Read Article
                          </Button>
                        </div>
                      </div>
                      <div className="relative h-64 lg:h-auto">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : searchQuery ? (
                <motion.div
                  key="no-featured-post"
                  className="mb-16 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Empty state when no featured post is available due to search */}
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Blog Posts Grid */}
            <AnimatePresence>
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.title}
                      className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="relative h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 text-xs">
                            {post.date} • {post.readTime}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(post.url, "_blank")}
                            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0"
                          >
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : searchQuery ? (
                <motion.div
                  className="py-20 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-[#111111] rounded-xl border border-purple-500/20 p-12 max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      No results found
                    </h3>
                    <p className="text-gray-300 mb-6">
                      We couldn't find any articles matching your search for "
                      {searchQuery}". Try using different keywords or browse our
                      featured content.
                    </p>
                    <Button
                      onClick={clearSearch}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                    >
                      Clear Search
                    </Button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Newsletter Signup */}
            <motion.div
              className="mt-20 bg-gradient-to-br from-purple-900/20 to-pink-500/20 rounded-2xl p-8 md:p-12 border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay updated with our newsletter
                </h3>
                <p className="text-gray-300 mb-8">
                  Get the latest articles, tutorials, and updates from the
                  KozmoAI team delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-[#1A1A1A] border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] border-t border-purple-900/20 py-12 px-6 md:px-12 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-white font-bold text-2xl mb-4">KozmoAI</div>
              <p className="text-gray-400 mb-4">
                Modern tools for modern teams.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/digitranslab/kozmoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/DigitransLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/DigitransLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcWED497zp1JAAsvXMBnXjQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Integrations", "Changelog"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Tutorials", "Blog", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Legal"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-gray-500 text-sm">
            © {new Date().getFullYear()} KozmoAI. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
