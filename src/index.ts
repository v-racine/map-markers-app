/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const mapDiv = document.getElementById("map");
if (mapDiv) {
  new google.maps.Map(mapDiv, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });
} else {
  console.error("Map element not found.");
}
