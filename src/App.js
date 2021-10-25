import Navbar from './components/Navbar';
import Home from './components/Home';
import useFetch from './components/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

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

            {/* Sometimes its needed to pass dynamic values as part of path of route (a route with a certain changeable part). But, regardless of changeable part, it still renders the same component. For example, whether it displays blog with id of 1 in 'blogs/1' or blog with id of 2 as 'blogs/2', it renders the same component of 'BlogDetails' but with different data of that blog. This changeable part of the route (1 or 2 in this case) are called 'Route Parameters (variable inside a route). In our react app we need to be able to use route parameters, and access those route parameters from our component. For example, in the component we can use these ids to fetch data for that particular blog. First, BlogDetails component to be created, and create a route for it below:*/}
            <Route path="/blogs/:id">
              {/* ':' represents a dynamic value. This should take to the details of the blog with that id. But it renders the same component. For ex, right now, if the path is ../blogs/1 or ../blogs/346 it renders BlogDetails component. But, to grab the specific id in the path, and render the corresponding blog (instead of showing the same), useParams hook is used in BlogDetails component. */}
              <BlogDetails />
            </Route>

            {/* If none of the above route paths are matching, NotFound component is rendered. For this, the path will be '*'. */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
