import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividualDetailsComponent } from '../individual-details/individual-details.component';
import { IndividualInfo } from '../IndividualInfo';

@Component({
  selector: 'app-upd-indv',
  templateUrl: './upd-indv.component.html',
  styleUrls: ['./upd-indv.component.css']
})
export class UpdIndvComponent implements OnInit {

  id: string;
  indvInfo : IndividualInfo;
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(`id is ${this.id}`)
    this.http.get<IndividualInfo>(`http://localhost:8080/indv/${this.id}`)
    .subscribe(response=>{
      this.indvInfo = response
    })
  }

  submit(){
    this.http.put(`http://localhost:8080/indv/${this.id}`, this.indvInfo).subscribe(response=>
    {
      console.log('update success');
      this.router.navigate(['']);
    }
    );
  }
}
