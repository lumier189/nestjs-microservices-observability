export interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IDeleteUserDto {
  id: string;
}
