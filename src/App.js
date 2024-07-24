import { useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import { useRef } from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpointURL = `https://pixabay.com/api/?key=31907000-0371760c45009c503ae07ef1b&q= ${ref.current.value}&image_type=photo`;
    fetch(endpointURL)
      .then((res) => res.json())
      .then((data) => setFetchData(data.hits));
      
  };
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
