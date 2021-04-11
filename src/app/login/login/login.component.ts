import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    }); 
  }

  onSignUp(): void {
    if(this.myForm.value.username === "admin" && this.myForm.value.password === "admin"){
      this.router.navigateByUrl('/order');
    }
  }

}
