enum AgeEnum {
  adult = 'adult',
  child = 'child',
  infant = 'infant'
}

export interface IFormInput {
  firstName: string;
  email: string;
  age: AgeEnum;
  address: string;
}

export interface Person extends IFormInput {}
