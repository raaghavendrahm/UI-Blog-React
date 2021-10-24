import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // Initial state of blogs to display on homepage:
  const [blogs, setBlogs] = useState([]);

  // While data is being fetched, a loading messages must be displayed:
  const [isLoading, setIsLoading] = useState(true);

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
    // In this case, data is fetched from local machine. So, it is very fast. But, in actual case, data will be fetched from a server over the internet, which will be having a delay. So, to mimic that, 'setTimeOut' function is used to mimic a delay of one second. Note that it shall not be done in an actual project as it adds another second of delay!!

    setTimeout(() => {
      fetch('http://localhost:5000/blogs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  /*
  // The above can be done using Async/Await as well as follows:
  
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/blogs');
      const data = await res.json();
      setBlogs(data);
    };
    fetchTasks();
  }); 
  */

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* While data is not yet fetched, value of 'isLoading' state will be 'true' and this condition should display 'Loading...' message: */}
        {isLoading && <div>Loading...</div>}

        {/* Once the data is fetched, the value of 'isLoading' state must be changed to 'false' and that should stop diplaying 'Loading...' message. This is taken care in 'Fetch Blogs' section. */}

        <Home blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
