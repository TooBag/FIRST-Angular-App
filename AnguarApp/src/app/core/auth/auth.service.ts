import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
 
  constructor() { }

  public static loginWithCredentials(username: string, password: string): boolean {
    if(username == 'istoobag' && password == '123456')
      return true;
    return false;
  }
}
