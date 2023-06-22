import React, { useState } from 'react';
import SearchInput from './Components/SearchInput';
import ImageViewer from './Components/ImageViewer';
import "./App.css"

const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div>
      <SearchInput addImages={setImages} />
      <ImageViewer images={images} />
    </div>
  );
};

export default App;
