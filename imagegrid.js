import React from "react";



const ImageGrid = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map((image) => (
                <img key={image.id} src={image.urls.regular} alt={image.alt_description} width="350px" height="350px"/>
            ))}
        </div>
    );
};



export default ImageGrid;