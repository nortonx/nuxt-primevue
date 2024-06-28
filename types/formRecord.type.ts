import type { CountryType } from "./country.type";
export type FormRecord = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  country: CountryType;
}