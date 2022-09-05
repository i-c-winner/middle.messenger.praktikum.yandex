class Validator {
  oneValidator(name){
    const element=document.forms[0]
    switch (name) {
    case 'name':
      return this.validatorName(element[name])
    case 'second_name':
      return this.validatorSecondName(element[name])
    case 'email':
      return this.validatorEmail(element[name])
    case 'phone':
      return this.validatorPhone(element[name])
    case 'password':
      return this.validatorPassword(element[name])
    case 'login':
      return this.validatorLogin(element[name])
    case 'message':
      return this.validatorMessage()

    default: return true

    }
  }
  validationAll(inputs){
    let flag=true
    inputs.map(input=>{
      if (!this.oneValidator(input)) flag=false
    })
    return flag
  }

  validatorName(element){
    const regName=new RegExp('^[A-Z,a-z,0-9,-,_]+$')

    return regName.test(element.value)
  }

  validatorSecondName(element) {
    const regSecondName=new RegExp('^[A-Z,a-z,0-9,-,_]+$')
    return regSecondName.test(element.value)
  }
  validatorEmail(element){
    const regEmail=new RegExp('^\\S+@([A-Z]+|[a-z]+)[+.]([A-Z]+|[a-z]+)$')
    return regEmail.test(element.value)
  }

  validatorPhone(element){
    const RegPhone= new RegExp('^\\+?[0-9]{10,15}$')
    return RegPhone.test(element.value)
  }
  validatorPassword(element) {
    const regPassword=new RegExp('^([A-Z, a-z,0-9]+)?[0-9]?([A-Z, a-z,0-9]+)?[A-Z]([A-Z, a-z,0-9]+)?[0-9]([A-Z, a-z,0-9]+)?')
    return regPassword.test(element.value)
  }

  validatorLogin(element){
    const regLogin=new RegExp('^([a-z,-,A-Z,А-Я,а-я]){3,20}$')
    return regLogin.test(element.value)
  }

  validatorMessage(){
    const inputField: HTMLInputElement=document.querySelector('.footer__input')
    const regMessage=new RegExp('.+')
    return regMessage.test(inputField.value)
  }

}

export default Validator