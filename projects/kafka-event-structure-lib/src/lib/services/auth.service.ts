import { Injectable } from '@angular/core';
import {RootService} from "./root.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Event} from "../models/event";
import {Observable} from "rxjs";
import {AuthorizedUser} from "../models/authorized-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ROOT_PATH: string = '/auth';
  private static readonly FIRST_TIMER_TIME: number = 1000;
  private interval: number;
  constructor(private rootService: RootService, private httpClient: HttpClient) { }
  public autoRenewToken(token: string, callback: (token: string) => void): void {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setIntervalRenew(token, AuthService.FIRST_TIMER_TIME, callback);

  }

  private setIntervalRenew(token: string, timeout: number, callback: (token: string) => void): void {
    this.interval = setInterval((): void => {
      this.renew(token).subscribe(
        (res: HttpResponse<AuthorizedUser>) => {
          const authToken: string = res.headers.get('authorization');
          let expiration: number = Number(res.headers.get('expires'));
          if (!authToken || !expiration) {
            throw new Error('Server returned invalid response');
          }
          if (isNaN(expiration)) {
            throw new Error('Server returned invalid expiration time');
          }
          expiration = expiration - (new Date()).getTime();
          console.log(`Next token expiration: ${expiration}`);
          callback(authToken);
          this.setIntervalRenew(authToken, expiration, callback);
        }
      )
    }, timeout)
  }
  public renew(token ?: string): Observable<HttpResponse<AuthorizedUser>> {
    return token ?
      this.httpClient.get<HttpResponse<AuthorizedUser>>(
        `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`, {headers: {'Authorization': 'Bearer ' + token}})
      : this.httpClient.get<HttpResponse<AuthorizedUser>>(
      `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`);
  }
}
