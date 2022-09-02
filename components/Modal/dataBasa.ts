const templates={
  login: {
    title: "Авторизация",
    inputs:
      [
        {
          placeholder: "Имя",
          type: 'text',
          name: 'name',
          class: "form__input-box"
        },
        {
          placeholder: "Пароль",
          type: 'text',
          name: 'password',
          class: "form__input-box"
        }
      ],
    buttons: [
      {
        text: "Авторизоваться",
        clickType: 'changePage',
        target: 'main',
        id: 'login_button'
      },
      {
        text: "Нет аккаунта",
        clickType: "changeModal",
        target: 'registration',
        id: 'registration_button'
      }
    ],
  },
  registration: {
    title: 'Регистрация',
    inputs: [],
    buttons: []
  }
}

export default templates