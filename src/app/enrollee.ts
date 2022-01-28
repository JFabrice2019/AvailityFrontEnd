export class Enrollee {
  firstname!: string;
  lastname!: string;
  npiNumber!: string;
  phonenumber!: string;
  email!: string;
  line1!: string;
  city!: string;
  state!: string;
  zipcode!: string;
  constructor(
    firstname: string,
    lastname: string,
    npiNumber: string,
    phonenumber: string,
    email: string,
    line1: string,
    city: string,
    state: string,
    zipcode: string
  ) {}
}
