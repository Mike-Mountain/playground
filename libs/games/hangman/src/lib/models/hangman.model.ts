import {WinState} from "@playground/games/games-shared";

export interface HangmanSettings {
  wordLength: number;
}

export interface Letter {
  isSelected: boolean;
  value: string;
  isCorrect?: boolean;
}

export interface HangmanLetter {
  value: string;
  isCorrect: boolean;
  canShow: boolean;
}

export interface HangmanGame {
  selectedWord: string;
  correctLetters: string[];
  incorrectLetters: string[];
  letters: Letter[];
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
    letters: letters.map(letter => {
      return {value: letter, isCorrect: undefined, isSelected: false}
    }),
    correctLetters: [],
    incorrectLetters: [],
    winState: WinState.InProgress,
    settings: createHangManSettings(settings)
  } as HangmanGame
}

export const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',

]
