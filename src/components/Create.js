const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required />

        <label>Blog Body:</label>
        <textarea type="text" required></textarea>

        <label>Blog Author:</label>
        <select>
          <option value="raaghu">raaghu</option>
          <option value="raani">raani</option>
          <option value="makku">makku</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
