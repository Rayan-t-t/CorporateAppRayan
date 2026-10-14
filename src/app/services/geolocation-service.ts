import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
    providedIn: 'root'
})
export class GeolocationService {
    readonly oficinaLat = 40.4452;
    readonly oficinaLon = -3.6115;

    async getCurrentPosition() {
       if (Capacitor.isNativePlatform()) {
           const { location } = await Geolocation.checkPermissions();
           if (location !== 'granted') {
               const permission = await Geolocation.requestPermissions();
               if (permission.location !== 'granted') {
                   throw new Error('Se necesita permiso para acceder a la ubicación.');
               }
           }
       }

       const data = await Geolocation.getCurrentPosition();
       return data.coords;
   }

   calcularDistancia(
       lat1: number,
       lon1: number,
       lat2: number,
       lon2: number
   ): number {
       const R = 6371;
       const dLat = (lat2 - lat1) * Math.PI / 180;
       const dLon = (lon2 - lon1) * Math.PI / 180;
       const a =
           Math.sin(dLat / 2) ** 2 +
           Math.cos(lat1 * Math.PI / 180) *
           Math.cos(lat2 * Math.PI / 180) *
           Math.sin(dLon / 2) ** 2;
       const c = 2 * Math.atan2(
           Math.sqrt(a),
           Math.sqrt(1 - a)
       );
       return R * c;
   }
}