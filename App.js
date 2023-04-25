
import ImageGrid from './imagegrid';
import './App.css';
import { useState } from 'react';
import SearchForm from './imagepage';

function App() {
  const [images, setImages] = useState([]);

  const client_id = "wJIR5UmQMhK0iussxbysjDvaLeZODzG9EmBFUCD90W0";

  const searchImages = async (query) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${query}&client_id=${client_id}`
    );
    const data = await response.json();
    setImages(data.results);
  }
 
  return (
    <div className="app">
      <h1>React photo search</h1>
      <button>bookmarks</button>
      <SearchForm searchImages={searchImages}/>
      <ImageGrid images={images}/>
    </div>

  );
}

export default App;
