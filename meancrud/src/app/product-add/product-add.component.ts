import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productform=new FormGroup({
    productname:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    qty:new FormControl('',[Validators.required]),
  });
  constructor(private router:Router,private service:ProductService) { }

  ngOnInit(): void {
  }
  get productname()
  {
    return this.productform.get('productname');
  }
  get price()
  {
    return this.productform.get('price');
  }
  get qty()
  {
    return this.productform.get('qty');
  }
  onSubmit()
  {
    this.service.addproduct(this.productform.value.productname,
      this.productform.value.price,
      this.productform.value.qty).subscribe(data=>{
        if(data.toString())
        {
          this.router.navigate(['/product']);
        }
        else{
          console.warn("not added");
        }
      })
  }
}
