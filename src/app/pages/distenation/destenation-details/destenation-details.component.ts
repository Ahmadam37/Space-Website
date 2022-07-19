import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destenation-details',
  templateUrl: './destenation-details.component.html',
  styleUrls: ['./destenation-details.component.css']
})
export class DestenationDetailsComponent implements OnInit {

  arr = [
    {
      name:'MOON',
      description:  'See our planet as you’ve never seen it before. A perfect relaxing tripaway to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites',
      src:'assets/img/Moon.png',
      AvgDistance: 384400,
      Distance: 'KM',
      TravileTime:'3 DAYS'
    },
    {
      name:'MARS',
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      src:'assets/img/mars.png',
      AvgDistance: 225,
      Distance: 'MIL. KM',
      TravileTime:'9 MONTHS'
    },
    {
      name: 'EUROPA',
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      src:'assets/img/europa.png',
      AvgDistance: 628,
      Distance: 'MIL. KM',
      TravileTime:'3 YEARS'
    },
    {
      name:'TITAN',
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      src: 'assets/img/titan.png',
      AvgDistance: 1.6,
      Distance: 'BIL. KM',
      TravileTime:'7 YEARS'

    }
  ];
  selectedItem = this.arr[0]
  constructor() { }

  ngOnInit(): void {
  }

  selected(index:number){
    this.selectedItem = this.arr[index]
  }

}
