import { Injectable, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface StandardData {
  attribute1: string;
  attribute2: string;
}

@Injectable({
  providedIn: "root"
})
export class StandardService {
  constructor(private http:HttpClient) {}

  getData() : StandardData {
    const data = { attribute1: "1", attribute2: "2" };

    return data;
  }

  getObservable() {
    const obs = this.http.get("https://httpbin.org/get");
    return obs;
  }
}
