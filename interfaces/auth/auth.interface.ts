export interface IUserLoginRequestBody {
  email: string;
  password: string;
}

export interface IUserLoginResponseBody {
  token: string;
}

export interface IUserRegisterRequestBody {
  email: string;
  fullname: string;
  password: string;
  confirmPassword: string;
}

export interface IUserData {
  name: string;
  email: string;
}
