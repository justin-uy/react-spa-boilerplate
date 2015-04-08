'use strict';

class PasswordValidator {

  isValid(password) {
    return !!(password && (password.length >= 8));
  }

}

export default new PasswordValidator();
