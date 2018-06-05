import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  teams = [];
  currentTeams = [];
  activeTeam: string;
  squares = [
    {
      celebrity: 'Carlos',
      image: '/assets/carlos.jpg',
      won: null
    },
    {
      celebrity: 'Ivan',
      image: '/assets/ivan.jpg',
      won: null
    },
    {
      celebrity: 'Ben',
      image: '/assets/ben.jpg',
      won: null
    },
    {
      celebrity: 'Warren',
      image: '/assets/warren.jpg',
      won: null
    },
    {
      celebrity: 'Travis / Kristy',
      image: '/assets/kristy-travis.jpg',
      won: null
    },
    {
      celebrity: 'Christophe',
      image: '/assets/christophe.png',
      won: null
    },
    {
      celebrity: 'Dave',
      image: '/assets/david.jpg',
      won: null
    },
    {
      celebrity: 'Bill',
      image: '/assets/bill.jpg',
      won: null
    },
    {
      celebrity: 'Pat',
      image: '/assets/pat.jpg',
      won: null
    }
  ];

  constructor() {}

  setSquare(i) {
    this.squares[i].won = this.activeTeam;
  }

  setActiveTeam(team) {
    this.activeTeam = team;
  }
}
