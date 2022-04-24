import {TurnState, WinState} from "./states.enum";

export type CMPin = 'black' | 'white' | 'blank';

export interface CMColor {
  selectable: boolean;
  selectedColor: string;
}

export interface CodeMasterTurn {
  pins: CMPin[];
  colors: CMColor[]
  turnState: TurnState;
  isWinningTurn: boolean;
  loading: boolean;
}

export interface CodeMasterSettings {
  colorOptions: string[];
  numberOfColors: number;
  numberOfTurns: number;
}

export interface CodeMasterGame {
  turns: CodeMasterTurn[];
  winCombination: string[];
  winState: WinState;
  settings: CodeMasterSettings;
}

export function createDefaultCMSettings() {
  return {
    colorOptions: ['red', 'orange', 'green', 'forest', 'cyan', 'blue', 'purple', 'blank'],
    numberOfColors: 4,
    numberOfTurns: 10,
  } as CodeMasterSettings;
}

export function createCodeMasterTurn(settings: CodeMasterSettings): CodeMasterTurn {
  return {
    pins: createEmptyArray(settings.numberOfColors).map(() => 'blank'),
    colors: createEmptyArray(settings.numberOfColors).map(() => {
      return {selectable: false, selectedColor: 'blank'}
    }),
    turnState: TurnState.NotStarted,
    isWinningTurn: false,
    loading: false
  } as CodeMasterTurn;
}

export function createCodeMasterGame(settings?: CodeMasterSettings): CodeMasterGame {
  const gameSettings = !!settings ? settings : createDefaultCMSettings();
  return {
    settings: gameSettings,
    turns: createEmptyArray(gameSettings.numberOfTurns).map(() => createCodeMasterTurn(gameSettings)),
    winCombination: createWinCombination(gameSettings),
    winState: WinState.InProgress
  } as CodeMasterGame
}

// UTILITY FUNCTIONS
export function createEmptyArray(length: number): number[] {
  return Array.from(Array(length).keys())
}

export function createWinCombination(settings: CodeMasterSettings): string[] {
  // TODO: Account for other settings.
  // Create an empty array whose length is determined by the number of available colors
  return createEmptyArray(settings.numberOfColors).map(() => {
    // Use the colorOptions array to fetch a random color as there may be more colors than there are choices
    const randomColorIdx = Math.floor(Math.random() * settings.colorOptions.length)
    return settings.colorOptions[randomColorIdx]
  })
}
