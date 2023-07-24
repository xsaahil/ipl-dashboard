export interface IMatch {
  city: string;
  date: string;
  id: number;
  matchWinner: string;
  playerOfMatch: string | null;
  result: string | null;
  resultMargin: string | null;
  team1: string;
  team2: string;
  tossDecision: string;
  tossWinner: string;
  umpire1: string | null;
  umpire2: string | null;
  venue: string;
  wonBy: string;
}

export interface ITeam {
  id: number;
  matches: Array<IMatch>; // Replace 'any' with the specific type of 'matches' if possible
  teamName: string;
  totalMatches: number;
  totalWins: number;
}
