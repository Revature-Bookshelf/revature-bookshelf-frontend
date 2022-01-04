import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Popup form variables
  // showModal: boolean;
  // submitted = false;

  message: string = "";

  loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  
  // Used to show and hide popup login form
  // showForm() {
  //   this.showModal = true;
  // }

  // hideForm() {
  //   this.showModal = false;
  // }

  handleSubmit(event: Event) {

    let credentials = this.loginForm.value;
    this.userService.doLogin(credentials);
    
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userStream.subscribe({
      next: (e: any) => {
        if (e.action === "LOGIN_SUCCESS")
        this.router.navigate(["profile/:id"])
        if (e.action === "LOGIN_FAILED") {
          console.log(e);
          this.message = "Invalid username and/or password"
        }
      }
    });
  }
}
