import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vip } from './models/vip';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public http:HttpClient) {
   }

   downloadVips() {
     return this.http.get<any>('http://localhost:3000/api/vips')
   }
}

