export interface PersonAddress {
  street: string;
  city: string;
  state: string;
  dist: string;
  pin: string;
  country: string;
}

export interface PersonDetails {
  fname: string;
  lname: string;
  email: string;
  dob: string;
  contact: string;
  address: PersonAddress;
}
