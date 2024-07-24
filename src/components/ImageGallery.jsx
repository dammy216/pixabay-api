import React from "react";

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((hits) => (
          <div className="image" key={hits.id}>
            <img src={hits.largeImageURL} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
