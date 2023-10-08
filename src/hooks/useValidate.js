import React from 'react';
import {
  MESSAGE_TEXT,
  REGX_ALL,
  REGX_EMAIL,
  REGX_NAME,
} from '../utils/constants';
import { useLocation } from 'react-router-dom';

export function useValidate(data, setData) {
  // Стейты валидации инпутов, формы и сообщений ошибок валидации
  const [formInputsValid, setFormInputsValid] = React.useState({});
  const [formValidationMessages, setFormValidationMessages] = React.useState(
    {}
  );
  const [formValid, setFormValid] = React.useState(false);
  const { pathname } = useLocation();
  // Изменяет стейт data
  function handleDataChange(evt) {
    const { name, value, checked, type } = evt.target;
    
    if (type === 'checkbox') {
      return setData({
        ...data,
        [name]: checked,
      });
    }
    setData({
      ...data,
      [name]: value,
    });
    handleInputValid(evt);
  }

  // Обрабатывает валидацию ввода события
  const handleInputValid = (evt) => {
    evt.preventDefault();
    const { name, validationMessage, value } = evt.target;
    const { valid } = evt.target.validity;

    // Выбор регулярного выражения и сообщения по имени поля
    let validParametrs;
    switch (name) {
      case 'name':
        validParametrs = {
          regx: REGX_NAME,
          message: MESSAGE_TEXT.noName,
        };
        break;
      case 'email':
        validParametrs = {
          regx: REGX_EMAIL,
          message: MESSAGE_TEXT.noEmail,
        };
        break;
      case 'search':
        validParametrs = {
          regx: REGX_ALL,
          message: MESSAGE_TEXT.emptyString,
        };
        break;
      default:
        validParametrs = {
          regx: REGX_ALL,
          message: '',
        };
        break;
    }

    // Проверка на валидность (стандартными средствами и средствами регулярного выражения) и установка сообщений валидации
    if (!valid || !validParametrs.regx.test(value)) {
      setFormInputsValid({
        ...formInputsValid,
        [name]: false,
      });

      setFormValidationMessages({
        ...formValidationMessages,
        [name]: !validParametrs.regx.test(value)
          ? validParametrs.message
          : validationMessage,
      });
    } else {
      setFormInputsValid({
        ...formInputsValid,
        [name]: true,
      });

      setFormValidationMessages({
        ...formValidationMessages,
        [name]: '',
      });
    }
  };

  // Проверка валидности всей формы
  React.useEffect(() => {
    if (!Object.values(data).some((item) => item.length === 0)) {
      const formInputsValidValues = Object.values(formInputsValid);
      const isFormValid = formInputsValidValues.includes(false) ? false : true;
      setFormValid(isFormValid);
    }
  }, [formInputsValid, data, pathname]);

  return { formValid, handleDataChange, formValidationMessages };
}
