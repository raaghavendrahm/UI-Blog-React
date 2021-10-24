import BlogList from './BlogList';

const Home = ({ blogs, onDelete }) => {
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" onDelete={onDelete} />
    </div>
  );
};

export default Home;
