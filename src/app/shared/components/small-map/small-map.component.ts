import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MarkersService} from '../../services/markers.service';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-small-map',
  templateUrl: './small-map.component.html',
  styleUrls: ['./small-map.component.sass'],
  providers:[MarkersService]
})
export class SmallMapComponent implements OnInit {


  @ViewChild('mapSmall') mapSmallElement: ElementRef;

  mapSmall: google.maps.Map;
  infoWindow:google.maps.InfoWindow = new google.maps.InfoWindow();

  constructor(private markerService:MarkersService) {}

  ngOnInit() {
    const mapPropSmall = {
      center: new google.maps.LatLng(60.074594, 30.353822),
      zoom: 15,
    }
    setTimeout( () => {this.mapSmall = new google.maps.Map(this.mapSmallElement.nativeElement, mapPropSmall)}, 1)
    setTimeout ( () => this.addMarker(this.markerService.markerOffice.options, this.markerService.markerOffice.text, this.infoWindow, this.mapSmall), 1)
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
