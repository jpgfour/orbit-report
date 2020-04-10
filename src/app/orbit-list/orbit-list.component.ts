import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[]; //searchTerm: string = '';
  
  constructor() { }

  ngOnInit() {
  }

  flipFlop: boolean = true;

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
  }

  stripe(satellite): string {
    
    if(satellite.shouldShowWarning()){
      this.flipFlop = !this.flipFlop;
      return "#f72c2c";
      
    }
    else if(this.flipFlop) {
      this.flipFlop = !this.flipFlop;
      return "aqua";
  
    }else{
      this.flipFlop = !this.flipFlop;
      return "pink";
      
    }
    this.flipFlop = !this.flipFlop;
  }

}
