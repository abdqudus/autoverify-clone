import { commonPasswords } from "./common-passwords";

const passwordMinLength = 6;
const passwordMaxLength = 100;
const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// class Status {
//   msg = null;
//   id = null;
//   constructor(msg, id) {
//     this.msg = msg;
//     this.id = id;
//   }
// }

// const PasswordStates = {
//   ok: new Status("password is ok", 0),
//   isEmpty: new Status("password is empty", 1),
//   tooCommon: new Status("this password is too common", 2),
//   isUserName: new Status("password cannot be username", 3),
//   notInRange: new Status(
//     `password must be within ${passwordMinLength} to ${passwordMaxLength} characters`,
//     5
//   ),
//   missingUpperCase: new Status("must contain uppercase", 6),
//   missingDigit: new Status("must a digit", 7),
//   missingPunctuation: new Status("missing punctuation", 8),
// };

export class PasswordState {
  NotCommon = false;
  IncludesDigit = false;
  IncludeSpecialSymbol = false;
  IncludeUpperCaseSymbol = false;
  IsWithinRange = false;
  DoesNotContainUserName = false;
  IsNotEmpty = false;

  get isOk() {
    return (
      this.NotCommon &&
      this.IncludesDigit &&
      this.IncludeSpecialSymbol &&
      this.IncludeUpperCaseSymbol &&
      this.IsWithinRange &&
      this.DoesNotContainUserName &&
      this.IsNotEmpty
    );
  }
}

const contains = (str, pattern) => new RegExp(pattern).test(str);

export function getPasswordState(password, username) {
  const passwordState = new PasswordState();

  if (!!password) {
    passwordState.IsNotEmpty = true;
  }

  if (!commonPasswords.includes(password)) {
    passwordState.NotCommon = true;
  }

  if (!password.includes(username)) {
    passwordState.DoesNotContainUserName = true;
  }

  if (
    !(
      password.length < passwordMinLength || password.length > passwordMaxLength
    )
  ) {
    passwordState.IsWithinRange = true;
  }

  if (contains(password, "[A-Z]")) {
    passwordState.IncludeUpperCaseSymbol = true;
  }

  if (contains(password, "[0-9]")) {
    passwordState.IncludesDigit = true;
  }

  if (contains(password, `[${punctuation}]`)) {
    passwordState.IncludeSpecialSymbol = true;
  }

  return passwordState;
}
