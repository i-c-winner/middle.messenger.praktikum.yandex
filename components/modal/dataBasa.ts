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
  },
  settings: {
    texts:[{
      text: "Настройки",
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
        error: 'Латинские буквы, цифры, - и _',
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
    ],
    unputs:[]

  }

}

export default templates
