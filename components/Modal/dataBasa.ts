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
        text: "Авторизоваться"
      },
      {
        text: "Нет аккаунта"
      }
    ]

  }
}

export default templates