import  { useState } from 'react';
import '../Styles/homepage.css';

const BlogPost = (post) => {
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="blog-post">
      <div className="blog-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="blog-actions">
        <button 
          className="action-btn like-btn"
          onClick={() => setLikes(prev => prev + 1)}
        >
          LIKE ({likes})
        </button>
        <button 
          className="action-btn comment-btn"
          onClick={() => setShowComments(!showComments)}
        >
          COMMENT
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  
  const samplePosts = [
    {
      id: 1,
      title: "BLOG POST",
      content: "Sample blog content here...",
      // image: "https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.jpg?s=2048x2048&w=is&k=20&c=4k6sFZXorQSQWyDYzbwIkmCOM7SMtZ2r-gjbGn7JtJU="
    },
    {
      id: 2,
      title: "BLOG POST",
      content: "Another blog post content...",
      // image: "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg"
    },
    {
      id: 3,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_1280.jpg"
    },
    {
      id: 4,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg"
    },
    {
      id: 5,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg"
    },
    {
      id: 6,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2020/02/02/08/45/blogging-4812375_960_720.jpg"
    },
    {
      id: 7,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2020/06/19/21/18/laptop-5318837_960_720.jpg"
    },
    {
      id: 8,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2014/09/27/19/53/blogging-464042_1280.jpg"
    },
    {
      id: 9,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2018/04/14/02/40/paper-3318159_960_720.jpg"
    },
    {
      id: 10,
      title: "BLOG POST",
      content: "Yet another blog post...",
      // image: "https://cdn.pixabay.com/photo/2020/11/18/10/40/laptop-5754927_1280.jpg"
    }

  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>HOME PAGE</h1>
      </header>
      
      <div className="blogs-grid">
        {samplePosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;