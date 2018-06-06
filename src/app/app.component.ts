import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTeamsDialogComponent } from './add-teams-dialog/add-teams-dialog.component';
import { Team } from './teams';
import { ChooseTeamsDialogComponent } from './choose-teams-dialog/choose-teams-dialog.component';
import { SecretSquareDialogComponent } from './secret-square-dialog/secret-square-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  teams = [
    new Team('Team 1'),
    new Team('Team 2'),
    new Team('Team 3'),
    new Team('Team 4')
  ];
  games = 1;
  currentTeams: number[] = [];
  activeTeam: string;
  winningSequences = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  squares = [
    {
      celebrity: 'Carlos',
      image: '/assets/carlos.jpg',
      won: null,
      secret: 3
    },
    {
      celebrity: 'Ivan',
      image: '/assets/ivan.jpg',
      won: null,
      secret: 7
    },
    {
      celebrity: 'Ben',
      image: '/assets/ben.jpg',
      won: null,
      secret: 4
    },
    {
      celebrity: 'Warren',
      image: '/assets/warren.jpg',
      won: null,
      secret: 1
    },
    {
      celebrity: 'Travis / Kristy',
      image: '/assets/kristy-travis.jpg',
      won: null,
      secret: 9
    },
    {
      celebrity: 'Christophe',
      image: '/assets/christophe.png',
      won: null,
      secret: 5
    },
    {
      celebrity: 'Dave',
      image: '/assets/david.jpg',
      won: null,
      secret: 8
    },
    {
      celebrity: 'Bill',
      image: '/assets/bill.jpg',
      won: null,
      secret: 6
    },
    {
      celebrity: 'Pat',
      image: '/assets/pat.jpg',
      won: null,
      secret: 2
    }
  ];

  constructor(private matDialog: MatDialog) {
    // ask for team names
    // const addDialog = matDialog.open(AddTeamsDialogComponent, {
    //   width: '25%'
    // });

    // addDialog.afterClosed().subscribe((teams) => {
    //   this.createTeams(teams);
    // });
  }

  createTeams(teams) {
    teams = [];
    teams.forEach((teamName) => {
      this.teams.push(new Team(teamName));
    });
  }

  setSquare(i) {
    if (this.squares[i].won === null) {
      this.squares[i].won = this.activeTeam;

      if (this.squares[i].secret === this.games) {
        this.showSecretSquareDialog();
      }
    }
  }

  setActiveTeam(team) {
    this.activeTeam = team;
  }

  setCurrentTeams(teams) {
    this.currentTeams = teams;
    this.currentTeams.forEach((i) => {
      this.teams[i].won = 0;
    });
  }

  showSecretSquareDialog() {
    const secretDialog = this.matDialog.open(SecretSquareDialogComponent, {
      width: '25%'
    });
  }

  newMatch() {
    const chooseDialog = this.matDialog.open(ChooseTeamsDialogComponent, {
      width: '25%',
      data: {
        teams: this.teams
      }
    });

    chooseDialog.afterClosed().subscribe((teams) => {
      this.setCurrentTeams(teams);
    });
  }

  newGame() {
    this.games = this.games + 1;
    this.squares.map(square => square.won = null);
  }

  teamWon(teamIndex) {
    this.teams[teamIndex].won = this.teams[teamIndex].won + 1;
    this.newGame();

    if (this.teams[teamIndex].won >= 2) {
      this.teams[teamIndex].matches = this.teams[teamIndex].matches + 1;
    }
  }
}
