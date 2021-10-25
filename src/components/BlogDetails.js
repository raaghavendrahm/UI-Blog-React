import { useParams } from 'react-router';
// useParams hook allows us to grab route parameters from the route. That is, if the path showing in the current view is ../blogs/478, then useParams helps us to grab '478'. With this, we can fetch blog with id of 478 and render it.

const BlogDetails = () => {
  // Let's destructure the parameter needed from useParams (id in this case):
  const { id } = useParams();

  // As the access for the parameter is avalilable, now a 'Link' is added in BlogList component to fetch the specific blog details on clicking it. For this, a part of the value of 'to' property is made dynamic w.r.t the id parameter grabbed.

  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
