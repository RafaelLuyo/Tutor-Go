export class SingIn{
  id: number;
  username: string;
  password: string;
  token: string;
  constructor(
    username:string,
    password: string,
    id: number
  ) {
    this.username = username;
    this.password = password;
    this.token = "";
    this.id = id;
  }
}
