# KafkaEventStructureLib

This library contains services and data structure to be used with Kafka Proxy 

## Build

Run `npm run build` to build the library. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run build`, go to the dist folder `cd dist/kafka-event-structure-lib` and run `npm publish`.

## Using library in other applications.

The first step once imported this library in your project is to configure service url.

On AppComponent or any other place you consider, you need to set `serverURL` with the root url where server is allocated.

```
constructor (private rootService: RootService) {
  rootService.serverUrl = 'https://www.exemple.com/kafka-proxy'
}
```

Once server is configured, the rest of the services can be used.

```
constructor(private eventService: EventService) {
 [...]
}

[...]

private publishEvent(event: Event<Object>, topic: string): void {
  this.eventService.createEvent(event, topic).subscribe(response => { [...] });
}
```
