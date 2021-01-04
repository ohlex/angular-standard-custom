import { Injectable, Type } from "@angular/core";

export interface StandardData {
  attribute1: string;
  attribute2: string;
}

@Injectable({
  providedIn: "root"
})
export class StandardService {
  constructor() {}

  getData() : StandardData {
    const data = { attribute1: "1", attribute2: "2" };
    return data;
  }
}
