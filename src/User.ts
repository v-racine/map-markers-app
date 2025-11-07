import { faker } from "@faker-js/faker";

<<<<<<< HEAD
class User {
=======
export class User {
>>>>>>> b4cd273 (fix: ignore large files)
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
