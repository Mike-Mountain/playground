import {WinState} from "@playground/games/games-shared";

export interface HangmanSettings {
  wordLength: number;
}

export interface HangmanGame {
  selectedWord: string;
  winState: string;
  settings: HangmanSettings;
}

export function createHangManSettings(settings?: HangmanSettings) {
  return {
    wordLength: settings?.wordLength || '5'
  } as HangmanSettings
}

export function createHangmanGame(word: string, settings?: HangmanSettings) {
  return {
    selectedWord: word,
    winState: WinState.InProgress,
    settings: createHangManSettings(settings)
  } as HangmanGame
}
