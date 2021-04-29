import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClientModule) { }

  getIndividualInformation(){
    //this.http.get(`http://localhost:8080/indv`).
  }
}
