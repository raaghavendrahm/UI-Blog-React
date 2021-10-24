import BlogList from './BlogList';

const Home = ({ blogs }) => {
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
