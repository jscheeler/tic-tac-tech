export class Team {
  name: string;
  matches: number;
  won: number;

  constructor(name) {
    this.name = name || null;
    this.won = 0;
    this.matches = 0;
  }
}
