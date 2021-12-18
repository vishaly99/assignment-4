import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  public products:any[] | undefined;
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData()
  {
    this.service.getproduct().subscribe(data=>{
      this.products=data;
      console.log(data);
    });
  }
  deleteProduct(id:any)
  {
    console.warn(id);
    this.service.deleteproduct(id).subscribe(data=>{
      console.warn(data);
      if(data!=null)
      {
        this.refreshData();
      }
      else
      {
        console.warn("data is not deleted");
      }
    })
  }
}
