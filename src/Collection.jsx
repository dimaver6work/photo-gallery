import { Modal } from "./modal";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Collection = ({ author, url, id }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <div className="collection">
        
        <LazyLoadImage
          className="collection__big"
          src={url}
          alt={id}
          onClick={() => setModalActive(true)}
        />

        <h4>{author}</h4>
      </div>
      <Modal
        isOpen={modalActive}
        >
                <div className="modal active">
            <div className="contentModal" onClick={(e) => e.stopPropagation()}>
              <img src={url} className="modalBack" alt={url}/>

              <button
                onClick={() => {
                  setModalActive(false);
                }}
                className="closeButton"
              >
                Закрыть
              </button>
            </div>
          </div>
        </Modal>
      
    </div>
  );
};
