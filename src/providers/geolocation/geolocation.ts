import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeolocationService {

    private readonly API_KEY_GOOGLE_MAPS: string = 'AIzaSyD4YL8ueZhbQ_z7enaE-BBiQXDxbbqgO7c';
    private readonly API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=@latitude,@longitude&key=@key';

    constructor(private geolocation: Geolocation, private http: HttpClient) {
    }

    getNearLocation(latidude: number, longitude: number): any {
        let url = this.API_URL;
        url = url.replace('@latitude', latidude.toString());
        url = url.replace('@longitude', longitude.toString());
        url = url.replace('@key', this.API_KEY_GOOGLE_MAPS);

        const locations: Array<string> = [];

        this.http.get(url).map((res: any[]) => {
            res.forEach((val: any, index: number) => {
                locations.push(val['formatted_address']);
            });
        });
        return locations;
    }
}