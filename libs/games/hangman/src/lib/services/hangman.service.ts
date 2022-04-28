import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, map, Observable, tap} from "rxjs";
import {createHangmanGame, HangmanGame, HangmanSettings} from "@playground/hangman/entry/models/hangman.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  private hangmanGameSrc = new BehaviorSubject<HangmanGame>({} as HangmanGame);

  constructor(private http: HttpClient) {
    this.createHangmanGameWithSettings();
  }

  public select(): Observable<HangmanGame> {
    return this.hangmanGameSrc.asObservable();
  }

  public createHangmanGameWithSettings(settings?: HangmanSettings) {
    this.selectWord(settings?.wordLength).subscribe(word => {
      console.log(word);
      this.hangmanGameSrc.next(createHangmanGame(word, settings))
    })
  }

  private selectWord(length = 5) {
    const url = 'http://localhost:3000/words';
    return this.http.get<string[]>(url).pipe(map(words => {
      const wordsOfLength = words.filter(word => [...word].length === length)[0]
      const randomIdx = Math.floor(Math.random() * wordsOfLength.length - 1);
      console.log(wordsOfLength[randomIdx]);
      return wordsOfLength[randomIdx]
    }))
  }
}
