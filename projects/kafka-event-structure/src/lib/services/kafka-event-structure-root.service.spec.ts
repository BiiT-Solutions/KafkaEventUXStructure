import { TestBed } from '@angular/core/testing';

import { KafkaEventStructureRootService } from './kafka-event-structure-root.service';

describe('KafkaEventStructureService', () => {
  let service: KafkaEventStructureRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KafkaEventStructureRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
