import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        id={image.id}
        src={image.webformatURL}
        alt={image.tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};
export default ImageGalleryItem;
