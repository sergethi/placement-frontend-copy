import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersModel } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() users?: UsersModel[];

  logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private usersService: UsersService, private route: Router) {}

  onSubmit() {
    const user = this.logInForm.value;
    this.logUser(user);
    // if (this.users) {
    //   for(let i = 0; i < this.users.length; i++) {
    //     if(this.users[i].email == user.email) {
    //       console.log(user.email, this.users[i].email, "exist");
    //       if (this.users[i].password == user.password) {
    //         this.route.navigate(['/home']);
    //         break;
    //       } else {
    //         console.log("Wrong password");
    //         break;
    //       }
    //     }
    //     console.log("This account doesn't exist. Pelase sign up");
    //       this.route.navigate(['/signup']);
    //   }
    // }
  }

  logUser(user: UsersModel[]): void {
    this.usersService.logUser(user).subscribe((response: UsersModel[]) => {
      console.log('Login: ', response);
    });
  }

  retrieveUsers(): void {
    this.usersService.getAll().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e),
    });
  }
  ngOnInit(): void {
    this.retrieveUsers();
  }
}
