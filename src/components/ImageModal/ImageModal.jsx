import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={urls.regular} alt={alt_description} className={styles.image} />
      <div className={styles.info}>
        <p><strong>Author:</strong> {user.name}</p>
              <p><strong>Likes:</strong> ❤️ {likes}</p>
               {alt_description && <p>{alt_description}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;
