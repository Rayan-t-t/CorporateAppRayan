import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSegment,IonSegmentButton]
})
export class NosotrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
