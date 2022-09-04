class Validator {
  oneValidator(type){
    console.log(type)
    switch (type) {
    case 'name':
      return this.validatorName(type)
    case 'second_name':
      return this.validatorSecondName(type)
    case 'email':
      return this.validatorEmail(type)
    case 'phone':
      return this.validatorPhone(type)
    case 'password':
      return this.validatorPassword(type)
    case 'login':
      return this.validatorLogin(type)

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

  validatorName(type){
    return false
  }

  validatorSecondName(type) {
    return true
  }
  validatorEmail(type){
    return true
  }

  validatorPhone(type){
    return true
  }
  validatorPassword(type) {
    return true
  }

  validatorLogin(type){
    return true
  }

}

export default Validator