import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersModel } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Input() users?: UsersModel[];

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  constructor(private usersService: UsersService, private route: Router) {}

  onSubmit() {
    const user = this.signUpForm.value;
    // verify that user doens't exist and password is repeated correctly

    var repeatPassword = true;
    if (user.password != user.repeatPassword) {
      repeatPassword = !repeatPassword;
      console.log(
        "Repeated password don't match",
        user.password,
        user.repeatPassword
      );
    } else if (repeatPassword) {
      this.addUser(user);
    }

    // if (this.users) {
    //   for(let i = 0; i < this.users.length; i++) {
    //     if(this.users[i].email == user.email) {
    //       newuser = !newuser;
    //       console.log(user.email, "exist.", "Please login.");
    //       this.route.navigate(['/login']);
    //       break;
    //     } else
    //     if (user.password != user.repeatPassword) {
    //       console.log("Repeated password don't match", user.password, user.repeatPassword);
    //       break;
    //     }
    //   }
    // }

  }

  retrieveUsers(): void {
    this.usersService.getAll().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e),
    });
  }

  addUser(user: UsersModel[]): void {
    this.usersService.addUser(user).subscribe((response: UsersModel[]) => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }
}
