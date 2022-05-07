export interface GameMenuData {
  game: string;
  settings: boolean;
  singlePlayer: boolean;
  multiplayerLocal: boolean;
  multiPlayerOnline: boolean;
}

export enum PlayerMode {
  single = 'Single player',
  multiL = 'Multiplayer (local)',
  multiO = 'Multiplayer (online)'
}
