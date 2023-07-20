import { Injectable } from '@angular/core';
import {RootService} from "./root.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthorizedUser} from "../models/authorized-user";
import {
  AuthService as AuthenticationService,
  AuthCalls,
  CreateUserRequest,
  LoginRequest,
  PasswordRequest,
  User,
  TokenRenewListener
} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthCalls{
  add(user: User): Observable<User> {
    return undefined;
  }

  autoRenewToken(token: string, expiration: number, tokenRenewListener: TokenRenewListener, tolerance: number): void {
  }

  cancelAutoRenew(): void {
  }

  changePassword(request: PasswordRequest): Observable<void> {
    return undefined;
  }

  deleteByUserName(username: string): Observable<void> {
    return undefined;
  }

  getAll(): Observable<User[]> {
    return undefined;
  }

  getRoles(): Observable<string[]> {
    return undefined;
  }

  login(request: LoginRequest): Observable<HttpResponse<User>> {
    return undefined;
  }

  update(request: CreateUserRequest): Observable<User> {
    return undefined;
  }

}
