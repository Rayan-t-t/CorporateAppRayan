import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation-service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle]
})
export class NosotrosPage implements OnInit {
  distancia = signal<number | null>(null);
  errorUbicacion = signal<string | null>(null);

  constructor(private geolocationService: GeolocationService) { }

  async ngOnInit() {
    try {
      const position = await this.geolocationService.getCurrentPosition();
      this.distancia.set(this.geolocationService.calcularDistancia(
        position.latitude,
        position.longitude,
        this.geolocationService.oficinaLat,
        this.geolocationService.oficinaLon
      ));
    } catch (error) {
      this.errorUbicacion.set(error instanceof Error
        ? error.message
        : 'No se pudo obtener la ubicación del dispositivo.');
    }
  }
}
