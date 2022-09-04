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
    return false
  }

  validatorSecondName(element) {
    return true
  }
  validatorEmail(element){
    return true
  }

  validatorPhone(element){
    return true
  }
  validatorPassword(element) {
    return true
  }

  validatorLogin(element){
    return true
  }

}

export default Validator