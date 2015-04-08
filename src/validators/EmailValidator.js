'use strict';

var RE = new RegExp("[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+" +
  "/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9]" +
  "(?:[A-Za-z0-9-]*[A-Za-z0-9])?");

class EmailValidator {

  isValid(email) {
    return !!(email && RE.test(email));
  }

}

var instance = new EmailValidator();

export default instance;
