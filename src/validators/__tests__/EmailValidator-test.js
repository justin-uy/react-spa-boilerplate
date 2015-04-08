//Test for Email Validator

jest.dontMock('../EmailValidator.js');

describe('Email Validator', function () {

  var emailValidator = require('../EmailValidator');

  it('is not valid when it is not null', function() {

    expect(emailValidator.isValid()).toEqual(false);
  });

  it('is not valid when it is empty', function() {

    expect(emailValidator.isValid('')).toEqual(false);
  });

  it('is not valid if it does not have an @', function() {

    expect(emailValidator.isValid('test.com')).toEqual(false);
  });

  it('is not valid if it does not have top level domain', function() {

    expect(emailValidator.isValid('test@email')).toEqual(false);
  });

  it('is not valid if there are no characters preceeding the @ and top level domain', function() {

    expect(emailValidator.isValid('@email.com')).toEqual(false);
  });

  it('is valid if there are characters preceeding the @ and top level domain', function() {

    expect(emailValidator.isValid('a@email.com')).toEqual(true);
  });

  it('is valid if there are characters preceeding the @, a subdomain, and a top-level domain', function() {

    expect(emailValidator.isValid('a@emailer.email.com')).toEqual(true);
  });
});
