import { Injectable, Type } from "@angular/core";

import {StandardService, StandardData} from "./standard.service";

export class CustomData {
  attribute1: string;
  attribute2: string;
  attribute3: string;

  constructor (standardData : StandardData, newAttribute : string) {
    this.attribute1 = standardData.attribute1;
    this.attribute2 = standardData.attribute2;
    this.attribute3 = newAttribute;
  }
}

@Injectable({
  providedIn: "root"
})
export class CustomService {
  constructor(private standardService : StandardService) {}

  getData() : CustomData {
    return new CustomData( this.standardService.getData(), "3" );
  }
}
