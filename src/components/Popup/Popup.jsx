import React, { useEffect } from 'react';
import './Popup.css';

const Popup = (props) => {
  const { closeHandler, children, isOpen } = props;

  // Закрытие по оверлею
  const handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeHandler();
    }
  };

  // Закрытие  по Esc
  const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOverlayClose, false);
      document.addEventListener('keydown', closeByEsc, false);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClose, false);
      document.removeEventListener('keydown', closeByEsc, false);
    };
  }, [isOpen, closeHandler]);

  return (
    <div className={props.className}>
      <div className='popup__container'>
        <button
          className='popup__close-button button-hover'
          type='button'
          aria-label='Закрыть окно'
          onClick={props.closeHandler}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
