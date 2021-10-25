import { useState } from 'react';

const Create = () => {
  // It is important to track user input in the form and use it as a state. User input is tracked with 'value' property in input fields. Change in the input is tracked with 'onChange' property that triggers the setState method for that state in an anonymous function. Later this new blog added will be updated to db.json file.

  // Initial state is set to empty string and later updated with the user input value:
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('makku');

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title} // user input for title is tracked
          onChange={(e) => setTitle(e.target.value)} // state is updated to user input value
        />

        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body} // user input for body is tracked
          onChange={(e) => setBody(e.target.value)} // state is updated to user input value
        ></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="raaghu">raaghu</option>
          <option value="raani">raani</option>
          <option value="makku">makku</option>
        </select>

        <button>Add Blog</button>

        {/* To check if the values are getting tracked by displaying: */}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
