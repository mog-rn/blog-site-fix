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
      content: "Sample blog content here..."
    },
    {
      id: 2,
      title: "BLOG POST",
      content: "Another blog post content..."
    },
    {
      id: 3,
      title: "BLOG POST",
      content: "Yet another blog post..."
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>HOME PAGE WHERE THE BLOGS ARE LOCATED AND CAN BE VIEWED</h1>
        <p>ALL THE BLOGS ARE LOCATED HERE</p>
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