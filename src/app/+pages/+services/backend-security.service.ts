import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityService extends BackendService{
  signin(username:string,password:string){
    return this.http.post(this.securityAPI+'signin',{username:username,password:password})
  }

}
