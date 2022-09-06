class Validator {

  oneValidator(name: string){
    const element: HTMLInputElement=document.forms[0][name]
    switch (name) {

    case 'name':
      return this._validatorName(element)
    case 'second_name':
      return this._validatorSecondName(element)
    case 'email':
      return this._validatorEmail(element)
    case 'phone':
      return this._validatorPhone(element)
    case 'password':
      return this._validatorPassword(element)
    case 'login':
      return this._validatorLogin(element)
    case 'message':
      return this._validatorMessage()

    default: return true

    }
  }
  validationAll(inputs: [...string[]]){
    let flag=true
    inputs.map(input=>{
      if (!this.oneValidator(input)) flag=false
    })
    return flag
  }

  _validatorName(element: HTMLInputElement){
    const regName=new RegExp('^[A-Z, А-Я][A-Z,a-z,а-я,А-Я,0-9,-,_]+$')
    return regName.test(element.value)
  }

  _validatorSecondName(element:HTMLInputElement) {
    const regSecondName=new RegExp('^[A-Z, А-Я][A-Z,a-z,0-9,-,_]+$')
    return regSecondName.test(element.value)
  }
  _validatorEmail(element:HTMLInputElement){
    const regEmail=new RegExp('^\\S+@([A-Z]+|[a-z]+)[+.]([A-Z]+|[a-z]+)$')
    return regEmail.test(element.value)
  }

  _validatorPhone(element:HTMLInputElement){
    const RegPhone= new RegExp('^\\+?[0-9]{10,15}$')
    return RegPhone.test(element.value)
  }
  _validatorPassword(element:HTMLInputElement) {
    const regPassword=new RegExp('^.*[0-9]*?.*[A-Z,a-z]+.*[0-9]+.*$')
    if (element.value.length>7&&element.value.length<41){
      return regPassword.test(element.value)
    }
    return false
  }

  _validatorLogin(element:HTMLInputElement){
    const regLogin=new RegExp('^([a-z,-,A-Z,А-Я,а-я]){3,20}$')
    return regLogin.test(element.value)
  }

  _validatorMessage(){
    const inputField: HTMLInputElement | null=document.querySelector('.footer__input')
    const regMessage=new RegExp('.+')
    if (inputField!==null){
      return regMessage.test(inputField?.value)
    }return false
  }
}

export default Validator
