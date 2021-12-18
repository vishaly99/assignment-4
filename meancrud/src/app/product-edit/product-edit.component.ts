import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,FormGroup,FormBuilder,FormsModule} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productdata: any = {};
  public id:any;
  public productform=new FormGroup({
    productname:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    qty:new FormControl('',[Validators.required]),
  });
  constructor(private route: ActivatedRoute,
    private router: Router,private service:ProductService) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(parmas=>{
        this.id=parmas['id'];
    });
    console.warn(this.id);
    if(this.id!=null)
    {
      this.getProductDetailById();
    }
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
  getProductDetailById()
  {
    
      this.service.editProduct(this.id).subscribe(data=>{
          if(data.toString())
          {
            console.log("getProductDetailById:="+data);
          }
          this.productdata=data;
          console.warn(this.productdata._id);
          this.productform.patchValue({
            productname:this.productdata.productname,
            price:this.productdata.price,
            qty:this.productdata.qty
          });
      });
  }
  onSubmit()
  {
    var data={
      _id:this.id,
      productname:this.productform.value.productname,
      price:this.productform.value.price,
      qty:this.productform.value.qty
    };
    this.service.updateProduct(data).subscribe(data=>{
      if(data!=null)
      {
        this.router.navigate(['/product']);
      }
      else
      {
        alert("data is not updated");
      }
    })
  }
}
