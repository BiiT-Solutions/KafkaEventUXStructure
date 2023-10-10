import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  AuthCalls,
  AuthService as AuthenticationService,
  CreateUserRequest,
  LoginRequest,
  PasswordRequest,
  TokenRenewListener,
  User
} from "authorization-services-lib";
import {RootService} from "./root.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthCalls {
  private service: AuthenticationService;

  constructor(rootService: RootService, private httpClient: HttpClient) {
    this.service = new AuthenticationService(rootService.serverUrl?.toString, httpClient);}
  add(user: User): Observable<User> {
    return this.service.add(user);
  }

  autoRenewToken(token: string, expiration: number, tokenRenewListener: TokenRenewListener, tolerance: number): void {
    this.service.autoRenewToken(token, expiration, tokenRenewListener, tolerance);
  }

  cancelAutoRenew(): void {
    this.service.cancelAutoRenew();
  }

  changePassword(request: PasswordRequest): Observable<void> {
    return this.service.changePassword(request);
  }

  deleteByUserName(username: string): Observable<void> {
    return this.service.deleteByUserName(username);
  }

  getAll(): Observable<User[]> {
    return this.service.getAll();
  }

  getRoles(): Observable<string[]> {
    return this.service.getRoles();
  }

  login(request: LoginRequest): Observable<HttpResponse<User>> {
    return this.service.login(request);
  }

  update(request: CreateUserRequest): Observable<User> {
    return this.service.update(request);
  }

}
