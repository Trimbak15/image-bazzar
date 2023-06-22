import React from 'react';

const ImageViewer = ({ images }) => {
  return (
    <div className="photos">
      {images.map((image) => (
        <img src={image.urls.small} alt={image.alt_description} />
      ))}
    </div>
  );
};

export default ImageViewer;
