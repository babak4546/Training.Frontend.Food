import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  securityAPI:string='http://localhost:4567/';
  constructor(public http:HttpClient) {
    
   }
}
 