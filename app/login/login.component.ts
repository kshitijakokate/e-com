import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  Lognin(namevalue, passwordvalue){
    if (namevalue=="admin" && passwordvalue=="admin123")
    {
      console.log (namevalue, passwordvalue)
      this.router.navigate(['admin']);
    }
    
    else if (namevalue=="user" && passwordvalue=="user123")
    {
      console.log (namevalue, passwordvalue);
      this.router.navigate(['user']);
    }
    else if (!(namevalue=="admin" || namevalue=="user"))
    {
      alert ("Please specify admin or user")
    }else if (namevalue=="user" && !(passwordvalue=="user123"))
    {
      alert ("Incorrect Password")
    }else if (namevalue=="admin" && !(passwordvalue=="admin123"))
    {
      alert ("Incorrect Password")
    }

  }

  ngOnInit() {
  }

}
