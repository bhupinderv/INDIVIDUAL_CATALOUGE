import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualInfo } from '../IndividualInfo';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.css']
})
export class IndividualDetailsComponent implements OnInit {
  headers = ["ID", "NAME", "GENDER", "STATE", "MANAGE"];
  indvInfo : IndividualInfo[];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.refreshIndvList();
  }

  private refreshIndvList() {
    this.http.get<IndividualInfo[]>("http://localhost:8080/indv").subscribe(
      response => {
        this.indvInfo = response;
      }
    );
  }

  deleteIndv(id){
    this.http.delete(`http://localhost:8080/indv/${id}`).subscribe(response=>
    {
      console.log('deleted');
      this.refreshIndvList();
    }
    );
    
  }

  updateIndv(id){
    this.router.navigate(['updIndv',id])
    this.refreshIndvList();
  }

  addIndv(){
    this.router.navigate(['addIndv'])
    this.refreshIndvList();
  }
}
