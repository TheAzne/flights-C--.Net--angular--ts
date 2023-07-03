import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../api/services';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})

export class SearchFlightsComponent {
  searchResult: FlightRm[] =[]

  constructor(private flightService: FlightService) {
  }

  ngOnInit():void{
  }

  search(){
    this.flightService.searchFlight({})
    .subscribe(r=> this.searchResult = r)
  }
}


