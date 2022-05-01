import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, filter, map, Observable, of, tap} from "rxjs";
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
      this.hangmanGameSrc.next(createHangmanGame(word, settings))
    })
  }

  private selectWord(length?: number) {
    const url = 'assets/mocks/words.mock.json';
    return this.http.get<{ words: string[] }>(url).pipe(
      map(res => {
        const randomIdx = Math.floor(Math.random() * res.words.length);
        return [res.words[randomIdx]].map(word => word.toUpperCase()).join();
      }),
      catchError(err => {
        console.log(err);
        return of('CROCKERY')
      })
    )
  }
}
