import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Location } from 'src/app/models/banks';

import * as L from 'leaflet';

@Component({
  selector: 'alb-leaflet',
  templateUrl: './leaflet.component.html',
  styles: [
  ]
})
export class LeafletComponent implements OnChanges {

  @Input() coords: number[] | null = [43, 43];
  @Input() address: string = '';
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLDivElement>;
  map!: L.Map;
  marker!: L.Marker;
  zoom: number = 10;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['coords'] && changes['coords'].firstChange) {
      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map = L.map(this.host.nativeElement).setView(coords, this.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      this.marker = L.marker(coords)
        .addTo(this.map)
        .bindPopup(this.address)
        .openPopup();
      this.marker.setLatLng(coords);
    }
    if (changes['coords'] && !changes['coords'].firstChange) {
      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map.setView(coords);
      this.marker.bindPopup(this.address);
      this.marker.setLatLng(coords);
    }

  }

}
