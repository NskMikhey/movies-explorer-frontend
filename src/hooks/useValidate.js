import React from 'react';

export function useValidate(data, setData) {
  // Стейты валидации инпутов, формы и сообщений ошибок валидации
  const [formInputsValid, setFormInputsValid] = React.useState({});
  const [formValidationMessages, setFormValidationMessages] = React.useState(
    {}
  );
  const [formValid, setFormValid] = React.useState(false);

  // Изменяет стейт data
  function handledataChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
    handleInputValid(evt);
  }

  // Обрабатывает валидацию ввода события
  const handleInputValid = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;

    if (!evt.target.validity.valid) {
      setFormInputsValid({
        ...formInputsValid,
        [name]: false,
      });

      setFormValidationMessages({
        ...formValidationMessages,
        [name]: evt.target.validationMessage,
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

  React.useEffect(() => {
    if (!Object.values(data).some((item) => item.length === 0)) {
      const formInputsValidValues = Object.values(formInputsValid);
      const isFormValid = formInputsValidValues.includes(false) ? false : true;
      setFormValid(isFormValid);
    }
  }, [formInputsValid, data]);

  return {formValid, handledataChange, formValidationMessages}
}