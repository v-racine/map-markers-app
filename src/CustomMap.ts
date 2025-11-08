import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const element = document.getElementById(divId);
    if (!element) {
      throw new Error(`Map element with id '${divId}' not found.`);
    }

    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
