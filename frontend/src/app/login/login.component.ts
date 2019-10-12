import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'manoj';
  password = 'manoj';
  errormessage = 'username and password incorrect';
  setVisible = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  validate() {
    if (this.username === 'abc' && this.password === 'abc') {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.setVisible = true;
    }
  }

}
