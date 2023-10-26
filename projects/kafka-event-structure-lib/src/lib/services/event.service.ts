import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../models/event";
import {Observable} from "rxjs";
import {KafkaEventStructureRootService} from "./kafka-event-structure-root.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private static readonly ROOT_PATH: string = '/events'
  private static readonly TOPICS_PATH: string = '/topics'
  private static readonly TOPICS_ALL_PATH: string = '/all'
  private static readonly LIST_PATH: string = '/list'
  private static readonly STARTING_TIME_PATH: string = '/startingTime';
  private static readonly DURATION_PATH: string = '/duration'


  constructor(private rootService: KafkaEventStructureRootService, private httpClient: HttpClient) { }

  public createEvent<T>(event: Event<T>, topic?:string): Observable<Event<T>> {
    return this.httpClient.post<Event<T>>(
      `${this.rootService.serverUrl}${EventService.ROOT_PATH}${topic? EventService.TOPICS_PATH + '/' + topic : ''}`,
      event);
  }

  public createEvents<T>(events: Event<T>[], topic?:string): Observable<Event<T>[]> {
    return this.httpClient.post<Event<T>[]>(
      `${this.rootService.serverUrl}${EventService.ROOT_PATH}${topic? EventService.TOPICS_PATH
        + EventService.TOPICS_ALL_PATH + topic : EventService.LIST_PATH}`,
      events);
  }

  public getOldEvents<T>(topics: string[], startingTime: Date, duration: number): Observable<Event<T>[]> {
    return this.httpClient.get<Event<T>[]>(
      `${this.rootService.serverUrl}${EventService.ROOT_PATH}${EventService.TOPICS_PATH}/${topics}/${EventService.STARTING_TIME_PATH}/${startingTime}
      ${EventService.DURATION_PATH}/${duration}`)
  }
}
