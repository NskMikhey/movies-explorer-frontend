import React from 'react';
import Popup from '../Popup/Popup';
import './InfoTooltip.css';
import tooltipError from '../../images/tooltip_error.svg';
import tooltipSuccess from '../../images/tooltip_succes.svg';
import { MESSAGE_TEXT } from '../../utils/constants';

const InfoTooltip = (props) => {
  // Шаблоны сообщений
  const { register, login, serverError } = MESSAGE_TEXT;

  // Выбор данных для попапа по типу информации
  let tooltipData = {};
  switch (props.infoTooltip.type) {
    case 'reg_success':
      tooltipData = {
        image: tooltipSuccess,
        text: register,
      };
      break;
    case 'log_success':
      tooltipData = {
        image: tooltipSuccess,
        text: login,
      };
      break;
    case 'server_error':
      tooltipData = {
        image: tooltipError,
        text: serverError,
      };
      break;
    case 'error':
      tooltipData = {
        image: tooltipError,
        text: props.infoTooltip.message,
      };
      break;
    default:
      tooltipData = {
        image: '',
        text: '',
      };
  }

  return (
    <Popup
      className={props.popupOpen ? 'popup popup_is-opened' : 'popup'}
      isOpen={true}
      closeHandler={props.onClose}
    >
      
        <div className='popup__tooltip'>
          <img
            className='popup__tooltip-image'
            src={tooltipData.image}
            alt={tooltipData.text}
          />
          <p className='popup__tooltip-text'>{tooltipData.text}</p>
        </div>
    </Popup>
  );
};

export default InfoTooltip;
