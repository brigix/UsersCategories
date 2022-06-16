export class User {
  name = '';
  surname = '';
  email = '';
  password = '';
  age = '';
  gender = '';
  category = '';
  constructor(props) {
    this.name = props.name;
    this.surname = props.surname;
    this.email = props.email;
    this.password = props.password;
    this.gender = props.gender;
    this.age = props.age;
    this.category = props.category;
  }
}
