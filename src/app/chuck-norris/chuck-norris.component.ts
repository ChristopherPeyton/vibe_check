import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  no() {
    this.router.navigate(['kickout'])
  }
  continue() {
    this.router.navigate(['congrats'])
  }

}
