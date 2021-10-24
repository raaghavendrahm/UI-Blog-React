import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // Initial state of blogs to display on homepage:
  const [blogs, setBlogs] = useState([]);

  /* 
  // Delete Blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);

    // Tasks whose id is not as same as the one which is deleted are displayed. Because filter returns the ones whose condition is true.

    // This deletes blogs only from UI, not from database (server). So, on page refresh, they appear back. This is fixed with json-server later.
  }; 
  */

  // Fetch Blogs
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
