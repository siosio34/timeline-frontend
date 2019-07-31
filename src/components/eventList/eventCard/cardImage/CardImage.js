import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CardImage.css';

const CardImage = ({ images }) => {
  return (
    <div className="card-image">
      {images.length === 1 && (
        <img
          className="timeline-item-image"
          alt="이벤트 이미지"
          src={images[0].url}
        />
      )}
      {images.length > 1 && (
        <ImageGallery
          items={images.map(file => {
            return ({
              original: file.url,
              thumbnail: file.thumbUrl,
            });
          })}
          lazyLoad
          thumbnailPosition="right"
          showFullscreenButton={false}
          showPlayButton={false}
        />
      )}
    </div>
  );
};

CardImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CardImage;