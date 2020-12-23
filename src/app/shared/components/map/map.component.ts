import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { } from "googlemaps";
import {MarkersService} from '../../services/markers.service';
import {from, of} from 'rxjs';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
  providers:[MarkersService]
})
export class MapComponent implements OnInit {

  @ViewChild('mapBig') mapBigElement: ElementRef;
  mapBig: google.maps.Map;
  infoWindow:google.maps.InfoWindow = new google.maps.InfoWindow();

  constructor(private markerService:MarkersService) {}

  ngOnInit() {
    const mapPropBig = {
      center: new google.maps.LatLng(59.867862, 30.362511),
      zoom: 11,
    }

    setTimeout( () => {this.mapBig = new google.maps.Map(this.mapBigElement.nativeElement, mapPropBig)}, 1)
    setTimeout( () => {from(this.markerService.markers)
      .pipe(tap( val => this.addMarker(val.options, val.text, this.infoWindow, this.mapBig)))
      .subscribe()},1)
  }

  addMarker(coordinate, text, infoWindow, map) {
    var marker = new google.maps.Marker({
      position: coordinate,
      map: map,
    });
    marker.addListener('click', () => {
      infoWindow.setOptions({
        content: text,
        position: coordinate
      });
      infoWindow.open(map, marker)
    })
    return marker;
  }

}







