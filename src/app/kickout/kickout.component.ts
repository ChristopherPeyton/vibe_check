import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kickout',
  templateUrl: './kickout.component.html',
  styleUrls: ['./kickout.component.css']
})
export class KickoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  restart(){
    this.router.navigate(['12'])
  }
}
