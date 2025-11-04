import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService as AuthenticationService} from "@biit-solutions/authorization-services";
import {KafkaEventStructureRootService} from "./kafka-event-structure-root.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: KafkaEventStructureRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }
}
