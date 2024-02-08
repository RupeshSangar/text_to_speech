export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  username: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo?: {};
  };
  company: {
    name: string;
    bs?: string;
    catchPhrase?: string;
  };
}
