import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ allImages, handleOpenModal }) {

  return (
    <ul className="ImageGallery">
      {allImages.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          web={webformatURL}
          tags={tags}
          allItem={allImages}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
    allImages: PropTypes.array,
    handleOpenModal: PropTypes.func.isRequired
}
