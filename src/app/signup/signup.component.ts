import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    firstname: new FormControl('mamadou'),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    verifypassword: new FormControl('')
  })
   
  onSubmit() {
    console.log(this.signUpForm.value);
  }
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
