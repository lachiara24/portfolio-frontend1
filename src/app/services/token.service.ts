import { Injectable } from '@angular/core';

const TOKEN_KEY= 'accessToken';
const USERNAME_KEY= 'userName';
const AUTHORITIES_KEY= 'authorities';
const ID_KEY= 'id';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    console.log(token);
  }

  public getToken():any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUsername():any {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setPersonaId(personaId: any): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, personaId);
  }

  public getPersonaId():any {
    return window.sessionStorage.getItem(ID_KEY);
  }

  public setAuthorities(authorities:string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }


}
