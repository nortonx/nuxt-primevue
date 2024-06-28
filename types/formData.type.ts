import type { CountryType } from "./country.type"
export type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  country: CountryType
}