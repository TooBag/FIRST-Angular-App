import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
 
  constructor() { }

  public static loginWithCredentials(username: string, password: string): boolean {
    if(username == 'galden' && password == '123456')
      return true;
    return false;
  }
}
