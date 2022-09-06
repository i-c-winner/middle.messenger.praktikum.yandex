const plusIcon = require('../../static/images/plus.png')
const minusIcon = require('../../static/images/minus.png')
const fileIcon=require ('../../static/images/file.png');
const mediaIcon = require ('../../static/images/media.png');
const locationIcon = require('../../static/images/location.png');
const templates={
  loginIn: {
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
          class: "form__input-box",
          error: 'Латинские, русские буквы, цифры _  первая буква заглавная',
        },
        {
          placeholder: "Пароль",
          type: 'text',
          name: 'password',
          class: "form__input-box",
          error: 'От 8 до 40 символов, есть заглавная и цифра',
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
      text: "Регистрация",
      classWrapper: 'form__title'

    }],
    inputs: [
      {
        placeholder: "Почта",
        error: 'Введите правильный адрес email',
        type: 'email',
        name: 'email',
        class: "form__input-box"
      },
      {
        placeholder: "Логин",
        error: 'Используйте латинские или русские буквы',
        type: 'text',
        name: 'login',
        class: "form__input-box"
      },
      {
        placeholder: "Имя",
        error: 'Используйте латинские или русские буквы',
        type: 'text',
        name: 'name',
        class: "form__input-box"
      },
      {
        placeholder: "Фамилия",
        error: 'Используйте латинские или русские буквы',
        type: 'text',
        name: 'second_name',
        class: "form__input-box"
      },
      {
        placeholder: "Телефон",
        error: 'Введите телефон',
        type: 'phone',
        name: 'phone',
        class: "form__input-box"
      },
      {
        placeholder: "Пароль",
        error: 'От 8 до 40 символов, есть заглавная и цифра',
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
    items:[{
      text: "Добавить пользователя",
      imgPath: plusIcon
    },
    {
      text: "Удалить пользователя",
      imgPath: minusIcon
    }],
    inputs: [],
    buttons: []
  },
  footerButton: {
    items: [
      {
        text: "Добавить видео или фото",
        imgPath: mediaIcon,
      },
      {
        text: "Добавить файл",
        imgPath: fileIcon,
      },
      {
        text: "Локация",
        imgPath: locationIcon,
      }
    ]

  }

}

export default templates