import { Injectable, Type } from '@angular/core';

@Injectable()
export class BackendService {
  constructor() {}

  getData() {
    const data = {'attribute1': '1', 'attribute2': '2'};
    return data;
  }
}