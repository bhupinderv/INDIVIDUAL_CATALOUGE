import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualInfo } from '../IndividualInfo';

@Component({
  selector: 'app-add-indv',
  templateUrl: './add-indv.component.html',
  styleUrls: ['./add-indv.component.css']
})
export class AddIndvComponent implements OnInit {

  indvInfo: IndividualInfo;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.indvInfo = new IndividualInfo('','','','');
  }

  submit(){
    console.log(this.indvInfo);
    this.http.post("http://localhost:8080/indv", this.indvInfo).subscribe(response=>
    {
      console.log('addition success');
      this.router.navigate(['']);
    });
    
  }

}
