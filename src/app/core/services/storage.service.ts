import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // private currentUserSubject: BehaviorSubject<any>;
  public currentUser: any
  constructor() {
    // this.currentUserSubject = new BehaviorSubject<any>(this.getUser());
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  logout(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(JSON.stringify(user)));
    // this.currentUserSubject.next( JSON.stringify(JSON.stringify(user)));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
