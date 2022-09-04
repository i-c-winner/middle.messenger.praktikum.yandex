class Validator {
  oneValidator(type){
    switch (type) {
    case 'name':
      return this.validatorName()
    case 'second_name':
      return this.validatorSecondName()
    case 'email':
      return this.validatorEmail()
    case 'phone':
      return this.validatorPhone()
    case 'password':
      return this.validatorPassword()
    case 'login':
      return this.validatorLogin()

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

  validatorName(){

  }

  validatorSecondName() {

  }
  validatorEmail(){

  }

  validatorPhone(){

  }
  validatorPassword() {

  }

  validatorLogin(){

  }

}

export default Validator