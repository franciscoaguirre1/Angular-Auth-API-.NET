import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type:string = "password";
  isText : boolean = false;
  eyeIcon: string = "fa fa-eye slash";
  loginForm! : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText? this.type = "text" : this.type = "password"
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log("Form is not valid");
    }

  }

  private validateAllFormsFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(element => {
      const control = formGroup.get;
      if(control instanceof FormControl) {
        control.markAsDirty({onlySelf:true});      } // me quede en el min 20 de la parte 2 de https://www.youtube.com/watch?v=p9ScsROLjdI&t=835s
    });
  }

}
