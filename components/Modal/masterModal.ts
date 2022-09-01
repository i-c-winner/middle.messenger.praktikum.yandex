function masterModal(type, modal){
  switch (type) {
  case 'login':
    modal.inject({
      title: 'Войти',
      fields: [{placeholder: 'Введите имя',
        type: "text",
        name: 'login'
      },
      {placeholder: 'Введите password',
        type: "text",
        name: 'password'
      }
      ],
      buttons:[{
        class: 'form__button',
        text: "Войти",
      },
      {
        class: 'form__button form__button_link',
        text: "Нет аккаунта",
      }]
    }

    )

  }
}
export default masterModal