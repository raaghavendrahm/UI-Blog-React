import Navbar from './components/Navbar';
import Home from './components/Home';
import useFetch from './components/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';

function App() {
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

  // Let's destructure the object returned from useFetch:
  const {
    data: blogs, // data is received and renamed as 'blogs' as it is passed as props.
    isLoading,
    error,
  } = useFetch('http://localhost:5000/blogs');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* In case of any error while fetching data, error message is displayed: */}
          {error && <div>{error}</div>}

          {/* While data is not yet fetched, value of 'isLoading' state will be 'true' and this condition should display 'Loading...' message: */}
          {isLoading && <div>Loading...</div>}

          {/* Once the data is fetched, the value of 'isLoading' state must be changed to 'false' and that should stop diplaying 'Loading...' message. This is taken care in 'Fetch Blogs' section. */}
          <Switch>
            <Route exact path="/">
              <Home blogs={blogs} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
