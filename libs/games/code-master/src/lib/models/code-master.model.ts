import {createEmptyArray, TurnState, WinState} from "@playground/games/games-shared";

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

export function createCMSettings(settings?: Partial<CodeMasterSettings>) {
  return {
    colorOptions: settings?.colorOptions || ['red', 'orange', 'green', 'forest', 'cyan', 'blue', 'purple', 'blank'],
    numberOfColors: settings?.numberOfColors || 4,
    numberOfTurns: settings?.numberOfTurns || 10,
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

export function createCodeMasterGame(settings?: CodeMasterSettings, selectedCombo?: string[]): CodeMasterGame {
  const gameSettings = !!settings ? settings : createCMSettings();
  const winCombo = !!selectedCombo ? selectedCombo : createWinCombination(gameSettings);
  return {
    settings: gameSettings,
    turns: createEmptyArray(gameSettings.numberOfTurns).map(() => createCodeMasterTurn(gameSettings)),
    winCombination: winCombo,
    winState: WinState.InProgress
  } as CodeMasterGame
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
