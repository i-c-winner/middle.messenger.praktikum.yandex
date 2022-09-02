const templates={
  login: {
    texts:[{
      text: "Авторизация",
      classWrapper: 'form__title'
    }],
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
    texts:[{
      text: "Авторизация",
      classWrapper: 'form__title'

    }],
    inputs: [
      {
        placeholder: "Почта",
        type: 'email',
        name: 'email',
        class: "form__input-box"
      },
      {
        placeholder: "Логин",
        type: 'text',
        name: 'login',
        class: "form__input-box"
      },
      {
        placeholder: "Имя",
        type: 'text',
        name: 'name',
        class: "form__input-box"
      },
      {
        placeholder: "Фамилия",
        type: 'text',
        name: 'second_name',
        class: "form__input-box"
      },
      {
        placeholder: "Телефон",
        type: 'phone',
        name: 'phone',
        class: "form__input-box"
      },
      {
        placeholder: "Пароль",
        type: 'password',
        name: 'password',
        class: "form__input-box"
      },
      {
        placeholder: "Пароль еще раз",
        type: 'password',
        name: 'password_repeat',
        class: "form__input-box"
      },

    ],
    buttons: [
      {
        text: "Зарегестрироваться",
        clickType: 'changePage',
        target: '#',
        id: 'registration_button'
      },
      {
        text: "Войти",
        clickType: "changePage",
        target: 'main',
        id: 'login_button'
      }
    ]
  },
  headerButton: {
    texts:[{
      text: "Авторизация",
      classWrapper: 'form__title'

    },
    {
      text: "Авторизация",
      classWrapper: 'form__title'

    }],
    inputs: [],
    buttons: []
  }
}

export default templates