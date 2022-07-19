import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {
  arr = [
    {
      role: 'COMMANDER',
      name:'Douglas Hurley',
      profile: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      src:'assets/img/Douglas.png',
    },
    {
      role: 'Mission Specialist',
      name:'MARK SHUTTLEWORTH',
      profile: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      src:'assets/img/Mark.png',
    },
    {
      role: 'PILOT',
      name: 'Victor',
      profile: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      src:'assets/img/Victor.png',
    },
    {
      role: 'Flight Engineer',
      name:'Anousheh Ansari',
      profile: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      src: 'assets/img/Anoushen.png',
    }
  ];
  selectedItem = this.arr[0]

  constructor() { }

  ngOnInit(): void {
  }

  selected(index: number){
    this.selectedItem = this.arr[index]
  }
}
