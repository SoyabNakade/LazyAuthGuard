import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: any;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))

    })
    // this.load()
    // this.array=JSON.parse(localStorage.getItem('login') || '[]');

  }




  submit(data: any) {
    // console.log(data);

    if (data.email == "admin@gmail.com" && data.password == "admin") {
      localStorage.setItem("email", "admin@gmail.com");
      localStorage.setItem("usertype", "Admin");
      this.router.navigate(['/admin']);
    }
    else
      if (data.email == "users@gmail.com" && data.password == "admin") {
        localStorage.setItem("email", "users@gmail.com");
        localStorage.setItem("usertype", "Users");
        this.router.navigate(['/users']);
      }
      else{
        Swal.fire('Incorrect Password',
          'Please Re Enter Your Password',
          'error')
      }
    }
   

  }






