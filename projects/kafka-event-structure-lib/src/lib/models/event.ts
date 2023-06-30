export class Event<T>{
  createdAt: Date;
  createdBy: string;
  id: string;
  to: string;
  replying: string;
  replyTo: string;
  sessionId: string;
  messageId: string;
  correlationId: string;
  subject: string;
  contentType: string;
  payload: T;
  // Angular transform Maps into a empty object. We need to set it as an object and transform map into it.
  private customProperties: { [key: string]: string; };

  set customPropertiesMap(value: Map<string, string>) {
    this.customProperties = {};
    value.forEach((value: string, key: string): void => {
      this.customProperties[key] = value;
    })
  }

  public static copy<T>(from: Event<T>, to: Event<T>): void {
    to.createdAt = from.createdAt ? new Date(from.createdAt) : null;
    to.createdBy = from.createdBy;
    to.id = from.id;
    to.to = from.to;
    to.replying = from.replying;
    to.replyTo = from.replyTo;
    to.sessionId = from.sessionId;
    to.messageId = from.messageId;
    to.correlationId = from.correlationId;
    to.subject = from.subject;
    to.contentType = from.contentType;
    to.payload = from.payload;
    to.customProperties = from.customProperties;
  }
}
