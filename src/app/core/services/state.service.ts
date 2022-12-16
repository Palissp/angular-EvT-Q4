import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  /**public playerSelect$ = new BehaviorSubject<Player>({} as Player);
  public playerList$ = new BehaviorSubject<Player[]>([]);
  public playerListAPI$ = new BehaviorSubject<Player[]>([]);

  constructor() {}

  get playerSelect() {
    return this.playerSelect$.getValue();
  }

  setPlayerSelect(value: Player) {
    this.playerSelect$.next(value);
  }

  get playerList() {
    return this.playerList$.getValue();
  }

  setPlayerList(value: Player[]) {
    this.playerList$.next(value);
  }

  get playerListAPI() {
    return this.playerListAPI$.getValue();
  }

  setPlayerListAPI(value: Player[]) {
    this.playerListAPI$.next(value);
  }*/
}
