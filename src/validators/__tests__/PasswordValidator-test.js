//Test for Password Validator

jest.dontMock('../PasswordValidator.js');

describe('Password Validator', function () {

  var passwordValidator = require('../PasswordValidator');

  it('is not valid when it is not null', function() {

    expect(passwordValidator.isValid()).toEqual(false);
  });

  it('is not valid when it is empty', function() {

    expect(passwordValidator.isValid('')).toEqual(false);
  });

  it('is not valid if it less than 8 characters', function() {

    expect(passwordValidator.isValid('aaaaaaa')).toEqual(false);
  });

  it('is valid if it is equal to 8 characters', function() {

    expect(passwordValidator.isValid('aaaaaaaaa')).toEqual(true);
  });

  it('is not valid if it less than 8 characters', function() {

    expect(passwordValidator.isValid('aaaaaaaaaaaaaa')).toEqual(true);
  });
});
