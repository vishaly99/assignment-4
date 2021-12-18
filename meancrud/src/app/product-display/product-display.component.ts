import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
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
}
