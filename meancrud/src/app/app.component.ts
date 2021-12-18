import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meancrud';
  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });
  constructor(private service:ProductService,private router:Router){}
  get email()
  {
    return this.loginform.get('email');
  }
  get password()
  {
    return this.loginform.get('password');
  }
  onSubmit()
  {

    console.warn(this.loginform.value);
    if(this.loginform.value.email=="admin@gmail.com" && this.loginform.value.password=="admin")
    {
        this.router.navigate(['/product']);
    }
    else if(this.loginform.value.email=="user@gmail.com" && this.loginform.value.password=="user")
    {
      this.router.navigate(['/product/display']);
    }
    else
    {
      alert("you are registered");
    }
  }
}
