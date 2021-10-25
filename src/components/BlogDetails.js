import { useParams } from 'react-router';
// useParams hook allows us to grab route parameters from the route. That is, if the path showing in the current view is ../blogs/478, then useParams helps us to grab '478'. With this, we can fetch blog with id of 478 and render it.

import useFetch from './useFetch';
// As useFetch is made reusable, the same component is used to display a particular blog by feeding in corresponding url to useFetch.

const BlogDetails = () => {
  // Let's destructure the parameter needed from useParams (id in this case):
  const { id } = useParams();

  // As the access for the parameter is avalilable, now a 'Link' is added in BlogList component to fetch the specific blog details on clicking it. For this, a part of the value of 'to' property is made dynamic w.r.t the id parameter grabbed.

  // data, isLoading, and error are destructured from useFetch for speific url:
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch('http://localhost:5000/blogs/' + id);
  // 'id' is obtained from useParams hook and is used in url dynamically to access specific blog.

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
      </article>
    </div>
  );
};

export default BlogDetails;
