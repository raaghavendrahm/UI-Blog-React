import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  // Initial state of blogs to display on homepage:
  const [blogs, setBolgs] = useState([
    { title: 'Blog-1', body: 'This is blog-1', author: 'raaghu', id: 1 },
    { title: 'Blog-2', body: 'This is blog-2', author: 'raani', id: 2 },
    { title: 'Blog-3', body: 'This is blog-3', author: 'makku', id: 3 },
  ]);

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
